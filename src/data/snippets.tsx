import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Toggle } from "@/components/ui/toggle";
import avtar from "../images/avtar.jpg";

export const snippetsData = [
  // UI Components
  {
    id: 1,
    title: "Responsive Card Component",
    description: "A beautiful and responsive card component with hover effects",
    category: "UI",
    tags: ["react", "tailwind"],
    language: "tsx",
    preview: (
      <Card className="w-full max-w-sm p-6 hover:shadow-lg transition-shadow">
        <h3 className="text-lg font-semibold mb-2">Card Title</h3>
        <p className="text-muted-foreground mb-4">
          This is a sample card component with hover effects.
        </p>
        <Button>Learn More</Button>
      </Card>
    ),
    code: `import { Card, Button } from '@/components/ui';
export const ResponsiveCard = () => (
  <Card className="w-full max-w-sm p-6 hover:shadow-lg transition-shadow">
    <h3 className="text-lg font-semibold mb-2">Card Title</h3>
    <p className="text-muted-foreground mb-4">This is a sample card component.</p>
    <Button>Learn More</Button>
  </Card>
);`,
  },
  {
    id: 2,
    title: "Notification Badge",
    description: "A badge to show notification count",
    category: "UI",
    tags: ["react", "badge", "notification"],
    language: "tsx",
    preview: (
      <div className="relative">
        <Button>Messages</Button>
        <span className="absolute top-0 right-0 px-2 py-1 text-xs font-bold text-white bg-red-600 rounded-full">
          3
        </span>
      </div>
    ),
    code: `export const NotificationBadge = ({ count }) => (
  <div className="relative">
    <Button>Messages</Button>
    {count > 0 && (
      <span className="absolute top-0 right-0 px-2 py-1 text-xs font-bold text-white bg-red-600 rounded-full">
        {count}
      </span>
    )}
  </div>
);`,
  },

  {
    id: 3,
    title: "User Profile Card with Avatar",
    description:
      "A user profile card displaying an avatar, name, and basic information, suitable for social media or dashboard user interfaces.",
    category: "UI",
    tags: ["react", "profile", "card"],
    language: "tsx",
    preview: (
      <Card className="w-full max-w-xs p-4 flex items-center space-x-4 shadow-md hover:shadow-lg transition-shadow">
        <img src={avtar} className="w-12 h-12 rounded-full" alt="User Avatar" />
        <div>
          <h4 className="text-lg font-semibold">John Doe</h4>
          <p className="text-sm text-muted-foreground">Frontend Developer</p>
        </div>
      </Card>
    ),
    code: `import { Card } from '@/components/ui/card';
import { Avatar } from '@/components/ui/avatar';

export const UserProfileCard = () => {
  return (
    <Card className="w-full max-w-xs p-4 flex items-center space-x-4 shadow-md hover:shadow-lg transition-shadow">
      <Avatar src="/images/avatar.jpg" className="w-12 h-12 rounded-full" alt="User Avatar" />
      <div>
        <h4 className="text-lg font-semibold">John Doe</h4>
        <p className="text-sm text-muted-foreground">Frontend Developer</p>
      </div>
    </Card>
  );
};`,
  },
  {
    id: 4,
    title: "Project Progress Card",
    description:
      "A project card displaying project title, description, and a progress bar to track completion.",
    category: "UI",
    tags: ["react", "progress", "card"],
    language: "tsx",
    preview: (
      <Card className="w-full max-w-sm p-6 border rounded-lg shadow-md">
        <h3 className="text-lg font-semibold mb-2">Project Alpha</h3>
        <p className="text-sm text-muted-foreground mb-4">
          Tracking the completion progress for Project Alpha.
        </p>

        <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
          <div
            className="bg-blue-600 h-2 rounded-full"
            style={{ width: "70%" }}
          ></div>
        </div>

        <p className="text-sm mt-2 text-right text-muted-foreground">
          70% Complete
        </p>
      </Card>
    ),
    code: `import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

export const ProjectProgressCard = () => {
  return (
    <Card className="w-full max-w-sm p-6 border rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-2">Project Alpha</h3>
      <p className="text-sm text-muted-foreground mb-4">
        Tracking the completion progress for Project Alpha.
      </p>
     <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
          <div
            className="bg-blue-600 h-2 rounded-full"
            style={{ width: "70%" }}
          ></div>
        </div>
      <p className="text-sm mt-2 text-right text-muted-foreground">70% Complete</p>
    </Card>
  );
};`,
  },
  {
    id: 5,
    title: 'Tooltip Component',
    description: 'A tooltip component to show additional information on hover',
    category: 'UI',
    tags: ['react', 'tooltip', 'hover'],
    language: 'tsx',
    preview: (
      <div className="relative inline-block">
        <Button className="px-4 py-2">Hover Me</Button>
        <div className="absolute bottom-full mb-2 p-2 text-xs text-white bg-black rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
          Tooltip Text
        </div>
      </div>
    ),
    code: `export const Tooltip = ({ text, children }) => (
  <div className="relative inline-block group">
    {children}
    <div className="absolute bottom-full mb-2 p-2 text-xs text-white bg-black rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
      {text}
    </div>
  </div>
);`,
  },
  // Form Components
  {
    id: 6,
    title: "Login Form with Validation",
    description: "Login form with validation using React Hook Form",
    category: "Forms",
    tags: ["react", "form", "validation"],
    language: "tsx",
    preview: (
      <form className="space-y-4">
        <Input placeholder="Email" type="email" className="w-full" />
        <Input placeholder="Password" type="password" className="w-full" />
        <Button className="w-full mt-4">Login</Button>
      </form>
    ),
    code: `import { useForm } from 'react-hook-form';

export const LoginForm = () => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <Input name="email" ref={register({ required: true })} placeholder="Email" />
      <Input name="password" type="password" ref={register({ required: true })} placeholder="Password" />
      <Button type="submit">Login</Button>
    </form>
  );
};`,
  },

  {
    id: 7,
    title: 'Checkbox Form',
    description: 'A form that allows users to select multiple options using checkboxes.',
    category: 'Forms',
    tags: ['react', 'form', 'checkbox'],
    language: 'tsx',
    preview: (
      <form onSubmit={(e) => {
        e.preventDefault();
        alert('Form submitted!');
      }} className="p-4 border border-gray-300 rounded">
        <label className="block mb-2">
          <input type="checkbox" name="item1" className="mr-2" />
          Option 1
        </label>
        <label className="block mb-2">
          <input type="checkbox" name="item2" className="mr-2" />
          Option 2
        </label>
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Submit</button>
      </form>
    ),
    code: `import React, { useState } from 'react';
  
  const CheckboxForm = () => {
    const [checkedItems, setCheckedItems] = useState({ item1: false, item2: false });
  
    const handleCheckboxChange = (event) => {
      const { name, checked } = event.target;
      setCheckedItems((prev) => ({ ...prev, [name]: checked }));
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      alert('Form submitted!');
    };
  
    return (
      <form onSubmit={handleSubmit} className="p-4 border border-gray-300 rounded">
        <label className="block mb-2">
          <input type="checkbox" name="item1" onChange={handleCheckboxChange} className="mr-2" />
          Option 1
        </label>
        <label className="block mb-2">
          <input type="checkbox" name="item2" onChange={handleCheckboxChange} className="mr-2" />
          Option 2
        </label>
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Submit</button>
      </form>
    );
  };
  
  export default CheckboxForm;`,
  },  
  {
    id: 8,
    title: 'Radio Button Form',
    description: 'A form that allows users to select one option using radio buttons.',
    category: 'Forms',
    tags: ['react', 'form', 'radio'],
    language: 'tsx',
    preview: (
      <form onSubmit={(e) => {
        e.preventDefault();
        alert('Form submitted!');
      }} className="p-4 border border-gray-300 rounded">
        <label className="block mb-2">
          <input type="radio" name="options" value="option1" className="mr-2" />
          Option 1
        </label>
        <label className="block mb-2">
          <input type="radio" name="options" value="option2" className="mr-2" />
          Option 2
        </label>
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Submit</button>
      </form>
    ),
    code: `import React from 'react';
  
  const RadioButtonForm = () => {
    const handleSubmit = (e) => {
      e.preventDefault();
      alert('Form submitted!');
    };
  
    return (
      <form onSubmit={handleSubmit} className="p-4 border border-gray-300 rounded">
        <label className="block mb-2">
          <input type="radio" name="options" value="option1" className="mr-2" />
          Option 1
        </label>
        <label className="block mb-2">
          <input type="radio" name="options" value="option2" className="mr-2" />
          Option 2
        </label>
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Submit</button>
      </form>
    );
  };
  
  export default RadioButtonForm;`,
  },
  
  {
    id: 10,
    title: 'Dropdown/Select Form',
    description: 'A form with a dropdown to select an option.',
    category: 'Forms',
    tags: ['react', 'form', 'select'],
    language: 'tsx',
    preview: (
      <form onSubmit={(e) => {
        e.preventDefault();
        alert('Form submitted!');
      }} className="p-4 border border-gray-300 rounded">
        <label className="block mb-2">
          Select an Option:
          <select className="block w-full border border-gray-400 rounded px-2 py-1">
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
          </select>
        </label>
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Submit</button>
      </form>
    ),
    code: `import React from 'react';
  
  const DropdownSelectForm = () => {
    const handleSubmit = (e) => {
      e.preventDefault();
      alert('Form submitted!');
    };
  
    return (
      <form onSubmit={handleSubmit} className="p-4 border border-gray-300 rounded">
        <label className="block mb-2">
          Select an Option:
          <select className="block w-full border border-gray-400 rounded px-2 py-1">
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
          </select>
        </label>
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Submit</button>
      </form>
    );
  };
  
  export default DropdownSelectForm;`,
  },  
  {
    id: 11,
    title: 'Multi-Field Form',
    description: 'A form with multiple input fields for user data.',
    category: 'Forms',
    tags: ['react', 'form', 'multi-field'],
    language: 'tsx',
    preview: (
      <form onSubmit={(e) => {
        e.preventDefault();
        alert('Form submitted!');
      }} className="p-4 border border-gray-300 rounded">
        <label className="block mb-2">
          Name:
          <input type="text" className="block w-full border border-gray-400 rounded px-2 py-1" />
        </label>
        <label className="block mb-2">
          Email:
          <input type="email" className="block w-full border border-gray-400 rounded px-2 py-1" />
        </label>
        <label className="block mb-2">
          Select an Option:
          <select className="block w-full border border-gray-400 rounded px-2 py-1">
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
          </select>
        </label>
        <label className="block mb-2">
          <input type="radio" name="options" value="option1" className="mr-2" />
          Option 1
        </label>
        <label className="block mb-2">
          <input type="radio" name="options" value="option2" className="mr-2" />
          Option 2
        </label>
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Submit</button>
      </form>
    ),
    code: `import React from 'react';
  
  const MultiFieldForm = () => {
    const handleSubmit = (e) => {
      e.preventDefault();
      alert('Form submitted!');
    };
  
    return (
      <form onSubmit={handleSubmit} className="p-4 border border-gray-300 rounded">
        <label className="block mb-2">
          Name:
          <input type="text" className="block w-full border border-gray-400 rounded px-2 py-1" />
        </label>
        <label className="block mb-2">
          Email:
          <input type="email" className="block w-full border border-gray-400 rounded px-2 py-1" />
        </label>
        <label className="block mb-2">
          Select an Option:
          <select className="block w-full border border-gray-400 rounded px-2 py-1">
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
          </select>
        </label>
        <label className="block mb-2">
          <input type="radio" name="options" value="option1" className="mr-2" />
          Option 1
        </label>
        <label className="block mb-2">
          <input type="radio" name="options" value="option2" className="mr-2" />
          Option 2
        </label>
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Submit</button>
      </form>
    );
  };
  
  export default MultiFieldForm;`,
  },  

  // Layout Components
  {
    id: 12,
    title: 'Grid Layout',
    description: 'A simple grid layout using CSS Grid to arrange items in a structured manner.',
    category: 'Layouts',
    tags: ['react', 'layout', 'grid', 'css'],
    language: 'tsx',
    preview: (
      <div className="grid grid-cols-3 gap-4 p-4">
        <div className="bg-blue-500 p-4 text-white">Item 1</div>
        <div className="bg-green-500 p-4 text-white">Item 2</div>
        <div className="bg-red-500 p-4 text-white">Item 3</div>
        <div className="bg-yellow-500 p-4 text-white">Item 4</div>
        <div className="bg-purple-500 p-4 text-white">Item 5</div>
        <div className="bg-pink-500 p-4 text-white">Item 6</div>
      </div>
    ),
    code: `import React from 'react';
  
  const GridLayout = () => {
    return (
      <div className="grid grid-cols-3 gap-4 p-4">
        <div className="bg-blue-500 p-4 text-white">Item 1</div>
        <div className="bg-green-500 p-4 text-white">Item 2</div>
        <div className="bg-red-500 p-4 text-white">Item 3</div>
        <div className="bg-yellow-500 p-4 text-white">Item 4</div>
        <div className="bg-purple-500 p-4 text-white">Item 5</div>
        <div className="bg-pink-500 p-4 text-white">Item 6</div>
      </div>
    );
  };
  
  export default GridLayout;`,
  },
  {
    id: 13,
    title: 'Flexbox Layout',
    description: 'A layout using Flexbox to arrange items in a flexible and responsive manner.',
    category: 'Layouts',
    tags: ['react', 'layout', 'flexbox', 'css'],
    language: 'tsx',
    preview: (
      <div className="flex justify-between p-4">
        <div className="bg-blue-500 p-4 text-white">Item 1</div>
        <div className="bg-green-500 p-4 text-white">Item 2</div>
        <div className="bg-red-500 p-4 text-white">Item 3</div>
      </div>
    ),
    code: `import React from 'react';
  
  const FlexboxLayout = () => {
    return (
      <div className="flex justify-between p-4">
        <div className="bg-blue-500 p-4 text-white">Item 1</div>
        <div className="bg-green-500 p-4 text-white">Item 2</div>
        <div className="bg-red-500 p-4 text-white">Item 3</div>
      </div>
    );
  };
  
  export default FlexboxLayout;`,
  },  
  {
    id: 14,
    title: 'Responsive Layout',
    description: 'A responsive layout that adjusts items based on screen size.',
    category: 'Layouts',
    tags: ['react', 'layout', 'responsive', 'css'],
    language: 'tsx',
    preview: (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
        <div className="bg-blue-500 p-4 text-white">Item 1</div>
        <div className="bg-green-500 p-4 text-white">Item 2</div>
        <div className="bg-red-500 p-4 text-white">Item 3</div>
        <div className="bg-yellow-500 p-4 text-white">Item 4</div>
      </div>
    ),
    code: `import React from 'react';
  
  const ResponsiveLayout = () => {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
        <div className="bg-blue-500 p-4 text-white">Item 1</div>
        <div className="bg-green-500 p-4 text-white">Item 2</div>
        <div className="bg-red-500 p-4 text-white">Item 3</div>
        <div className="bg-yellow-500 p-4 text-white">Item 4</div>
      </div>
    );
  };
  
  export default ResponsiveLayout;`,
  },  
  {
    id: 15,
    title: 'Sidebar Layout',
    description: 'A layout with a sidebar for navigation and a main content area.',
    category: 'Layouts',
    tags: ['react', 'layout', 'sidebar', 'css'],
    language: 'tsx',
    preview: (
      <div className="flex">
        <div className="bg-gray-800 text-white w-1/4 p-4">
          <h2 className="text-lg">Sidebar</h2>
          <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
          </ul>
        </div>
        <div className="flex-1 p-4">
          <h1 className="text-2xl">Main Content</h1>
          <p>This is the main content area.</p>
        </div>
      </div>
    ),
    code: `import React from 'react';
  
  const SidebarLayout = () => {
    return (
      <div className="flex">
        <div className="bg-gray-800 text-white w-1/4 p-4">
          <h2 className="text-lg">Sidebar</h2>
          <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
          </ul>
        </div>
        <div className="flex-1 p-4">
          <h1 className="text-2xl">Main Content</h1>
          <p>This is the main content area.</p>
        </div>
      </div>
    );
  };
  
  export default SidebarLayout;`,
  }, 
  {
    id: 16,
    title: 'Card Layout',
    description: 'A layout displaying multiple cards for content presentation.',
    category: 'Layouts',
    tags: ['react', 'layout', 'card', 'css'],
    language: 'tsx',
    preview: (
      <div className="grid grid-cols-3 gap-4 p-4">
        <div className="bg-white border shadow-lg rounded p-4">
          <h2 className="text-lg">Card 1</h2>
          <p>This is some content for card 1.</p>
        </div>
        <div className="bg-white border shadow-lg rounded p-4">
          <h2 className="text-lg">Card 2</h2>
          <p>This is some content for card 2.</p>
        </div>
        <div className="bg-white border shadow-lg rounded p-4">
          <h2 className="text-lg">Card 3</h2>
          <p>This is some content for card 3.</p>
        </div>
      </div>
    ),
    code: `import React from 'react';
  
  const CardLayout = () => {
    return (
      <div className="grid grid-cols-3 gap-4 p-4">
        <div className="bg-white border shadow-lg rounded p-4">
          <h2 className="text-lg">Card 1</h2>
          <p>This is some content for card 1.</p>
        </div>
        <div className="bg-white border shadow-lg rounded p-4">
          <h2 className="text-lg">Card 2</h2>
          <p>This is some content for card 2.</p>
        </div>
        <div className="bg-white border shadow-lg rounded p-4">
          <h2 className="text-lg">Card 3</h2>
          <p>This is some content for card 3.</p>
        </div>
      </div>
    );
  };
  
  export default CardLayout;`,
  },   

  // Animation Components
  {
    id: 17,
    title: "Animated Button",
    description: "Button with hover animation",
    category: "Animations",
    tags: ["react", "css", "animations"],
    language: "tsx",
    preview: (
      <Button className="px-4 py-2 bg-primary hover:bg-primary-dark transform transition-transform duration-200 ease-in-out hover:scale-105">
        Click Me
      </Button>
    ),
    code: `export const AnimatedButton = () => (
  <Button className="px-4 py-2 bg-primary hover:bg-primary-dark transform transition-transform duration-200 ease-in-out hover:scale-105">
    Click Me
  </Button>
);`,
  },
  {
    id: 18,
    title: 'Bounce Animation',
    description: 'A bounce effect for elements when they appear.',
    category: 'Animations',
    tags: ['react', 'animation', 'bounce', 'css'],
    language: 'tsx',
    preview: (
      <div style={{ display: 'inline-block', animation: 'bounce 1s infinite' }}>
        <h1 className="text-2xl">Bounce Animation</h1>
        <p>This element bounces when rendered.</p>
      </div>
    ),
    code: `import React from 'react';
  
  const Bounce = () => {
    return (
      <div style={{ display: 'inline-block', animation: 'bounce 1s infinite' }}>
        <h1 className="text-2xl">Bounce Animation</h1>
        <p>This element bounces when rendered.</p>
      </div>
    );
  };
  
  export default Bounce;
  
  const styles = {
    '@keyframes bounce': {
      '0%, 100%': {
        transform: 'translateY(0)',
      },
      '50%': {
        transform: 'translateY(-15px)',
      },
    },
  };`,
  },  
  

  // Utility Components
  {
    id: 19,
    title: "Theme Toggle Switch",
    description: "Toggle switch to switch themes",
    category: "Utilities",
    tags: ["react", "dark mode", "toggle"],
    language: "tsx",
    preview: (
      <Toggle className="w-12 h-6 bg-gray-300 rounded-full flex items-center">
        <span className="toggle-thumb w-6 h-6 bg-primary rounded-full transform translate-x-0 transition-transform duration-200"></span>
      </Toggle>
    ),
    code: `export const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  return (
    <Toggle onClick={() => setIsDark(!isDark)}>
      <span className={\`toggle-thumb \${isDark ? 'translate-x-6' : 'translate-x-0'}\`}></span>
    </Toggle>
  );
};`,
  },
];
