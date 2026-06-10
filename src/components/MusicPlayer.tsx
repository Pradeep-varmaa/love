'use client';

import { motion } from 'framer-motion';
import { useAudio } from '@/hooks/useAudio';
import { soundTracks } from '@/lib/soundTracks';
import { useState } from 'react';

interface MusicPlayerProps {
  themeColor?: string;
}

export const MusicPlayer = ({ themeColor = 'pink' }: MusicPlayerProps) => {
  const audio = useAudio();
  const [selectedTrack, setSelectedTrack] = useState(soundTracks[0]);

  const handleTrackSelect = (track: typeof soundTracks[0]) => {
    setSelectedTrack(track);
    if (audio.isPlaying) {
      audio.play(track.url);
    }
  };

  const togglePlayPause = () => {
    if (audio.isPlaying) {
      audio.pause();
    } else {
      if (audio.currentTime === 0) {
        audio.play(selectedTrack.url);
      } else {
        audio.resume();
      }
    }
  };

  const formatTime = (time: number) => {
    if (!time || !isFinite(time)) return '0:00';
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <motion.div
      className="py-8 px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl font-bold text-center mb-8 text-pink-400">
        Background Music 🎵
      </h2>

      {/* Track Selector */}
      <div className="mb-8 max-w-2xl mx-auto">
        <p className="text-sm text-gray-400 mb-3">Select a track:</p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
          {soundTracks.map((track) => (
            <motion.button
              key={track.id}
              onClick={() => handleTrackSelect(track)}
              className={`p-3 rounded-lg text-sm font-semibold transition-all ${
                selectedTrack.id === track.id
                  ? 'bg-pink-500 text-white shadow-lg'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {track.name}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Player Controls */}
      <motion.div
        className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl p-6 max-w-md mx-auto shadow-2xl"
        initial={{ y: 20 }}
        animate={{ y: 0 }}
      >
        {/* Track Info */}
        <h3 className="text-center text-lg font-bold text-white mb-4">
          {selectedTrack.name}
        </h3>

        {/* Play Button */}
        <div className="flex justify-center mb-6">
          <motion.button
            onClick={togglePlayPause}
            className="w-16 h-16 rounded-full bg-gradient-to-r from-pink-500 to-red-500 text-white text-3xl shadow-lg hover:shadow-pink-500/50 transition-shadow"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {audio.isPlaying ? '⏸️' : '▶️'}
          </motion.button>
        </div>

        {/* Progress Bar */}
        <div className="mb-4">
          <input
            type="range"
            min="0"
            max={audio.duration || 0}
            value={audio.currentTime || 0}
            onChange={(e) => audio.seek(Number(e.target.value))}
            className="w-full h-2 bg-gray-700 rounded-full cursor-pointer appearance-none accent-pink-500"
          />
          <div className="flex justify-between text-xs text-gray-400 mt-2">
            <span>{formatTime(audio.currentTime)}</span>
            <span>{formatTime(audio.duration)}</span>
          </div>
        </div>

        {/* Volume Control */}
        <div className="flex items-center gap-3">
          <span className="text-lg">🔊</span>
          <input
            type="range"
            min="0"
            max="1"
            step="0.1"
            value={audio.volume}
            onChange={(e) => audio.setVolume(Number(e.target.value))}
            className="flex-1 h-2 bg-gray-700 rounded-full cursor-pointer appearance-none accent-pink-500"
          />
        </div>
      </motion.div>
    </motion.div>
  );
};
