'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

interface LoveMessageProps {
  onMessageChange: (message: string) => void;
}

export const LoveMessage = ({ onMessageChange }: LoveMessageProps) => {
  const [message, setMessage] = useState(
    'I Love You ❤️'
  );
  const [isEditing, setIsEditing] = useState(false);

  const handleMessageChange = (newMessage: string) => {
    setMessage(newMessage);
    onMessageChange(newMessage);
  };

  return (
    <motion.div
      className="text-center py-12"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
    >
      {isEditing ? (
        <input
          type="text"
          value={message}
          onChange={(e) => handleMessageChange(e.target.value)}
          onBlur={() => setIsEditing(false)}
          autoFocus
          className="text-5xl md:text-6xl font-bold text-center bg-transparent text-pink-500 focus:outline-none border-b-4 border-pink-400 w-full"
          placeholder="Type your message..."
        />
      ) : (
        <motion.h1
          className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-rose-500 cursor-pointer hover:scale-110 transition-transform"
          onClick={() => setIsEditing(true)}
          animate={{
            textShadow: [
              '0 0 20px rgba(236, 72, 153, 0.5)',
              '0 0 40px rgba(239, 68, 68, 0.5)',
              '0 0 20px rgba(244, 63, 94, 0.5)',
            ],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
          }}
        >
          {message}
        </motion.h1>
      )}

      <motion.p
        className="text-lg md:text-2xl text-gray-300 mt-6"
        animate={{ opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        Click to customize message ✨
      </motion.p>
    </motion.div>
  );
};
