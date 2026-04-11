import axios from 'axios';
import * as cheerio from 'cheerio';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Fetches the latest 5 reviews from TripAdvisor
 * Note: TripAdvisor frequently changes their HTML structure.
 * This script uses common selectors as of 2024/2025.
 */
async function fetchTripAdvisorReviews() {
  const url = 'https://www.tripadvisor.com/Attraction_Review-g297896-d34311016-Reviews-Go_Ceylon_Travel-Galle_Galle_District_Southern_Province.html';
  
  try {
    console.log('Fetching TripAdvisor page:', url);
    const { data } = await axios.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
        'Accept-Language': 'en-US,en;q=0.9',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8',
      },
      timeout: 15000
    });

    const $ = cheerio.load(data);
    const reviews = [];

    // Try multiple selectors for review cards
    let reviewCards = $('div[data-automation="reviewCard"]');
    if (reviewCards.length === 0) reviewCards = $('div.review-container');
    if (reviewCards.length === 0) reviewCards = $('div[data-reviewid]');
    
    console.log(`Found ${reviewCards.length} potential review cards.`);

    reviewCards.each((i, el) => {
      // Remove the 5 review limit to sync everything available on the first page
      // if (reviews.length >= 5) return false; 

      // Name selectors - expanded
      let name = $(el).find('span > a[class*="ui_header_link"]').first().text().trim();
      if (!name) name = $(el).find('span[class*="biGQs"] a').first().text().trim();
      if (!name) name = $(el).find('div.info_text > div').first().text().trim();
      if (!name) name = $(el).find('a[class*="WlY7M"]').first().text().trim();
      if (!name) name = 'TripAdvisor Guest';

      // Rating selectors - more robust
      const ratingClass = $(el).find('span[class*="ui_bubble_rating"], span[class*="bubble_rating"]').attr('class') || '';
      const ratingMatch = ratingClass.match(/bubble_(\d+)/);
      let rating = ratingMatch ? parseInt(ratingMatch[1]) / 10 : 5;

      // Comment selectors - expanded
      let comment = $(el).find('span[class*="ySveP"]').first().text().trim();
      if (!comment) comment = $(el).find('div[class*="biGQs"] span').first().text().trim();
      if (!comment) comment = $(el).find('p.partial_entry').first().text().trim();
      if (!comment) comment = $(el).find('div[class*="_reviewText"] span').first().text().trim();
      
      // Date selectors - expanded
      let date = $(el).find('div[class*="biGQs"]').last().text().trim();
      if (!date || date.length > 50) date = $(el).find('span[class*="ratingDate"]').text().replace('Reviewed ', '').trim();
      if (!date || date.length > 50) date = 'Recent';

      if (comment && comment.length > 3) {
        reviews.push({
          id: `ta-${Date.now()}-${i}`,
          name,
          location: 'TripAdvisor',
          rating,
          comment: comment.replace(/\n/g, ' '),
          date,
          source: 'TripAdvisor'
        });
      }
    });

    if (reviews.length === 0) {
      console.log('No reviews found with current selectors. Page structure might have changed.');
      // Optional: Log a snippet of the HTML to help debug
      // console.log($.html().substring(0, 1000));
    }

    return reviews;

  } catch (error) {
    console.error('Error fetching TripAdvisor reviews:', error.message);
    if (error.response) {
      console.error('Status:', error.response.status);
    }
    return [];
  }
}

// Example: Save to a JSON file (which your Next.js app can import)
async function run() {
  try {
    const reviews = await fetchTripAdvisorReviews();
    const outputPath = path.join(__dirname, '../src/data/reviews.json');
    
    if (reviews.length > 0) {
      const dir = path.dirname(outputPath);
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }

      fs.writeFileSync(outputPath, JSON.stringify(reviews, null, 2));
      console.log(`Successfully updated ${reviews.length} reviews in src/data/reviews.json`);
    } else {
      console.warn('No reviews were fetched. Keeping existing reviews if any.');
      if (!fs.existsSync(outputPath)) {
        fs.writeFileSync(outputPath, '[]');
      }
    }
  } catch (err) {
    console.error('Script failed:', err);
    process.exit(1);
  }
}

run();
