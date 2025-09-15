export const Projects = () => {
  const projects = [
    {
      id: "001",
      name: "project_alpha",
      description: "Full-stack web application with modern architecture",
      tech: ["React", "Node.js", "PostgreSQL"],
      status: "deployed",
      lines: "~5,000"
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
              <div><span className="text-terminal-cyan">user@portfolio:~/projects$</span> ls -la</div>
              <div>total {projects.length}</div>
              <div>drwxr-xr-x 2 user user 4096 Dec 14 2024 ./</div>
              <div>drwxr-xr-x 3 user user 4096 Dec 14 2024 ../</div>
              {projects.map((project) => (
                <div key={project.id}>
                  <span className="text-terminal-magenta">-rwxr--r--</span> 1 user user {project.lines.padStart(6)} Dec 14 2024 
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
                    <span className="text-terminal-magenta">./execute</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="font-terminal text-terminal-dim">
              <span className="text-terminal-magenta">{'// Note:'}</span> Project details will be populated with real data
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};