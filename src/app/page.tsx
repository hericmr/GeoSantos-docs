import fs from 'fs';
import path from 'path';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { 
  Gamepad2, 
  Wrench, 
  FolderOpen, 
  Rocket, 
  Users, 
  User, 
  MapPin,
  BookOpen,
  Code,
  Database,
  TestTube
} from 'lucide-react';

export default function Page() {
  const markdown = fs.readFileSync(path.join(process.cwd(), 'landingpage.md'), 'utf8');

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-5xl mx-auto">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              // Títulos principais
              h1: ({node, ...props}) => (
                <h1 className="text-pixel-5xl font-bold text-pixel-green mb-6 text-center flex items-center justify-center gap-3" {...props}>
                  <MapPin className="h-12 w-12 text-pixel-green" />
                  {props.children}
                </h1>
              ),
              h2: ({node, ...props}) => {
                const text = props.children?.toString() || '';
                let icon = null;
                
                if (text.includes('Tecnologias')) {
                  icon = <Wrench className="h-8 w-8 text-pixel-blue" />;
                } else if (text.includes('Estrutura')) {
                  icon = <FolderOpen className="h-8 w-8 text-pixel-blue" />;
                } else if (text.includes('Como Executar')) {
                  icon = <Rocket className="h-8 w-8 text-pixel-orange" />;
                } else if (text.includes('Contribuindo')) {
                  icon = <Users className="h-8 w-8 text-pixel-green" />;
                } else if (text.includes('Autor')) {
                  icon = <User className="h-8 w-8 text-pixel-blue" />;
                } else if (text.includes('Gameplay')) {
                  icon = <Gamepad2 className="h-8 w-8 text-pixel-green" />;
                } else if (text.includes('Locais')) {
                  icon = <MapPin className="h-8 w-8 text-pixel-green" />;
                }
                
                return (
                  <h2 className="text-pixel-3xl font-bold text-pixel-blue border-b-2 border-pixel-blue pb-3 mb-6 mt-8 flex items-center gap-3" {...props}>
                    {icon}
                    {props.children}
                  </h2>
                );
              },
              h3: ({node, ...props}) => {
                const text = props.children?.toString() || '';
                let icon = null;
                
                if (text.includes('Frontend')) {
                  icon = <Code className="h-6 w-6 text-pixel-green" />;
                } else if (text.includes('Backend')) {
                  icon = <Database className="h-6 w-6 text-pixel-blue" />;
                } else if (text.includes('Testes')) {
                  icon = <TestTube className="h-6 w-6 text-pixel-orange" />;
                } else if (text.includes('Interface')) {
                  icon = <Gamepad2 className="h-6 w-6 text-pixel-green" />;
                } else if (text.includes('Pré-requisitos')) {
                  icon = <BookOpen className="h-6 w-6 text-pixel-blue" />;
                } else if (text.includes('Instalação')) {
                  icon = <Rocket className="h-6 w-6 text-pixel-orange" />;
                } else if (text.includes('Como Contribuir')) {
                  icon = <Users className="h-6 w-6 text-pixel-green" />;
                }
                
                return (
                  <h3 className="text-pixel-xl font-semibold text-pixel-green mb-4 mt-6 flex items-center gap-2" {...props}>
                    {icon}
                    {props.children}
                  </h3>
                );
              },
              
              // Parágrafos e texto
              p: ({node, ...props}) => (
                <p className="text-pixel-secondary leading-relaxed mb-4 text-pixel-base" {...props} />
              ),
              
              // Links
              a: ({node, ...props}) => (
                <a 
                  className="text-pixel-blue hover:text-pixel-green underline transition-colors duration-200" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  {...props} 
                />
              ),
              
              // Listas
              ul: ({node, ...props}) => (
                <ul className="list-disc list-inside text-pixel-secondary mb-4 space-y-2" {...props} />
              ),
              ol: ({node, ...props}) => (
                <ol className="list-decimal list-inside text-pixel-secondary mb-4 space-y-2" {...props} />
              ),
              li: ({node, ...props}) => (
                <li className="text-pixel-secondary" {...props} />
              ),
              
              // Tabelas
              table: ({node, ...props}) => (
                <div className="overflow-x-auto mb-6">
                  <table className="w-full border-collapse bg-pixel-secondary rounded-lg shadow-pixel-lg" {...props} />
                </div>
              ),
              thead: ({node, ...props}) => (
                <thead className="bg-pixel-accent rounded-t-lg" {...props} />
              ),
              th: ({node, ...props}) => (
                <th className="px-6 py-4 text-left text-pixel-green font-semibold text-pixel-lg" {...props} />
              ),
              td: ({node, ...props}) => (
                <td className="px-6 py-4 text-pixel-secondary border-b border-pixel-accent last:border-b-0" {...props} />
              ),
              tr: ({node, ...props}) => (
                <tr className="hover:bg-pixel-accent/50 transition-all duration-300 ease-in-out" {...props} />
              ),
              
              // Imagens
              img: ({node, ...props}) => (
                <div className="my-6 text-center">
                  <img 
                    className="max-w-full h-auto rounded-sm shadow-pixel-lg border-2 border-pixel-blue mx-auto" 
                    {...props} 
                  />
                </div>
              ),
              
              // Blockquotes
              blockquote: ({node, ...props}) => (
                <blockquote className="border-l-4 border-pixel-green pl-4 py-2 my-6 bg-pixel-secondary rounded-r-sm italic text-pixel-secondary" {...props} />
              ),
              
              // Código inline
              code: ({node, ...props}: any) => {
                const isInline = !props.children?.toString().includes('\n');
                if (isInline) {
                  return <code className="bg-pixel-accent px-2 py-1 rounded-sm text-pixel-green font-mono text-sm" {...props} />;
                }
                return (
                  <pre className="bg-pixel-accent p-4 rounded-sm overflow-x-auto my-6 border-2 border-pixel-blue shadow-pixel-md">
                    <code className="text-pixel-green font-mono text-sm" {...props} />
                  </pre>
                );
              },
              
              // Badges/Shields
              div: ({node, ...props}) => {
                if (props.className?.includes('badge') || props.children?.toString().includes('shields.io')) {
                  return <div className="flex flex-wrap gap-2 my-4" {...props} />;
                }
                return <div {...props} />;
              },
              
              // Strong
              strong: ({node, ...props}) => (
                <strong className="font-bold text-pixel-green" {...props} />
              ),
              
              // Emphasis
              em: ({node, ...props}) => (
                <em className="italic text-pixel-blue" {...props} />
              ),
            }}
          >
            {markdown}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  );
}
