import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ModeToggle } from './mode-toggle';
import { Code2, Github } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Code2 className="h-6 w-6" />
              <span className="text-xl font-bold">CodeVault</span>
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/snippets/all">
              <Button variant="ghost">Browse Snippets</Button>
            </Link>
            <Link to="/contribute">
              <Button>Contribute</Button>
            </Link>
            <a
              href="https://github.com/RajatPetkar/CodeVault/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:bg-accent rounded-md"
            >
              <Github className="h-5 w-5" />
            </a>
            <ModeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;