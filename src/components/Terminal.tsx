"use client";

import { useState, useEffect, useRef } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

interface TerminalProps {
  lines: string[];
  prompt?: string;
  className?: string;
}

type GameState = 'idle' | 'playing' | 'finished';

export const Terminal = ({ lines, prompt = "user@terminal:~$", className = "" }: TerminalProps) => {
  const [currentInput, setCurrentInput] = useState("");
  const [gameState, setGameState] = useState<GameState>('idle');
  const [gameText, setGameText] = useState("");
  const [userInput, setUserInput] = useState("");
  const [startTime, setStartTime] = useState<number | null>(null);
  const [wpm, setWpm] = useState(0);
  const [accuracy, setAccuracy] = useState(0);
  const [currentWpm, setCurrentWpm] = useState(0);
  const [correctChars, setCorrectChars] = useState(0);
  const [totalChars, setTotalChars] = useState(0);
  const [completedWords, setCompletedWords] = useState(0);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const isMobile = useIsMobile();

  // Portfolio-related typing text options
  const typingTexts = [
    "Troy Parsons is a passionate software engineer specializing in full-stack development with expertise in TypeScript, React, Next.js, and modern web technologies. Based in Toronto, he creates innovative solutions that combine clean code with user-centered design.",
    "The dev_operations platform revolutionizes team collaboration with real-time Kanban boards, instant messaging, and GitHub integration. Built using the T3 Stack, it provides seamless project management for development teams worldwide.",
    "Dividnd is a professional dividend portfolio tracking platform that helps investors maximize passive income through real-time analytics, yield calculations, and intelligent stock recommendations. Secure, private, and designed for serious investors.",
    "Monkey Budget is a modern iOS personal finance app featuring effortless budgeting, voice input, receipt scanning, and beautiful analytics. Built with Swift and SwiftUI, it prioritizes privacy and user experience for building healthy financial habits.",
    "This portfolio showcases cutting-edge web development using Next.js, TypeScript, and Tailwind CSS. Each project demonstrates expertise in modern frameworks, responsive design, and performance optimization for both web and mobile platforms."
  ];


  useEffect(() => {
    if (gameState === 'playing' && inputRef.current) {
      inputRef.current.focus();
    }
  }, [gameState]);

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && currentInput.trim().toLowerCase() === 'start' && gameState === 'idle') {
      setGameState('playing');
      setGameText(typingTexts[Math.floor(Math.random() * typingTexts.length)]);
      setUserInput("");
      setStartTime(Date.now());
      setCurrentInput("");
    }
  };

  const handleGameInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (gameState !== 'playing') return;
    
    const input = e.target.value;
    setUserInput(input);
    
    // Split text into words for word-by-word checking
    const words = gameText.split(' ');
    const currentWord = words[currentWordIndex] || '';
    
    // Check if current word is completed
    if (input.trim() === currentWord && currentWordIndex < words.length - 1) {
      // Word completed, move to next word
      setCompletedWords(prev => prev + 1);
      setCurrentWordIndex(prev => prev + 1);
      setUserInput('');
      
      // Calculate correct characters for completed words
      const completedText = words.slice(0, completedWords + 1).join(' ');
      setCorrectChars(completedText.length);
      setTotalChars(completedText.length);
    } else if (input.trim() === currentWord && currentWordIndex === words.length - 1) {
      // All words completed
      setCompletedWords(prev => prev + 1);
      setCorrectChars(gameText.length);
      setTotalChars(gameText.length);
      
      if (startTime) {
        const endTime = Date.now();
        const timeInMinutes = (endTime - startTime) / 60000;
        const wordsTyped = words.length;
        const calculatedWpm = Math.round(wordsTyped / timeInMinutes);
        
        const calculatedAccuracy = Math.round((gameText.length / gameText.length) * 100);
        
        setWpm(calculatedWpm);
        setAccuracy(calculatedAccuracy);
        setGameState('finished');
      }
    } else {
      // Calculate correct characters for current word
      let correct = 0;
      for (let i = 0; i < Math.min(input.length, currentWord.length); i++) {
        if (input[i] === currentWord[i]) correct++;
      }
      
      const completedText = words.slice(0, completedWords).join(' ');
      setCorrectChars(completedText.length + correct);
      setTotalChars(completedText.length + input.length);
    }
    
    // Calculate real-time WPM
    if (startTime) {
      const timeInMinutes = (Date.now() - startTime) / 60000;
      if (timeInMinutes > 0) {
        const wordsTyped = completedWords + (input.trim() === currentWord ? 1 : 0);
        const calculatedWpm = Math.round(wordsTyped / timeInMinutes);
        setCurrentWpm(calculatedWpm);
      }
    }
  };

  const resetGame = () => {
    setGameState('idle');
    setGameText("");
    setUserInput("");
    setWpm(0);
    setAccuracy(0);
    setCurrentWpm(0);
    setCorrectChars(0);
    setTotalChars(0);
    setCompletedWords(0);
    setCurrentWordIndex(0);
    setStartTime(null);
  };

  const getInputDisplay = () => {
    if (gameState === 'idle') {
      return currentInput;
    } else if (gameState === 'playing') {
      return userInput;
    }
    return "";
  };

  const getPromptText = () => {
    if (gameState === 'idle') {
      return prompt;
    } else if (gameState === 'playing') {
      return "typing-test:~$";
    } else {
      return "results:~$";
    }
  };

  return (
    <div className={`font-terminal text-terminal-green bg-black border border-terminal-green shadow-glow-green ${className}`}>
      <div className="flex items-center gap-2 p-4 pb-2 border-b border-terminal-dim">
        <div className="w-3 h-3 rounded-full bg-red-500"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
        <div className="w-3 h-3 rounded-full bg-green-500"></div>
        <span className="text-terminal-dim text-sm ml-2">terminal</span>
      </div>
      
      <div className="p-4 pb-2">

        {/* Show all original lines immediately */}
        {lines.map((line, index) => (
          <div key={index} className="mb-1">
            <span className="text-terminal-cyan">{prompt}</span>
            <span className="ml-2">{line}</span>
          </div>
        ))}

        {/* Game state displays */}
        {gameState === 'playing' && (
          <div className="mt-4 p-3 border border-terminal-cyan rounded">
            <div className="text-terminal-cyan text-sm mb-2">Type the following text as fast as you can:</div>
            <div className="text-terminal-dim text-xs mb-4 leading-relaxed break-words overflow-hidden">
              {gameText.split(' ').map((word, wordIndex) => {
                const isCompleted = wordIndex < completedWords;
                const isCurrent = wordIndex === currentWordIndex;
                const isUpcoming = wordIndex > currentWordIndex;
                
                return (
                  <span
                    key={wordIndex}
                    className={`mr-1 ${
                      isCompleted ? 'text-terminal-green line-through opacity-60' :
                      isCurrent ? 'bg-terminal-cyan text-black px-1 rounded' :
                      'text-terminal-dim'
                    }`}
                  >
                    {word}
                  </span>
                );
              })}
            </div>
            <div className="text-terminal-cyan text-xs mb-2">
              Current word: <span className="text-terminal-green font-bold">
                {gameText.split(' ')[currentWordIndex] || 'Complete!'}
              </span>
            </div>
            <div className="text-terminal-dim text-xs">
              Progress: {completedWords} / {gameText.split(' ').length} words
            </div>
          </div>
        )}

        {gameState === 'finished' && (
          <div className="mt-4 p-3 border border-terminal-green rounded">
            <div className="text-terminal-green text-sm mb-2">🎉 Typing Test Complete!</div>
            <div className="text-terminal-cyan text-xs space-y-1">
              <div>Words Per Minute: <span className="text-terminal-green">{wpm}</span></div>
              <div>Accuracy: <span className="text-terminal-green">{accuracy}%</span></div>
              <div className="mt-2 text-terminal-dim">
                Type 'start' to try again with different text
              </div>
            </div>
          </div>
        )}

        {/* Interactive prompt */}
        <div className="mt-2">
          <span className="text-terminal-cyan">{getPromptText()}</span>
          <span className="ml-2 inline-flex items-center">
            {gameState === 'idle' ? (
              <>
                <input
                  type="text"
                  value={currentInput}
                  onChange={(e) => setCurrentInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="bg-transparent border-none outline-none text-terminal-green font-terminal"
                  placeholder=""
                  autoComplete="off"
                  style={{ width: `${Math.max(currentInput.length + 1, 1)}ch` }}
                />
              </>
            ) : gameState === 'playing' ? (
              <>
                <input
                  ref={inputRef}
                  type="text"
                  value={userInput}
                  onChange={handleGameInput}
                  className="bg-transparent border-none outline-none text-terminal-green font-terminal"
                  autoComplete="off"
                  style={{ width: `${Math.max(userInput.length + 1, 1)}ch` }}
                />
              </>
            ) : (
              <>
                <input
                  type="text"
                  value={currentInput}
                  onChange={(e) => setCurrentInput(e.target.value)}
                  onKeyPress={(e) => {
                    if (e.key === 'Enter' && currentInput.trim().toLowerCase() === 'start') {
                      resetGame();
                    }
                  }}
                  className="bg-transparent border-none outline-none text-terminal-green font-terminal"
                  placeholder=""
                  autoComplete="off"
                  style={{ width: `${Math.max(currentInput.length + 1, 1)}ch` }}
                />
              </>
            )}
          </span>
        </div>
      </div>

      {/* Neovim-style bottom status bar */}
      {gameState === 'playing' && (
        <div className="bg-terminal-dim text-terminal-green text-xs px-4 py-2 border-t border-terminal-dim flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <span className="text-terminal-cyan">WPM:</span>
            <span className="text-terminal-green font-bold">{currentWpm}</span>
            <span className="text-terminal-cyan">|</span>
            <span className="text-terminal-cyan">Words:</span>
            <span className="text-terminal-green font-bold">{completedWords}</span>
            <span className="text-terminal-cyan">/</span>
            <span className="text-terminal-green font-bold">{gameText.split(' ').length}</span>
            <span className="text-terminal-cyan">|</span>
            <span className="text-terminal-cyan">Accuracy:</span>
            <span className="text-terminal-green font-bold">{Math.round((correctChars / Math.max(totalChars, 1)) * 100)}%</span>
          </div>
          <div className="text-terminal-dim">
            <span className="text-terminal-cyan">TYPING</span>
          </div>
        </div>
      )}

      {gameState === 'finished' && (
        <div className="bg-terminal-dim text-terminal-green text-xs px-4 py-2 border-t border-terminal-dim flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <span className="text-terminal-cyan">Final WPM:</span>
            <span className="text-terminal-green font-bold">{wpm}</span>
            <span className="text-terminal-cyan">|</span>
            <span className="text-terminal-cyan">Final Accuracy:</span>
            <span className="text-terminal-green font-bold">{accuracy}%</span>
            <span className="text-terminal-cyan">|</span>
            <span className="text-terminal-cyan">Characters:</span>
            <span className="text-terminal-green font-bold">{gameText.length}</span>
          </div>
          <div className="text-terminal-green">
            <span className="text-terminal-cyan">COMPLETE</span>
          </div>
        </div>
      )}
    </div>
  );
};