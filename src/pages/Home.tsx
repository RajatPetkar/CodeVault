import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Code2, Copy, Layout, Palette } from "lucide-react";

const categories = [
  {
    icon: <Layout className="h-6 w-6" />,
    title: "Layout Components",
    description: "Responsive layouts, grids, and flexbox components",
    link: "/snippets/layout",
  },
  {
    icon: <Palette className="h-6 w-6" />,
    title: "UI Components",
    description: "Buttons, cards, modals, and other UI elements",
    link: "/snippets/ui",
  },
  {
    icon: <Code2 className="h-6 w-6" />,
    title: "React Hooks",
    description: "Custom hooks and state management solutions",
    link: "/snippets/hooks",
  },
];

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Welcome to CodeVault</h1>
        <p className="text-xl text-muted-foreground mb-8">
          Discover, copy, and contribute beautiful React components and code
          snippets
        </p>
        <div className="flex justify-center gap-4">
          <Link to="/snippets/all">
            <Button size="lg">Browse Snippets</Button>
          </Link>
          <Link to="/contribute">
            <Button size="lg" variant="outline">
              Contribute
            </Button>
          </Link>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-16">
        {categories.map((category) => (
          <Link to={category.link} key={category.title}>
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="mb-4">{category.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
              <p className="text-muted-foreground">{category.description}</p>
            </Card>
          </Link>
        ))}
      </div>

      <div className="bg-card rounded-lg p-8 text-center">
        <div className="inline-block p-3 bg-primary/10 rounded-full mb-4">
          <Copy className="h-6 w-6 text-primary" />
        </div>
        <h2 className="text-2xl font-bold mb-4">Ready to Use Components</h2>
        <p className="text-muted-foreground mb-6">
          All components are built with React and Tailwind CSS, ready to copy
          and paste into your projects.
        </p>
        <Link to="/snippets/all">
          <Button variant="secondary" size="lg">
            Explore Components
          </Button>
        </Link>
        <h2 className="text-sm text-muted-foreground font-semibold mt-10">
          Developed and Managed By:
          <span className="font-bold text-white-1000"> Rajat Petkar</span>
        </h2>
      </div>
    </div>
  );
};

export default Home;
