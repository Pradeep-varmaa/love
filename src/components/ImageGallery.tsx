'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { presetImages } from '@/lib/presetImages';

interface ImageGalleryProps {
  onImageSelect: (imageUrl: string) => void;
  selectedImage: string;
}

export const ImageGallery = ({ onImageSelect, selectedImage }: ImageGalleryProps) => {
  const [uploadedImages, setUploadedImages] = useState<string[]>([]);
  const [showPresets, setShowPresets] = useState(true);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      Array.from(files).forEach((file) => {
        const reader = new FileReader();
        reader.onload = (event) => {
          if (event.target?.result) {
            const imageUrl = event.target.result as string;
            setUploadedImages((prev) => [...prev, imageUrl]);
            onImageSelect(imageUrl);
          }
        };
        reader.readAsDataURL(file);
      });
    }
  };

  const allImages = showPresets ? presetImages.map((img) => img.url) : uploadedImages;

  return (
    <motion.div
      className="py-8 px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl font-bold text-center mb-8 text-pink-400">
        Choose Your Images 💕
      </h2>

      {/* Image Display */}
      {selectedImage && (
        <motion.div
          className="mb-8 rounded-lg overflow-hidden shadow-2xl max-w-md mx-auto"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
        >
          <Image
            src={selectedImage}
            alt="Selected"
            width={500}
            height={400}
            className="w-full h-80 object-cover"
          />
        </motion.div>
      )}

      {/* Toggle Buttons */}
      <div className="flex gap-4 justify-center mb-6">
        <button
          onClick={() => setShowPresets(true)}
          className={`px-6 py-2 rounded-lg font-semibold transition-all ${
            showPresets
              ? 'bg-pink-500 text-white shadow-lg'
              : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
          }`}
        >
          Preset Gallery
        </button>
        <button
          onClick={() => setShowPresets(false)}
          className={`px-6 py-2 rounded-lg font-semibold transition-all ${
            !showPresets
              ? 'bg-pink-500 text-white shadow-lg'
              : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
          }`}
        >
          Uploaded Images
        </button>
      </div>

      {/* Upload Section */}
      <motion.div
        className="mb-8 p-6 border-2 border-dashed border-pink-400 rounded-lg text-center hover:border-pink-300 transition-colors cursor-pointer"
        whileHover={{ scale: 1.02 }}
      >
        <label className="cursor-pointer">
          <input
            type="file"
            multiple
            accept="image/*"
            onChange={handleImageUpload}
            className="hidden"
          />
          <div className="text-pink-400">
            <p className="text-2xl mb-2">📷</p>
            <p className="font-semibold">Click to upload images</p>
            <p className="text-sm text-gray-400">PNG, JPG, GIF up to 10MB</p>
          </div>
        </label>
      </motion.div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {allImages.map((image, idx) => (
          <motion.div
            key={idx}
            className={`cursor-pointer rounded-lg overflow-hidden border-2 transition-all ${
              selectedImage === image
                ? 'border-pink-500 shadow-lg shadow-pink-500/50'
                : 'border-gray-600 hover:border-pink-400'
            }`}
            whileHover={{ scale: 1.05 }}
            onClick={() => onImageSelect(image)}
          >
            <Image
              src={image}
              alt={`Gallery ${idx}`}
              width={200}
              height={200}
              className="w-full h-40 object-cover"
            />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};
