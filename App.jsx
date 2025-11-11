import React, { useState } from "react";
import "./App.css";

const flashcards = [
  { question: "What is a closure in JavaScript?", answer: "A closure is when a function retains access to its lexical scope." },
  { question: "What does 'this' refer to in JavaScript?", answer: "It refers to the object that is executing the current function." },
  { question: "What is the difference between '==' and '==='?", answer: "'===' checks both value and type; '==' checks only value." },
];

export default function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => setIsFlipped(!isFlipped);
  const handleNext = () => {
    setIsFlipped(false);
    setCurrentIndex((prev) => (prev + 1) % flashcards.length);
  };
  const handlePrev = () => {
    setIsFlipped(false);
    setCurrentIndex((prev) => (prev - 1 + flashcards.length) % flashcards.length);
  };

  const progress = ((currentIndex + 1) / flashcards.length) * 100;

  return (
    <div className="app">
      <h1>JavaScript Flashcards</h1>
      
      <div className={`flashcard ${isFlipped ? "flipped" : ""}`} onClick={handleFlip}>
        <p>{isFlipped ? flashcards[currentIndex].answer : flashcards[currentIndex].question}</p>
      </div>

      <div className="controls">
        <button onClick={handlePrev}>Previous</button>
        <button onClick={handleNext}>Next</button>
      </div>

      <div className="progress-bar">
        <div className="progress" style={{ width: `${progress}%` }}></div>
      </div>
      <p>{currentIndex + 1} / {flashcards.length}</p>
    </div>
  );
}

