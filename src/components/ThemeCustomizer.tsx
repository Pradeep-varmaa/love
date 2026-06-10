'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

interface ThemeCustomizerProps {
  onThemeChange: (gradient: string) => void;
}

const presetThemes = [
  {
    id: 'rose',
    name: 'Rose Garden',
    gradient: 'from-pink-900 via-pink-700 to-red-600',
    accent: 'pink',
  },
  {
    id: 'sunset',
    name: 'Sunset Love',
    gradient: 'from-orange-900 via-red-700 to-pink-600',
    accent: 'orange',
  },
  {
    id: 'midnight',
    name: 'Midnight Purple',
    gradient: 'from-purple-900 via-purple-700 to-pink-600',
    accent: 'purple',
  },
  {
    id: 'cherry',
    name: 'Cherry Bliss',
    gradient: 'from-red-900 via-red-700 to-pink-500',
    accent: 'red',
  },
  {
    id: 'wine',
    name: 'Wine & Rose',
    gradient: 'from-red-950 via-pink-800 to-rose-600',
    accent: 'rose',
  },
  {
    id: 'coral',
    name: 'Coral Dreams',
    gradient: 'from-pink-800 via-orange-700 to-red-600',
    accent: 'amber',
  },
];

export const ThemeCustomizer = ({ onThemeChange }: ThemeCustomizerProps) => {
  const [selectedTheme, setSelectedTheme] = useState(presetThemes[0]);

  const handleThemeSelect = (theme: typeof presetThemes[0]) => {
    setSelectedTheme(theme);
    onThemeChange(theme.gradient);
  };

  return (
    <motion.div
      className="py-8 px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl font-bold text-center mb-8 text-pink-400">
        Choose Theme 🎨
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-2xl mx-auto">
        {presetThemes.map((theme) => (
          <motion.button
            key={theme.id}
            onClick={() => handleThemeSelect(theme)}
            className={`p-4 rounded-lg border-2 transition-all ${
              selectedTheme.id === theme.id
                ? 'border-white shadow-lg'
                : 'border-gray-600 hover:border-pink-400'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div
              className={`bg-gradient-to-br ${theme.gradient} h-20 rounded mb-2 shadow-lg`}
            />
            <p className="text-sm font-semibold text-white text-center">
              {theme.name}
            </p>
          </motion.button>
        ))}
      </div>

      {/* Custom Color Picker */}
      <motion.div
        className="mt-8 max-w-md mx-auto p-6 bg-gray-800 rounded-lg"
        initial={{ y: 20 }}
        animate={{ y: 0 }}
      >
        <p className="text-center text-gray-300 mb-4">Or create custom theme:</p>
        <div className="flex gap-3">
          <input
            type="color"
            defaultValue="#ec4899"
            className="flex-1 h-12 rounded cursor-pointer"
            onChange={(e) => {
              // Custom color handling
            }}
          />
          <input
            type="color"
            defaultValue="#ef4444"
            className="flex-1 h-12 rounded cursor-pointer"
            onChange={(e) => {
              // Custom color handling
            }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
};
