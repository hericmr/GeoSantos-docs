import { Gamepad2, MapPin } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-pixel-secondary text-pixel-primary shadow-pixel-lg border-b-2 border-pixel-blue">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center p-4">
        <div className="flex items-center mb-4 sm:mb-0">
          <MapPin className="text-pixel-green mr-3 h-8 w-8" />
          <div>
            <h1 className="text-pixel-3xl font-bold text-pixel-green">GeoSantos</h1>
            <p className="text-pixel-sm text-pixel-muted">Jogo educativo sobre Santos (SP)</p>
          </div>
        </div>
        
        <a
          href="https://hericmr.github.io/geosantos/"
          target="_blank"
          rel="noopener noreferrer"
          className="pixel-btn pixel-btn--success"
        >
          <Gamepad2 className="mr-2 h-5 w-5" />
          <span className="hidden sm:inline">Jogar Agora</span>
          <span className="sm:hidden">Jogar</span>
        </a>
      </div>
    </header>
  );
}
