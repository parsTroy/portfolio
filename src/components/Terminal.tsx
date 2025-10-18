"use client";

import { useState, useEffect, useRef } from "react";

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

  // Old School RuneScape lore typing text options
  const typingTexts = [
    "In the ancient kingdom of Misthalin, the White Knights of Falador stand as guardians of justice and order. Their sacred vows bind them to protect the innocent and uphold the laws of Saradomin, the god of order and wisdom.",
    "The Dragon Slayer quest tells the tale of Elvarg, a fearsome green dragon that terrorized the island of Crandor. Only those brave enough to forge the legendary Dragon Slayer sword can hope to defeat this ancient beast.",
    "Beneath the city of Varrock lies the mysterious Stronghold of Security, where four guardians test adventurers seeking the ancient treasures within. Each guardian represents a different aspect of security and wisdom.",
    "The Barrows brothers were six powerful warriors who fell in battle and were buried in ancient tombs beneath the Barrows hills. Their restless spirits now guard their legendary equipment, waiting for worthy challengers.",
    "In the depths of the Wilderness, the Chaos Elemental roams freely, a creature of pure chaos energy that drops powerful weapons forged in the fires of destruction. Only the bravest dare venture into its domain.",
    "The Grand Exchange of Varrock revolutionized trade across Gielinor, allowing adventurers to buy and sell goods without the need for direct player interaction. This marketplace became the economic heart of the realm.",
    "Zamorak, the god of chaos and destruction, seeks to overthrow the established order and bring about a new age of freedom through anarchy. His followers worship strength and individual power above all else.",
    "The ancient city of Prifddinas, home to the elves, was sealed away for centuries behind the crystal barrier. Only those who complete the arduous quest to restore the elven lands can witness its ethereal beauty.",
    "Beneath the waves of the ocean lies the underwater city of Zanaris, accessible only through the mysterious fairy rings scattered across the realm. This magical realm exists between dimensions.",
    "The TzHaar civilization lives within the volcanic depths of Karamja, forging weapons and armor from the molten rock of their homeland. Their society values strength and honor above all else."
  ];


  useEffect(() => {
    if (gameState === 'playing' && inputRef.current) {
      inputRef.current.focus();
    }
  }, [gameState]);

  // Initial cryptic log when component mounts
  useEffect(() => {
    console.log("[SHADOW_SYSTEM] The terminal awakens...");
    console.log("[SHADOW_SYSTEM] Five ancient texts lie dormant within the void");
    console.log("[SHADOW_SYSTEM] To unlock the forbidden knowledge, speak the word of beginning");
    console.log("[SHADOW_SYSTEM] The answer lies in what every journey must have...");
    console.log("[SHADOW_SYSTEM] Seek the command that begins all things");
  }, []);

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && currentInput.trim().toLowerCase() === 'start' && gameState === 'idle') {
      console.log("[SHADOW_SYSTEM] The sacred word has been spoken...");
      console.log("[SHADOW_SYSTEM] The ancient texts stir from their slumber");
      console.log("[SHADOW_SYSTEM] Reality bends as the challenge materializes");
      console.log("[SHADOW_SYSTEM] The void whispers secrets of speed and precision");
      
      const selectedText = typingTexts[Math.floor(Math.random() * typingTexts.length)];
      console.log(`[SHADOW_SYSTEM] A text emerges from the ether: "${selectedText.substring(0, 30)}..."`);
      console.log(`[SHADOW_SYSTEM] The scroll contains ${selectedText.split(' ').length} sacred words, ${selectedText.length} symbols of power`);
      console.log("[SHADOW_SYSTEM] The trial begins... prove your worth, mortal");
      
      setGameState('playing');
      setGameText(selectedText);
      setUserInput("");
      setStartTime(Date.now());
      setCurrentInput("");
      
      console.log("[SHADOW_SYSTEM] The waters of time begin to flow...");
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
      console.log(`[SHADOW_SYSTEM] The word "${currentWord}" dissolves into the void...`);
      console.log(`[SHADOW_SYSTEM] Progress through the labyrinth: ${completedWords + 1}/${words.length} chambers (${Math.round(((completedWords + 1) / words.length) * 100)}% illuminated)`);
      console.log(`[SHADOW_SYSTEM] The next fragment of knowledge awaits...`);
      
      setCompletedWords(prev => prev + 1);
      setCurrentWordIndex(prev => prev + 1);
      setUserInput('');
      
      // Calculate correct characters for completed words
      const completedText = words.slice(0, completedWords + 1).join(' ');
      setCorrectChars(completedText.length);
      setTotalChars(completedText.length);
    } else if (input.trim() === currentWord && currentWordIndex === words.length - 1) {
      // All words completed
      console.log("[SHADOW_SYSTEM] The final word crumbles into stardust...");
      console.log("[SHADOW_SYSTEM] The ancient trial reaches its conclusion");
      console.log("[SHADOW_SYSTEM] The void calculates your worth...");
      
      setCompletedWords(prev => prev + 1);
      setCorrectChars(gameText.length);
      setTotalChars(gameText.length);
      
      if (startTime) {
        const endTime = Date.now();
        const timeInMinutes = (endTime - startTime) / 60000;
        const wordsTyped = words.length;
        const calculatedWpm = Math.round(wordsTyped / timeInMinutes);
        
        const calculatedAccuracy = Math.round((gameText.length / gameText.length) * 100);
        
        console.log(`[SHADOW_SYSTEM] The Oracle speaks your fate:`);
        console.log(`   Words per moon cycle: ${calculatedWpm}`);
        console.log(`   Purity of soul: ${calculatedAccuracy}%`);
        console.log(`   Sacred symbols mastered: ${wordsTyped}`);
        console.log(`   Time in the void: ${(timeInMinutes * 60).toFixed(1)} heartbeats`);
        console.log(`   Your rank: ${calculatedWpm >= 60 ? 'ARCHMAGE' : calculatedWpm >= 40 ? 'SAGE' : calculatedWpm >= 20 ? 'APPRENTICE' : 'NOVICE'}`);
        console.log("[SHADOW_SYSTEM] The waters of time still... the trial is complete");
        
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
        
        // Log WPM updates every 5 words or every 10 seconds
        if (wordsTyped % 5 === 0 || Math.floor(timeInMinutes * 6) % 10 === 0) {
          console.log(`[SHADOW_SYSTEM] The void whispers: ${calculatedWpm} symbols per moon cycle (${wordsTyped} fragments in ${timeInMinutes.toFixed(1)} eternities)`);
        }
      }
    }
  };

  const resetGame = () => {
    console.log("[SHADOW_SYSTEM] The ancient texts return to their slumber...");
    console.log("[SHADOW_SYSTEM] The void erases all traces of the trial");
    console.log("[SHADOW_SYSTEM] The terminal awaits the next seeker of knowledge");
    console.log("[SHADOW_SYSTEM] Speak the word of beginning once more to awaken the texts...");
    
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
                Type &apos;start&apos; to try again with different text
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