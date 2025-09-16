"use client";

import { useState, useEffect } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

interface TerminalProps {
  lines: string[];
  prompt?: string;
  className?: string;
}

export const Terminal = ({ lines, prompt = "user@terminal:~$", className = "" }: TerminalProps) => {
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const isMobile = useIsMobile();

  // On mobile, show all text immediately without typing animation
  useEffect(() => {
    if (isMobile) {
      setCurrentLineIndex(lines.length);
      setCurrentText("");
      return;
    }

    if (currentLineIndex >= lines.length) return;

    const targetText = lines[currentLineIndex];
    
    if (currentText.length < targetText.length) {
      const timer = setTimeout(() => {
        setCurrentText(targetText.slice(0, currentText.length + 1));
      }, 50 + Math.random() * 50);
      
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        setCurrentLineIndex(currentLineIndex + 1);
        setCurrentText("");
      }, 1000);
      
      return () => clearTimeout(timer);
    }
  }, [currentText, currentLineIndex, lines, isMobile]);

  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    
    return () => clearInterval(cursorTimer);
  }, []);

  return (
    <div className={`font-terminal text-terminal-green bg-black p-6 border border-terminal-green shadow-glow-green ${className}`}>
      <div className="flex items-center gap-2 mb-4 pb-2 border-b border-terminal-dim">
        <div className="w-3 h-3 rounded-full bg-red-500"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
        <div className="w-3 h-3 rounded-full bg-green-500"></div>
        <span className="text-terminal-dim text-sm ml-2">terminal</span>
      </div>

      {/* Mobile: Show all lines immediately */}
      {isMobile ? (
        lines.map((line, index) => (
          <div key={index} className="mb-1">
            <span className="text-terminal-cyan">{prompt}</span>
            <span className="ml-2">{line}</span>
          </div>
        ))
      ) : (
        /* Desktop: Show typing animation */
        <>
          {lines.slice(0, currentLineIndex).map((line, index) => (
            <div key={index} className="mb-1">
              <span className="text-terminal-cyan">{prompt}</span>
              <span className="ml-2">{line}</span>
            </div>
          ))}

          {currentLineIndex < lines.length && (
            <div className="mb-1">
              <span className="text-terminal-cyan">{prompt}</span>
              <span className="ml-2">
                {currentText}
                <span className={`inline-block w-2 h-5 bg-terminal-green ${showCursor ? 'opacity-100' : 'opacity-0'}`}>
                  █
                </span>
              </span>
            </div>
          )}
        </>
      )}

      {/* Cursor - only show on desktop or when animation is complete */}
      {(isMobile || currentLineIndex >= lines.length) && (
        <div>
          <span className="text-terminal-cyan">{prompt}</span>
          <span className={`ml-2 inline-block w-2 h-5 bg-terminal-green ${showCursor ? 'opacity-100' : 'opacity-0'}`}>
            █
          </span>
        </div>
      )}
    </div>
  );
};