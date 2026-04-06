import React, { useState, useEffect } from "react";
import { Upload, Image as ImageIcon, CheckCircle2, AlertCircle, Loader2, Trash2 } from "lucide-react";
import { motion } from "motion/react";

export default function Admin() {
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);
  const [images, setImages] = useState<string[]>([]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
      setMessage(null);
    }
  };

  const handleUpload = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) return;

    setUploading(true);
    setMessage(null);

    const formData = new FormData();
    formData.append("image", file);

    try {
      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) throw new Error("Upload failed");

      const data = await response.json();
      setMessage({ type: "success", text: "Image uploaded successfully!" });
      setFile(null);
      // In a real app, we'd fetch the updated list of images
      setImages((prev) => [data.url, ...prev]);
    } catch (error) {
      setMessage({ type: "error", text: "Failed to upload image. Please try again." });
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-emerald-900 mb-4">Media Manager</h1>
        <p className="text-gray-600">Upload and manage images for your tours and destinations.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Upload Form */}
        <div className="lg:col-span-1">
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-emerald-100">
            <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <Upload className="w-5 h-5 text-emerald-600" />
              Upload New Image
            </h2>

            <form onSubmit={handleUpload} className="space-y-6">
              <div className="relative group">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                />
                <div className={`border-2 border-dashed rounded-2xl p-8 text-center transition-all ${
                  file ? "border-emerald-500 bg-emerald-50" : "border-emerald-200 group-hover:border-emerald-400"
                }`}>
                  <ImageIcon className={`w-12 h-12 mx-auto mb-4 ${file ? "text-emerald-600" : "text-gray-400"}`} />
                  <p className="text-sm font-medium text-gray-600">
                    {file ? file.name : "Click or drag to select an image"}
                  </p>
                  <p className="text-xs text-gray-400 mt-2">PNG, JPG, WEBP up to 5MB</p>
                </div>
              </div>

              {message && (
                <div className={`p-4 rounded-xl flex items-center gap-3 text-sm ${
                  message.type === "success" ? "bg-emerald-50 text-emerald-700" : "bg-red-50 text-red-700"
                }`}>
                  {message.type === "success" ? <CheckCircle2 className="w-5 h-5" /> : <AlertCircle className="w-5 h-5" />}
                  {message.text}
                </div>
              )}

              <button
                type="submit"
                disabled={!file || uploading}
                className="w-full bg-emerald-900 text-white py-4 rounded-xl font-bold hover:bg-emerald-800 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {uploading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Uploading...
                  </>
                ) : (
                  "Upload Image"
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Media Library (Mock) */}
        <div className="lg:col-span-2">
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-emerald-100">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Recent Uploads</h2>
            
            {images.length > 0 ? (
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {images.map((url, idx) => (
                  <div key={idx} className="group relative aspect-square rounded-2xl overflow-hidden border border-emerald-50">
                    <img src={url} alt="Uploaded" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <button className="p-2 bg-white rounded-full text-red-600 hover:bg-red-50 transition-colors">
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-20 bg-emerald-50/50 rounded-2xl border border-dashed border-emerald-100">
                <ImageIcon className="w-12 h-12 text-emerald-200 mx-auto mb-4" />
                <p className="text-gray-400">No images uploaded yet.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
