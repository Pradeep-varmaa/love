export interface PresetImage {
  id: string;
  name: string;
  url: string;
  category: string;
}

export const presetImages: PresetImage[] = [
  {
    id: 'sunset1',
    name: 'Romantic Sunset',
    url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop',
    category: 'nature',
  },
  {
    id: 'flower1',
    name: 'Rose Garden',
    url: 'https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=600&h=400&fit=crop',
    category: 'flowers',
  },
  {
    id: 'couple1',
    name: 'Happy Couple',
    url: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&h=400&fit=crop',
    category: 'couples',
  },
  {
    id: 'candle1',
    name: 'Candlelight',
    url: 'https://images.unsplash.com/photo-1516589178587-c52a50891abc?w=600&h=400&fit=crop',
    category: 'romantic',
  },
  {
    id: 'heart1',
    name: 'Love Heart',
    url: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=600&h=400&fit=crop',
    category: 'hearts',
  },
  {
    id: 'beach1',
    name: 'Beach Romance',
    url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&h=400&fit=crop',
    category: 'nature',
  },
];
