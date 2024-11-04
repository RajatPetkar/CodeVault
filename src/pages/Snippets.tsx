import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import CodeBlock from '@/components/CodeBlock';
import { Badge } from '@/components/ui/badge';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { snippetsData } from '@/data/snippets';
import { ScrollArea } from '@/components/ui/scroll-area';
import { TableOfContents } from '@/components/TableOfContents';

const Snippets = () => {
  const { category } = useParams();
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredSnippets, setFilteredSnippets] = useState(snippetsData);

  useEffect(() => {
    const filtered = snippetsData.filter((snippet) => {
      const matchesCategory = category === 'all' || snippet.category === category;
      const matchesSearch = snippet.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        snippet.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
    setFilteredSnippets(filtered);
  }, [category, searchQuery]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">Code Snippets</h1>
          <p className="text-muted-foreground">
            Browse and copy ready-to-use React components and code snippets
          </p>
        </div>
        <div className="relative w-full md:w-64">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search snippets..."
            className="pl-8"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <div className="flex gap-8">
        <TableOfContents />
        
        <ScrollArea className="h-[calc(100vh-12rem)] flex-1">
          <div className="space-y-6">
            {filteredSnippets.map((snippet) => (
              <div 
                key={snippet.id} 
                className="border rounded-lg p-6"
                id={`snippet-${snippet.id}`}
                data-section={snippet.title}
                data-category={snippet.category}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h2 className="text-xl font-semibold mb-2">{snippet.title}</h2>
                    <p className="text-muted-foreground mb-2">{snippet.description}</p>
                    <div className="flex gap-2">
                      <Badge variant="secondary">{snippet.category}</Badge>
                      {snippet.tags.map((tag) => (
                        <Badge key={tag} variant="outline">{tag}</Badge>
                      ))}
                    </div>
                  </div>
                </div>

                <Tabs defaultValue="preview" className="w-full">
                  <TabsList className="mb-4">
                    <TabsTrigger value="preview">Preview</TabsTrigger>
                    <TabsTrigger value="code">Code</TabsTrigger>
                  </TabsList>
                  <TabsContent value="preview" className="p-4 border rounded-lg">
                    {snippet.preview}
                  </TabsContent>
                  <TabsContent value="code">
                    <CodeBlock code={snippet.code} language={snippet.language} />
                  </TabsContent>
                </Tabs>
              </div>
            ))}
          </div>
        </ScrollArea>
      </div>
    </div>
  );
};

export default Snippets;