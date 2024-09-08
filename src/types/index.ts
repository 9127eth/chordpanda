export interface SoundCard {
  id: string;
  name: string;
  cardType: 'Single Keys' | 'Chords';
  numberOfKeyboards?: number;
  keysToPlay: number;
  notesInCard: number;
  difficultyLevel: 'Beginner' | 'Intermediate' | 'Advanced';
  musicalStyle: string;
  mood: string;
  timeSignature: string;
  tempo: string;
  keySignature: string;
  scaleType: string;
  chordType?: string;
  chordProgression?: string;
  description: string;
  tip: string;
  musicTheory: string;
  keys?: { note: string; order: number }[];
  chords?: { name: string; notes: string[]; order: number }[];
}
