import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Github } from 'lucide-react';

const Contribute = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Contribute to CodeVault</h1>
        <p className="text-xl text-muted-foreground">
          Help the community grow by sharing your code snippets
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">How to Contribute</h2>
          <ol className="space-y-4 text-muted-foreground">
            <li>1. Fork the repository on GitHub</li>
            <li>2. Create a new branch for your snippet</li>
            <li>3. Add your code snippet following our guidelines</li>
            <li>4. Submit a pull request</li>
          </ol>
          <Button className="w-full mt-6" asChild>
            <a
              href="https://github.com/RajatPetkar/CodeVault/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2"
            >
              <Github className="h-5 w-5" />
              View on GitHub
            </a>
          </Button>
        </Card>

        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Guidelines</h2>
          <ul className="space-y-4 text-muted-foreground">
            <li>• Ensure code is well-documented and follows best practices</li>
            <li>• Include TypeScript types where applicable</li>
            <li>• Add meaningful descriptions and examples</li>
            <li>• Test your code before submitting</li>
          </ul>
          <Button variant="outline" className="w-full mt-6">
            Read Documentation
          </Button>
        </Card>
      </div>
    </div>
  );
};

export default Contribute;