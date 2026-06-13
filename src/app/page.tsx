'use client';

// // import { useState , useEffect} from 'react';
// import { AnimatedBackground } from '@/components/AnimatedBackground';
// // import { LoveMessage } from '@/components/LoveMessage';
// // import { ImageGallery } from '@/components/ImageGallery';
// // import { MusicPlayer } from '@/components/MusicPlayer';
// // import { ThemeCustomizer } from '@/components/ThemeCustomizer';
// // import { motion } from 'framer-motion';

// // export default function Home() {
// //   const [selectedImage, setSelectedImage] = useState('');
// //   const [message, setMessage] = useState('I Love You ❤️');
// //   const [themeGradient, setThemeGradient] = useState('from-pink-900 via-pink-700 to-red-600');
// //   const [currentSection, setCurrentSection] = useState(0);

// //   const sections = ['Message', 'Images', 'Music', 'Theme'];

// //   useEffect(() => {
// //      if (!navigator.geolocation) return;
// //     navigator.geolocation.getCurrentPosition((position)=>{
// //       const {latitude, longitude} = position.coords;
// //       console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
// //     })
// //   },[])

// //   const handleScroll = (index: number) => {
// //     setCurrentSection(index);
// //   };

// //   return (
// //     <main
// //       className={`min-h-screen bg-gradient-to-br ${themeGradient} transition-all duration-700 overflow-hidden`}
// //     >
// //       {/* Animated Background */}
// //       <AnimatedBackground />

// //       {/* Glass Morphism Container */}
// //       <div className="relative z-10 max-w-4xl mx-auto px-4 py-8">
// //         {/* Header */}
// //         <motion.div
// //           className="text-center py-8"
// //           initial={{ opacity: 0, y: -20 }}
// //           animate={{ opacity: 1, y: 0 }}
// //           transition={{ duration: 0.8 }}
// //         >
// //           <h1 className="text-5xl md:text-6xl font-bold text-white mb-2">
// //             💕 Love Presentation 💕
// //           </h1>
// //           <p className="text-pink-200 text-lg">
// //             Express your feelings in the most beautiful way
// //           </p>
// //         </motion.div>

// //         {/* Navigation Dots */}
// //         <div className="flex justify-center gap-3 mb-12">
// //           {sections.map((section, idx) => (
// //             <motion.button
// //               key={idx}
// //               onClick={() => handleScroll(idx)}
// //               className={`px-4 py-2 rounded-full font-semibold transition-all ${
// //                 currentSection === idx
// //                   ? 'bg-white text-pink-600 shadow-lg'
// //                   : 'bg-white/20 text-white hover:bg-white/30'
// //               }`}
// //               whileHover={{ scale: 1.05 }}
// //               whileTap={{ scale: 0.95 }}
// //             >
// //               {section}
// //             </motion.button>
// //           ))}
// //         </div>

// //         {/* Content Sections */}
// //         <div className="space-y-12">
// //           {/* Love Message Section */}
// //           <motion.div
// //             className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-2xl"
// //             initial={{ opacity: 0 }}
// //             animate={{ opacity: currentSection === 0 ? 1 : 0.5 }}
// //             transition={{ duration: 0.5 }}
// //           >
// //             <LoveMessage onMessageChange={setMessage} />
// //           </motion.div>

// //           {/* Image Gallery Section */}
// //           <motion.div
// //             className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-2xl"
// //             initial={{ opacity: 0 }}
// //             animate={{ opacity: currentSection === 1 ? 1 : 0.5 }}
// //             transition={{ duration: 0.5 }}
// //           >
// //             <ImageGallery
// //               onImageSelect={setSelectedImage}
// //               selectedImage={selectedImage}
// //             />
// //           </motion.div>

// //           {/* Music Player Section */}
// //           <motion.div
// //             className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-2xl"
// //             initial={{ opacity: 0 }}
// //             animate={{ opacity: currentSection === 2 ? 1 : 0.5 }}
// //             transition={{ duration: 0.5 }}
// //           >
// //             <MusicPlayer />
// //           </motion.div>

