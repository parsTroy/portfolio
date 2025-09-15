export const About = () => {
  return (
    <section id="about" className="py-20 bg-card border-y border-terminal-green">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-terminal text-terminal-cyan mb-4">
              <span className="text-terminal-magenta">./</span>about_me
              <span className="text-terminal-magenta">.sh</span>
            </h2>
            <div className="w-32 h-px bg-terminal-green mx-auto shadow-glow-green"></div>
          </div>

          <div className="grid gap-8 lg:gap-12 lg:grid-cols-2 items-center">
            <div className="font-terminal text-terminal-green bg-black p-4 md:p-6 border border-terminal-green shadow-glow-green">
              <div className="flex items-center gap-2 mb-4 pb-2 border-b border-terminal-dim">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="text-terminal-dim text-sm ml-2">about.sh</span>
              </div>
              
              <div className="space-y-2 text-sm">
                <div><span className="text-terminal-cyan">#!/bin/bash</span></div>
                <div><span className="text-terminal-magenta">echo</span> <span className="text-terminal-amber">&quot;Initializing profile...&quot;</span></div>
                <div className="h-4"></div>
                <div><span className="text-terminal-cyan">NAME</span>=<span className="text-terminal-amber">&quot;Software Engineer&quot;</span></div>
                <div><span className="text-terminal-cyan">EDUCATION</span>=<span className="text-terminal-amber">&quot;Software Engineering Graduate&quot;</span></div>
                <div><span className="text-terminal-cyan">EXPERIENCE</span>=<span className="text-terminal-amber">&quot;2+ years&quot;</span></div>
                <div><span className="text-terminal-cyan">PASSION</span>=<span className="text-terminal-amber">&quot;Clean code & Innovation&quot;</span></div>
                <div className="h-4"></div>
                <div><span className="text-terminal-magenta">echo</span> <span className="text-terminal-amber">&quot;Profile loaded successfully!&quot;</span></div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="font-terminal text-terminal-green">
                <h3 className="text-xl text-terminal-cyan mb-4">
                  <span className="text-terminal-magenta">{'>'}</span> System Overview
                </h3>
                <p className="text-base leading-relaxed mb-6">
                  Software engineering graduate with hands-on experience in developing 
                  robust applications and implementing innovative solutions. I thrive 
                  in environments where clean, efficient code meets creative problem-solving.
                </p>
                
                <h3 className="text-xl text-terminal-cyan mb-4">
                  <span className="text-terminal-magenta">{'>'}</span> Core Processes
                </h3>
                <ul className="space-y-2 text-base">
                  <li><span className="text-terminal-magenta">•</span> Full-stack development</li>
                  <li><span className="text-terminal-magenta">•</span> System architecture design</li>
                  <li><span className="text-terminal-magenta">•</span> Code optimization</li>
                  <li><span className="text-terminal-magenta">•</span> Continuous learning</li>
                </ul>
              </div>

              <div className="grid grid-cols-2 gap-3 md:gap-4 pt-6">
                <div className="text-center p-3 md:p-4 border border-terminal-green bg-black">
                  <div className="text-2xl font-terminal text-terminal-cyan">2+</div>
                  <div className="text-sm font-terminal text-terminal-dim">Years Experience</div>
                </div>
                <div className="text-center p-3 md:p-4 border border-terminal-green bg-black">
                  <div className="text-2xl font-terminal text-terminal-cyan">∞</div>
                  <div className="text-sm font-terminal text-terminal-dim">Lines of Code</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};