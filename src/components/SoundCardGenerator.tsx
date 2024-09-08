'use client';

import React, { useState } from 'react';
import { SoundCard } from '../types';

const SoundCardGenerator: React.FC = () => {
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = async () => {
    setIsGenerating(true);
    // TODO: Implement AI generation logic
    console.log('Generating sound card...');
    setIsGenerating(false);
  };

  return (
    <div className="p-4 border rounded-lg shadow-lg bg-cardBackground">
      <h2 className="text-2xl font-bold mb-4 text-mainCardText">Sound Card Generator</h2>
      <button
        onClick={handleGenerate}
        disabled={isGenerating}
        className={`px-4 py-2 rounded font-bold text-white ${
          isGenerating ? 'bg-gray-400 cursor-not-allowed' : 'bg-actionButton hover:bg-actionButton/80'
        }`}
      >
        {isGenerating ? 'Generating...' : 'Generate Sound Card'}
      </button>
    </div>
  );
};

export default SoundCardGenerator;
