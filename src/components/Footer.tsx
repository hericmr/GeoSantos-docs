import { Github, Linkedin, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-pixel-secondary text-pixel-primary p-6 mt-auto border-t-2 border-pixel-blue">
      <div className="container mx-auto text-center">
        <div className="flex flex-col items-center space-y-4">
          {/* Removido: Desenvolvido com por Héric Moura */}
          
          <div className="flex justify-center space-x-6">
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
          
          <p className="text-pixel-sm text-pixel-muted mt-4">
            © 2024 GeoSantos - Jogo educativo sobre a cidade de Santos (SP)
          </p>
        </div>
      </div>
    </footer>
  );
}
