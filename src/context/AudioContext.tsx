'use client'

import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react'

interface AudioContextType {

  playMusic: () => Promise<void>

  pauseMusic: () => void

  isPlaying: boolean
}

const AudioContext =
  createContext<AudioContextType | null>(
    null
  )

export const AudioProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {

  const audioRef =
    useRef<HTMLAudioElement | null>(null)

  const [isPlaying, setIsPlaying] =
    useState(false)

  // Create Audio Once
  useEffect(() => {

    audioRef.current =
      new Audio('/birthday_song.mp3')

    audioRef.current.loop = true

    audioRef.current.volume = 1

    audioRef.current.preload = 'auto'

    return () => {

      audioRef.current?.pause()

      audioRef.current = null

    }

  }, [])

  // PLAY

  const playMusic = async () => {

    try {

      await audioRef.current?.play()

      setIsPlaying(true)

    } catch (error) {

      console.log(
        'Audio blocked:',
        error
      )

    }

  }

  // PAUSE

  const pauseMusic = () => {

    audioRef.current?.pause()

    setIsPlaying(false)

  }

  return (

    <AudioContext.Provider
      value={{
        playMusic,
        pauseMusic,
        isPlaying
      }}
    >

      {children}

    </AudioContext.Provider>

  )

}

// Hook

export const useAudio = () => {

  const context =
    useContext(AudioContext)

  if (!context) {

    throw new Error(
      'useAudio must be used inside AudioProvider'
    )

  }

  return context

}