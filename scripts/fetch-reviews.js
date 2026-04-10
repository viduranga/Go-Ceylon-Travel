const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');
const path = require('path');

/**
 * Fetches the latest 5 reviews from TripAdvisor
 * Note: TripAdvisor frequently changes their HTML structure.
 * This script uses common selectors as of 2024/2025.
 */
async function fetchTripAdvisorReviews() {
  const url = 'https://www.tripadvisor.com/Attraction_Review-g297896-d34311016-Reviews-Go_Ceylon_Travel-Galle_Galle_District_Southern_Province.html';
  
  try {
    console.log('Fetching TripAdvisor page...');
    const { data } = await axios.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept-Language': 'en-US,en;q=0.9',
      }
    });

    const $ = cheerio.load(data);
    const reviews = [];

    // TripAdvisor review cards usually have a specific data attribute
    $('div[data-automation="reviewCard"]').each((i, el) => {
      if (i >= 5) return false; // Limit to 5

      const name = $(el).find('span > a[class*="ui_header_link"], span[class*="biGQs"] a').first().text().trim() || 'TripAdvisor Guest';
      
      // Rating is usually stored in a class name like "bubble_50" (5 stars)
      const ratingClass = $(el).find('span[class*="ui_bubble_rating"]').attr('class') || '';
      const ratingMatch = ratingClass.match(/bubble_(\d+)/);
      const rating = ratingMatch ? parseInt(ratingMatch[1]) / 10 : 5;

      // Review text
      const comment = $(el).find('span[class*="ySveP"], div[class*="biGQs"] span').first().text().trim();
      
      // Date of stay/review
      const date = $(el).find('div[class*="biGQs"]').last().text().trim() || 'Recent';

      if (comment) {
        reviews.push({
          id: Date.now() + i,
          name,
          location: 'TripAdvisor',
          rating,
          comment,
          date,
          source: 'TripAdvisor'
        });
      }
    });

    console.log(`Successfully fetched ${reviews.length} reviews.`);
    return reviews;

  } catch (error) {
    console.error('Error fetching TripAdvisor reviews:', error.message);
    return [];
  }
}

// Example: Save to a JSON file (which your Next.js app can import)
async function run() {
  const reviews = await fetchTripAdvisorReviews();
  if (reviews.length > 0) {
    const outputPath = path.join(__dirname, '../src/data/reviews.json');
    
    // Ensure directory exists
    const dir = path.dirname(outputPath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    fs.writeFileSync(outputPath, JSON.stringify(reviews, null, 2));
    console.log('Reviews updated in src/data/reviews.json');
  }
}

run();
