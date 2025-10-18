"use client";

import { Terminal } from "./Terminal";
import { MatrixBackground } from "./MatrixBackground";
import { getCurrentDate } from "@/lib/dateUtils";
import { useIsMobile } from "@/hooks/use-mobile";

export const Hero = () => {
  const currentDate = getCurrentDate();
  const isMobile = useIsMobile();
  
  const terminalLines = [
    "whoami",
    "troy_parsons",
    "cat /etc/profile",
    "# Software Engineering Graduate",
    "# Full-Stack Developer | Toronto, ON",
    "# Passionate about clean code and Uncle Bob",
    "ls -la /skills",
    "total 8",
    `drwxr-xr-x 2 troy troy 4096 ${currentDate} ./`,
    `drwxr-xr-x 3 troy troy 4096 ${currentDate} ../`,
    `-rw-r--r-- 1 troy troy  256 ${currentDate} typescript.ts`,
    `-rw-r--r-- 1 troy troy  256 ${currentDate} react.jsx`,
    `-rw-r--r-- 1 troy troy  256 ${currentDate} next.js`,
    `-rw-r--r-- 1 troy troy  256 ${currentDate} node.js`,
    "echo 'Welcome to my digital space...'",
    "Welcome to my digital space...",
  ];

  // Mobile-optimized version
  if (isMobile) {
    return (
      <section id="home" className="min-h-[60vh] flex items-center justify-center bg-black relative overflow-hidden pt-20">
        <MatrixBackground />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center">
            <h1 className="text-lg sm:text-xl font-terminal text-terminal-cyan mb-4 animate-pulse-glow">
              TROY_PARSONS.EXE
            </h1>
            
            <div className="text-terminal-magenta font-terminal text-sm mb-6">
              <span className="text-terminal-amber">{'>'}</span> Software Engineer
              <span className="animate-blink">_</span>
            </div>

            <div className="flex flex-wrap gap-2 justify-center">
              <span className="px-2 py-1 border border-terminal-green text-terminal-green font-terminal text-xs">
                [READY]
              </span>
              <span className="px-2 py-1 border border-terminal-cyan text-terminal-cyan font-terminal text-xs">
                [ONLINE]
              </span>
              <span className="px-2 py-1 border border-terminal-magenta text-terminal-magenta font-terminal text-xs">
                [AVAILABLE]
              </span>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Desktop version
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-black relative overflow-hidden">
      <MatrixBackground />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="font-terminal text-terminal-green mb-8">
              <pre className="text-xs sm:text-sm leading-tight">
{`
    ████████╗███████╗██████╗ ███╗   ███╗██╗███╗   ██╗ █████╗ ██╗     
    ╚══██╔══╝██╔════╝██╔══██╗████╗ ████║██║████╗  ██║██╔══██╗██║     
       ██║   █████╗  ██████╔╝██╔████╔██║██║██╔██╗ ██║███████║██║     
       ██║   ██╔══╝  ██╔══██╗██║╚██╔╝██║██║██║╚██╗██║██╔══██║██║     
       ██║   ███████╗██║  ██║██║ ╚═╝ ██║██║██║ ╚████║██║  ██║███████╗
       ╚═╝   ╚══════╝╚═╝  ╚═╝╚═╝     ╚═╝╚═╝╚═╝  ╚═══╝╚═╝  ╚═╝╚══════╝
`}
              </pre>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-terminal text-terminal-cyan mb-4 animate-pulse-glow">
              TROY_PARSONS.EXE
            </h1>
            
            <div className="text-terminal-magenta font-terminal text-lg mb-8">
              <span className="text-terminal-amber">{'>'}</span> Executing innovative solutions...
              <span className="animate-blink">_</span>
            </div>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <span className="px-3 py-1 border border-terminal-green text-terminal-green font-terminal text-sm">
                [READY]
              </span>
              <span className="px-3 py-1 border border-terminal-cyan text-terminal-cyan font-terminal text-sm">
                [ONLINE]
              </span>
              <span className="px-3 py-1 border border-terminal-magenta text-terminal-magenta font-terminal text-sm">
                [AVAILABLE]
              </span>
            </div>
          </div>

          <div className="order-first lg:order-last">
            <Terminal lines={terminalLines} />
          </div>
        </div>
      </div>
    </section>
  );
};