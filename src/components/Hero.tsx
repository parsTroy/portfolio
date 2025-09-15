"use client";

import { Terminal } from "./Terminal";
import { MatrixBackground } from "./MatrixBackground";

export const Hero = () => {
  const terminalLines = [
    "whoami",
    "software_engineer.exe",
    "cat /etc/profile",
    "# Software Engineering Graduate",
    "# Passionate about clean code and innovative solutions",
    "ls -la /skills",
    "total 8",
    "drwxr-xr-x 2 user user 4096 Dec 14 2024 ./",
    "drwxr-xr-x 3 user user 4096 Dec 14 2024 ../",
    "-rw-r--r-- 1 user user  256 Dec 14 2024 javascript.js",
    "-rw-r--r-- 1 user user  256 Dec 14 2024 python.py",
    "-rw-r--r-- 1 user user  256 Dec 14 2024 react.jsx",
    "-rw-r--r-- 1 user user  256 Dec 14 2024 node.js",
    "echo 'Welcome to my digital space...'",
    "Welcome to my digital space...",
  ];

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
              SOFTWARE_ENGINEER.EXE
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