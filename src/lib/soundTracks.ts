export interface Track {
  id: string;
  name: string;
  url: string;
  duration: number;
}

export const soundTracks: Track[] = [
  {
    id: 'piano',
    name: '🎹 Romantic Piano',
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
    duration: 360,
  },
  {
    id: 'strings',
    name: '🎻 Soft Strings',
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
    duration: 360,
  },
  {
    id: 'orchestral',
    name: '🎼 Orchestral Love',
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
    duration: 360,
  },
  {
    id: 'ambient',
    name: '🌙 Ambient Serenity',
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3',
    duration: 360,
  },
  {
    id: 'jazz',
    name: '🎷 Smooth Jazz',
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3',
    duration: 360,
  },
];
