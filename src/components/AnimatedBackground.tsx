'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface FloatingSymbol {
  id: number;
  x: number;
  duration: number;
  delay: number;
  size: number;
  symbol: string;
  drift: number;
}

export const AnimatedBackground = () => {

  const [symbols, setSymbols] =
    useState<FloatingSymbol[]>([]);

  const [screenHeight, setScreenHeight] =
    useState(800);

  useEffect(() => {

    setScreenHeight(window.innerHeight);

    const newSymbols = Array.from({
      length: 12
    }).map((_, i) => ({

      id: i,

      x: Math.random() * 100,

      duration: 8 + Math.random() * 5,

      delay: Math.random() * 3,

      size: 20 + Math.random() * 30,

      drift: Math.random() * 120 - 60,

      symbol:
        ['❤️', '💕', '✨', '💫', '🌹'][
          Math.floor(Math.random() * 5)
        ],

    }));

    setSymbols(newSymbols);

  }, []);

  return (

    <div
      className="
        fixed
        inset-0
        overflow-hidden
        pointer-events-none
        z-0
      "
    >

      {symbols.map((symbol) => (

        <motion.div
          key={symbol.id}
          className="absolute text-center will-change-transform"
          style={{
            left: `${symbol.x}%`,
            top: '110%',
            fontSize: `${symbol.size}px`,
          }}

          animate={{
            y: [0, -screenHeight - 200],

            x: [
              0,
              symbol.drift,
              -symbol.drift,
              0
            ],

            opacity: [0, 1, 1, 0],

            rotate: [0, 180, 360],
          }}

          transition={{
            duration: symbol.duration,
            delay: symbol.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          {symbol.symbol}
        </motion.div>

      ))}

      {/* Glow Overlay */}

      <motion.div
        className="
          absolute
          inset-0
          bg-gradient-to-b
          from-transparent
          via-pink-500/5
          to-transparent
        "

        animate={{
          opacity: [0.25, 0.5, 0.25],
        }}

        transition={{
          duration: 4,
          repeat: Infinity,
        }}
      />

    </div>

  );

};