import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-terminal">
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <Contact />
      
      <footer className="bg-black border-t border-terminal-green py-8">
        <div className="container mx-auto px-6 text-center">
          <div className="font-terminal text-terminal-dim text-sm">
            <span className="text-terminal-magenta">© 2024</span> Software Engineer Portfolio
            <span className="text-terminal-cyan mx-2">|</span>
            <span className="text-terminal-magenta">./</span>built_with_passion
          </div>
        </div>
      </footer>
    </div>
  );
}
