import { Github, Linkedin } from 'lucide-react';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-pixel-secondary text-pixel-primary p-6 mt-auto border-t-2 border-pixel-blue fade-in">
      <div className="container mx-auto text-center">
        <div className="flex flex-col items-center space-y-4">
          {/* Logo no footer */}
          <div className="flex items-center justify-center slide-up">
            <div className="relative">
              <Image 
                src="/assets/logo.png" 
                alt="GeoSantos Logo" 
                width={80} 
                height={32}
                className="pulse"
              />
            </div>
          </div>
          
          <div className="flex justify-center space-x-6 slide-up">
            <a 
              href="https://github.com/hericmr" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-pixel-secondary hover:text-pixel-green transition-colors duration-200 p-2 rounded-sm hover:bg-pixel-accent"
            >
              <Github className="h-5 w-5" />
              <span className="hidden sm:inline">GitHub</span>
            </a>
            <a 
              href="https://www.linkedin.com/in/heric-moura/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-pixel-secondary hover:text-pixel-blue transition-colors duration-200 p-2 rounded-sm hover:bg-pixel-accent"
            >
              <Linkedin className="h-5 w-5" />
              <span className="hidden sm:inline">LinkedIn</span>
            </a>
          </div>
          
          <p className="text-pixel-sm text-pixel-muted mt-4 fade-in">
            © 2024 GeoSantos - Jogo educativo sobre a cidade de Santos (SP)
          </p>
        </div>
      </div>
    </footer>
  );
}
