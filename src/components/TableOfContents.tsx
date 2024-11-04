import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { ScrollArea } from './ui/scroll-area';
import { ChevronDown } from 'lucide-react';

interface Section {
  id: string;
  title: string;
  category: string;
  element: HTMLElement;
}

interface GroupedSections {
  [key: string]: Section[];
}

export function TableOfContents() {
  const [activeSection, setActiveSection] = useState<string>('');
  const [groupedSections, setGroupedSections] = useState<GroupedSections>({});
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(new Set(['all']));

  useEffect(() => {
    const sectionElements = document.querySelectorAll('[data-section]');
    const sectionsArray = Array.from(sectionElements).map((element) => ({
      id: element.id,
      title: element.getAttribute('data-section') || '',
      category: element.getAttribute('data-category') || 'Other',
      element: element as HTMLElement,
    }));

    // Group sections by category
    const grouped = sectionsArray.reduce((acc: GroupedSections, section) => {
      if (!acc[section.category]) {
        acc[section.category] = [];
      }
      acc[section.category].push(section);
      return acc;
    }, {});

    setGroupedSections(grouped);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
            // Expand the category containing the active section
            const category = entry.target.getAttribute('data-category');
            if (category) {
              setExpandedCategories((prev) => new Set([...prev, category]));
            }
          }
        });
      },
      {
        rootMargin: '-20% 0% -35% 0%',
        threshold: 0,
      }
    );

    sectionsArray.forEach((section) => {
      observer.observe(section.element);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleCategory = (category: string) => {
    setExpandedCategories((prev) => {
      const next = new Set(prev);
      if (next.has(category)) {
        next.delete(category);
      } else {
        next.add(category);
      }
      return next;
    });
  };

  return (
    <div className="w-64 hidden lg:block">
      <div className="sticky top-20">
        <h4 className="font-medium mb-4">Components</h4>
        <ScrollArea className="h-[calc(100vh-10rem)]">
          <nav className="relative">
            {Object.entries(groupedSections).map(([category, sections]) => (
              <div key={category} className="mb-2">
                <button
                  onClick={() => toggleCategory(category)}
                  className="flex items-center justify-between w-full text-sm font-medium text-muted-foreground hover:text-foreground py-2"
                >
                  {category}
                  <ChevronDown
                    className={cn(
                      'h-4 w-4 transition-transform',
                      expandedCategories.has(category) ? 'transform rotate-180' : ''
                    )}
                  />
                </button>
                {expandedCategories.has(category) && (
                  <ul className="space-y-1 ml-4">
                    {sections.map((section) => (
                      <li key={section.id}>
                        <button
                          onClick={() => scrollToSection(section.id)}
                          className={cn(
                            'text-sm text-muted-foreground hover:text-foreground transition-colors py-1',
                            'flex items-center w-full',
                            activeSection === section.id && 'text-foreground font-medium'
                          )}
                        >
                          <span
                            className={cn(
                              'absolute left-0 w-0.5 h-4 bg-foreground rounded-full opacity-0 transition-opacity',
                              activeSection === section.id && 'opacity-100'
                            )}
                          />
                          <span className="ml-4">{section.title}</span>
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </nav>
        </ScrollArea>
      </div>
    </div>
  );
}