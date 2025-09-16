import { getCurrentDate } from "@/lib/dateUtils";

export const Projects = () => {
  const currentDate = getCurrentDate();
  const projects = [
    {
      id: "001",
      name: "dev_operations",
      description: "Modern developer collaboration platform with Kanban task management, real-time chat, and team collaboration features. Built with T3 Stack for seamless project management and team communication.",
      tech: ["Next.js", "TypeScript", "Prisma", "tRPC", "PostgreSQL", "Pusher", "Tailwind CSS"],
      status: "deployed",
      lines: "~15,000",
      demo: "https://www.devoperations.ca",
      github: "https://github.com/parsTroy/dev_operations"
    },
    {
      id: "002", 
      name: "data_processor",
      description: "High-performance data processing pipeline",
      tech: ["Python", "FastAPI", "Redis"],
      status: "active",
      lines: "~3,200"
    },
    {
      id: "003",
      name: "mobile_companion",
      description: "Cross-platform mobile application",
      tech: ["React Native", "Firebase"],
      status: "development",
      lines: "~2,800"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-terminal text-terminal-cyan mb-4">
              <span className="text-terminal-magenta">./</span>projects
              <span className="text-terminal-magenta">.list</span>
            </h2>
            <div className="w-32 h-px bg-terminal-green mx-auto shadow-glow-green"></div>
            <p className="font-terminal text-terminal-dim mt-6">
              <span className="text-terminal-magenta">{'>'}</span> Scanning project directory...
            </p>
          </div>

          <div className="font-terminal text-terminal-green bg-black p-6 border border-terminal-green shadow-glow-green mb-12">
            <div className="flex items-center gap-2 mb-4 pb-2 border-b border-terminal-dim">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span className="text-terminal-dim text-sm ml-2">projects/</span>
            </div>
            
            <div className="space-y-1 text-sm">
              <div><span className="text-terminal-cyan">troy@portfolio:~/projects$</span> ls -la</div>
              <div>total {projects.length}</div>
              <div>drwxr-xr-x 2 troy troy 4096 {currentDate} ./</div>
              <div>drwxr-xr-x 3 troy troy 4096 {currentDate} ../</div>
              {projects.map((project) => (
                <div key={project.id}>
                  <span className="text-terminal-magenta">-rwxr--r--</span> 1 troy troy {project.lines.padStart(6)} {currentDate} 
                  <span className="text-terminal-cyan ml-2">{project.name}/</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <div key={project.id} className="group">
                <div className="font-terminal text-terminal-green bg-card p-4 md:p-6 border border-terminal-green hover:border-terminal-cyan hover:shadow-glow-cyan transition-all duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg text-terminal-cyan">
                      <span className="text-terminal-magenta">[</span>
                      {project.id}
                      <span className="text-terminal-magenta">]</span>
                    </h3>
                    <span className={`px-2 py-1 text-xs border ${
                      project.status === 'deployed' ? 'border-terminal-green text-terminal-green' :
                      project.status === 'active' ? 'border-terminal-cyan text-terminal-cyan' :
                      'border-terminal-amber text-terminal-amber'
                    }`}>
                      {project.status.toUpperCase()}
                    </span>
                  </div>

                  <h4 className="text-xl text-terminal-green mb-3 group-hover:text-terminal-cyan transition-colors">
                    ./{project.name}
                  </h4>

                  <p className="text-terminal-dim text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  {project.id === "001" && (
                    <div className="mb-4 p-3 bg-black border border-terminal-dim rounded">
                      <div className="text-terminal-cyan text-xs mb-2 font-terminal">KEY FEATURES:</div>
                      <div className="text-xs text-terminal-dim space-y-1">
                        <div>• Drag-and-drop Kanban boards with priority levels</div>
                        <div>• Real-time chat with @mentions system</div>
                        <div>• Role-based access control (Admin/Member/Viewer)</div>
                        <div>• Markdown-powered project documentation</div>
                        <div>• GitHub integration & live notifications</div>
                      </div>
                    </div>
                  )}

                  <div className="mb-4">
                    <div className="text-terminal-magenta text-xs mb-2">STACK:</div>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span key={tech} className="px-2 py-1 text-xs border border-terminal-dim text-terminal-dim">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-xs text-terminal-dim pt-4 border-t border-terminal-dim">
                    <span>Lines: {project.lines}</span>
                    <div className="flex gap-2">
                      {project.demo && (
                        <a 
                          href={project.demo} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-terminal-cyan hover:text-terminal-green transition-colors"
                        >
                          ./demo
                        </a>
                      )}
                      {project.github && (
                        <a 
                          href={project.github} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-terminal-magenta hover:text-terminal-green transition-colors"
                        >
                          ./github
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="font-terminal text-terminal-dim">
              <span className="text-terminal-magenta">{'// Note:'}</span> Please check my GitHub for more projects:
            </p>
            <a 
              href="https://github.com/parsTroy" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-terminal-cyan hover:text-terminal-green transition-colors"
            >
              github.com/parsTroy
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};