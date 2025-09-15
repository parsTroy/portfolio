"use client";

import { useState } from "react";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-card border-t border-terminal-green">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-terminal text-terminal-cyan mb-4">
              <span className="text-terminal-magenta">./</span>contact
              <span className="text-terminal-magenta">.init</span>
            </h2>
            <div className="w-32 h-px bg-terminal-green mx-auto shadow-glow-green"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="font-terminal text-terminal-green bg-black p-6 border border-terminal-green shadow-glow-green">
                <div className="flex items-center gap-2 mb-4 pb-2 border-b border-terminal-dim">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span className="text-terminal-dim text-sm ml-2">contact_info.txt</span>
                </div>
                
                <div className="space-y-3 text-sm">
                  <div><span className="text-terminal-cyan">{'// CONNECTION ENDPOINTS'}</span></div>
                  <div className="h-2"></div>
                  <div>
                    <span className="text-terminal-magenta">EMAIL:</span>
                    <span className="text-terminal-amber ml-2">your.email@domain.com</span>
                  </div>
                  <div>
                    <span className="text-terminal-magenta">LINKEDIN:</span>
                    <span className="text-terminal-amber ml-2">/in/yourprofile</span>
                  </div>
                  <div>
                    <span className="text-terminal-magenta">GITHUB:</span>
                    <span className="text-terminal-amber ml-2">github.com/yourusername</span>
                  </div>
                  <div>
                    <span className="text-terminal-magenta">STATUS:</span>
                    <span className="text-terminal-green ml-2">AVAILABLE FOR OPPORTUNITIES</span>
                  </div>
                </div>
              </div>

              <div className="font-terminal text-terminal-green">
                <h3 className="text-xl text-terminal-cyan mb-4">
                  <span className="text-terminal-magenta">{'>'}</span> Let&apos;s Connect
                </h3>
                <p className="text-base leading-relaxed text-terminal-dim">
                  Always interested in discussing new opportunities, collaborating on 
                  innovative projects, or just talking shop about the latest in software development.
                </p>
                <div className="mt-6">
                  <div className="flex items-center gap-2 text-terminal-green">
                    <span className="w-2 h-2 bg-terminal-green rounded-full animate-pulse"></span>
                    <span className="text-sm">Currently available for new projects</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="font-terminal">
              <div className="text-terminal-green bg-black p-6 border border-terminal-green shadow-glow-green">
                <div className="flex items-center gap-2 mb-4 pb-2 border-b border-terminal-dim">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span className="text-terminal-dim text-sm ml-2">send_message.sh</span>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-terminal-cyan text-sm mb-2">
                      <span className="text-terminal-magenta">$</span> NAME=
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-black border border-terminal-dim text-terminal-green p-3 focus:border-terminal-cyan focus:outline-none focus:shadow-glow-cyan transition-all"
                      placeholder="your_name"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-terminal-cyan text-sm mb-2">
                      <span className="text-terminal-magenta">$</span> EMAIL=
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-black border border-terminal-dim text-terminal-green p-3 focus:border-terminal-cyan focus:outline-none focus:shadow-glow-cyan transition-all"
                      placeholder="your.email@domain.com"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-terminal-cyan text-sm mb-2">
                      <span className="text-terminal-magenta">$</span> MESSAGE=
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full bg-black border border-terminal-dim text-terminal-green p-3 focus:border-terminal-cyan focus:outline-none focus:shadow-glow-cyan transition-all resize-none"
                      placeholder="Enter your message..."
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-black border border-terminal-green text-terminal-green p-3 hover:border-terminal-cyan hover:text-terminal-cyan hover:shadow-glow-cyan transition-all duration-300"
                  >
                    <span className="text-terminal-magenta">./</span>execute_send
                    <span className="text-terminal-magenta ml-2">--now</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};