'use client';

import { useState } from 'react';
import styles from './page.module.css';
import { useRouter } from 'next/navigation';

export default function BirthdayPage() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  return (
    <div className={styles.container}>
      {/* Background Glow */}
      <div className={styles.bgGlow1}></div>
      <div className={styles.bgGlow2}></div>

      {/* Confetti */}
      {open && (
        <>
          {[...Array(40)].map((_, i) => (
            <span
              key={i}
              className={styles.confetti}
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random()}s`,
              }}
            />
          ))}
        </>
      )}

      {/* Flying Chocolates */}
      {/* {open && (
        <>
          {[...Array(1)].map((_, i) => {
            const randomX = Math.random() * 400 - 200;
            const randomRotate = Math.random() * 720;
            const randomDelay = Math.random() * 0.5;

            return (
              <div
                key={i}
                className={styles.chocolate}
                style={{
                  '--x': `${randomX}px`,
                  '--rotate': `${randomRotate}deg`,
                  animationDelay: `${randomDelay}s`,
                  left: '50%',
                } as React.CSSProperties}
              >
                🍫
              </div>
            );
          })}
        </>
      )} */}

      {/* Birthday Message */}
      {open && (
        <div className={styles.messageContainer}>
          <h1 className={styles.title}>🎉 Happy Birthday Bommali 🎂</h1>
          <p className={styles.subtitle}>
            Wishing you joy, success, happiness and endless smiles ✨
          </p>
          <p className={styles.subtitle}>
            I m Always Here For You, No Matter What. Love You Bommali ❤️
          </p>
          <button className={styles.galleryBtn} onClick={() => router.push('/gallery')}>
            Go to Gallery
          </button>
        </div>
      )}

      {open ? (
        <div className={styles.teddyContainer}>
          <img src="/teddy.png" alt="Teddy Bear" className={styles.teddy} />
        </div>
      ) : (
        <div
          className={`${styles.giftWrapper} ${open ? styles.opened : ''}`}
          onClick={() => setOpen(true)}
        >
          <div className={styles.lid}></div>
          <div className={styles.box}></div>
          <div className={styles.tapText}>Tap to Open 🎁</div>
        </div>
      )}
    </div>
  );
}