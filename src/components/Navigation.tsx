"use client";

import { useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

export const Navigation = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  const navItems = [
    { id: "home", label: "home", href: "#home" },
    { id: "about", label: "about", href: "#about" },
    { id: "projects", label: "projects", href: "#projects" },
    { id: "contact", label: "contact", href: "#contact" },
  ];

  const scrollToSection = (href: string, id: string) => {
    setActiveSection(id);
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-terminal-green">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="font-terminal text-terminal-green text-xl">
            <span className="text-terminal-cyan">[</span>
            portfolio
            <span className="text-terminal-cyan">]</span>
          </div>
          
          {/* Desktop Navigation */}
          {!isMobile && (
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
          )}

          {/* Mobile Hamburger Menu */}
          {isMobile && (
            <button
              onClick={toggleMobileMenu}
              className="font-terminal text-terminal-green hover:text-terminal-cyan transition-colors duration-300"
              aria-label="Toggle mobile menu"
            >
              <div className="flex flex-col gap-1">
                <div className={`w-6 h-0.5 bg-current transition-all duration-300 ${
                  isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''
                }`} />
                <div className={`w-6 h-0.5 bg-current transition-all duration-300 ${
                  isMobileMenuOpen ? 'opacity-0' : ''
                }`} />
                <div className={`w-6 h-0.5 bg-current transition-all duration-300 ${
                  isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
                }`} />
              </div>
            </button>
          )}
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobile && isMobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-black/95 backdrop-blur-sm border-b border-terminal-green border-t border-terminal-green animate-slide-down">
            <div className="container mx-auto px-6 py-4">
              <div className="flex flex-col gap-4">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.href, item.id)}
                    className={`font-terminal text-left transition-all duration-300 hover:text-terminal-cyan hover:shadow-glow-cyan py-2 ${
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
        )}
      </div>
    </nav>
  );
};