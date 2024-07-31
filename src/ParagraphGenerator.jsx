// src/ParagraphGenerator.js
import React, { useState } from 'react';
import { Transition } from '@headlessui/react';

// Function to generate a random paragraph
const generateRandomParagraph = () => {
  const sentences = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  ];
  const paragraph = [];
  const numSentences = Math.floor(Math.random() * 5) + 3; // 3 to 7 sentences
  for (let i = 0; i < numSentences; i++) {
    const sentence = sentences[Math.floor(Math.random() * sentences.length)];
    paragraph.push(sentence);
  }
  return paragraph.join(' ');
};

const ParagraphGenerator = () => {
  const [numParagraphs, setNumParagraphs] = useState(1);
  const [paragraphs, setParagraphs] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newParagraphs = [];
    for (let i = 0; i < numParagraphs; i++) {
      newParagraphs.push(generateRandomParagraph());
    }
    setParagraphs(newParagraphs);
  };

  return (
    <div className="container mx-auto p-6 bg-animated-gradient rounded-lg shadow-xl flex flex-col items-center animate-fade-in-up h-screen">
      <h1 className="text-3xl font-bold mb-6 text-white animate-bounce">Random Paragraph Generator</h1>
      <form onSubmit={handleSubmit} className="mb-6 flex flex-col items-center w-full">
        <label className="block mb-4 font-semibold text-white">
          Number of Paragraphs:
          <input
            type="number"
            value={numParagraphs}
            onChange={(e) => setNumParagraphs(e.target.value)}
            min="1"
            required
            className="ml-2 p-2 border rounded text-black"
          />
        </label>
        <button type="submit" className="p-3 bg-yellow-400 text-black rounded-full ripple-button transition duration-300 ease-in-out transform hover:scale-105">
          Generate
        </button>
      </form>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full h-full">
        {paragraphs.map((paragraph, index) => (
          <Transition
            key={index}
            show={true}
            enter="transition-opacity duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="perspective">
              <div className="card w-full h-full">
                <div className="card-front p-4 bg-white rounded shadow-md text-black overflow-y-auto">
                  {paragraph}
                </div>
                <div className="card-back p-4 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 rounded shadow-md text-white overflow-y-auto">
                  {paragraph}
                </div>
              </div>
            </div>
          </Transition>
        ))}
      </div>
    </div>
  );
};

export default ParagraphGenerator;