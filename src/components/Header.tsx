import { Gamepad2 } from 'lucide-react';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="bg-pixel-secondary text-pixel-primary shadow-pixel-lg border-b-2 border-pixel-blue fade-in">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center p-4">
        <div className="flex items-center mb-4 sm:mb-0 slide-up">
          <div className="relative">
            <Image 
              src="/assets/logo.png" 
              alt="GeoSantos Logo" 
              width={120} 
              height={48}
              className="pulse"
              priority
            />
          </div>
        </div>
        
        <a
          href="https://hericmr.github.io/geosantos/"
          target="_blank"
          rel="noopener noreferrer"
          className="pixel-btn pixel-btn--success slide-up"
        >
          <Gamepad2 className="mr-2 h-5 w-5" />
          <span className="hidden sm:inline">Jogar Agora</span>
          <span className="sm:hidden">Jogar</span>
        </a>
      </div>
    </header>
  );
}