// //           {/* Theme Customizer Section */}
// //           <motion.div
// //             className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-2xl"
// //             initial={{ opacity: 0 }}
// //             animate={{ opacity: currentSection === 3 ? 1 : 0.5 }}
// //             transition={{ duration: 0.5 }}
// //           >
// //             <ThemeCustomizer onThemeChange={setThemeGradient} />
// //           </motion.div>
// //         </div>

// //         {/* Action Buttons */}
// //         <motion.div
// //           className="flex flex-col md:flex-row gap-4 justify-center mt-12 mb-12"
// //           initial={{ opacity: 0, y: 20 }}
// //           animate={{ opacity: 1, y: 0 }}
// //           transition={{ duration: 0.8, delay: 0.2 }}
// //         >
// //           <motion.button
// //             className="px-8 py-3 bg-white text-pink-600 font-bold rounded-full hover:shadow-lg transition-shadow"
// //             whileHover={{ scale: 1.05 }}
// //             whileTap={{ scale: 0.95 }}
// //           >
// //             💌 Share
// //           </motion.button>
// //           <motion.button
// //             className="px-8 py-3 bg-pink-500 text-white font-bold rounded-full hover:shadow-lg transition-shadow"
// //             whileHover={{ scale: 1.05 }}
// //             whileTap={{ scale: 0.95 }}
// //           >
// //             📸 Take Screenshot
// //           </motion.button>
// //           <motion.button
// //             className="px-8 py-3 bg-red-500 text-white font-bold rounded-full hover:shadow-lg transition-shadow"
// //             whileHover={{ scale: 1.05 }}
// //             whileTap={{ scale: 0.95 }}
// //           >
// //             ⬇️ Download
// //           </motion.button>
// //         </motion.div>

// //         {/* Footer */}
// //         <motion.footer
// //           className="text-center py-8 text-pink-200 text-sm"
// //           initial={{ opacity: 0 }}
// //           animate={{ opacity: 1 }}
// //           transition={{ duration: 0.8, delay: 0.4 }}
// //         >
// //           <p>Made with 💕 for someone special</p>
// //         </motion.footer>
// //       </div>
// //     </main>
// //   );
// // }


// import React, { useState } from "react"

// import { useRouter } from "next/navigation"

// // import { AnimatedBackground } from "@/components/AnimatedBackground"

// import { useAudio } from "@/context/AudioContext"

// import "./heart.css"

// export default function HeartBlast() {

//   const router = useRouter()

//   const { playMusic } = useAudio()

//   const [explode, setExplode] =
//     useState(false)

//   const handleClick = async () => {

//     // Prevent Multiple Clicks
//     if (explode) return

//     setExplode(true)

//     // Start Global Music
//     await playMusic()

//     // Navigate
//     setTimeout(() => {

//       router.push("/question")

//     }, 2000)

//   }

//   return (

//     <div className="heart-container">

//       <AnimatedBackground />

//       {!explode && (

//         <p className="heading">
//           Happy Birthday My Dear
//         </p>

//       )}

//       <button
//         className={`
//           heart-btn
//           ${explode ? "explode" : ""}
//         `}
//         onClick={handleClick}
//       >
//         ❤️
//       </button>

//       {explode &&

//         [...Array(40)].map((_, i) => (

//           <span
//             key={i}
//             className="particle"
//             style={{
//               "--x":
//                 `${Math.random() * 240 - 120}px`,

//               "--y":
//                 `${Math.random() * 240 - 120}px`,

//               "--r":
//                 `${Math.random() * 720}deg`,
//             } as React.CSSProperties}
//           />

//         ))

//       }

//     </div>

//   )

// }



'use client'
import React, {useEffect} from 'react'
import { useRouter } from 'next/navigation'

const Home = () => {
  const router = useRouter()
  useEffect(() => {
    router.push('/gallery')
  }, [])

  return (
    <div>
      
    </div>
  )
}

export default Home
