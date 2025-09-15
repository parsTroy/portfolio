"use client";

import { useState } from "react";

export const Navigation = () => {
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { id: "home", label: "home", href: "#home" },
    { id: "about", label: "about", href: "#about" },
    { id: "projects", label: "projects", href: "#projects" },
    { id: "contact", label: "contact", href: "#contact" },
  ];

  const scrollToSection = (href: string, id: string) => {
    setActiveSection(id);
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-terminal-green">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="font-terminal text-terminal-green text-xl">
            <span className="text-terminal-cyan">[</span>
            terminal_portfolio
            <span className="text-terminal-cyan">]</span>
          </div>
          
          <div className="flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.href, item.id)}
                className={`font-terminal transition-all duration-300 hover:text-terminal-cyan hover:shadow-glow-cyan ${
                  activeSection === item.id 
                    ? "text-terminal-cyan shadow-glow-cyan" 
                    : "text-terminal-green"
                }`}
              >
                <span className="text-terminal-magenta">./</span>
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};