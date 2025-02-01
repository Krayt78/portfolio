import { useEffect, useState } from 'react';
import { Code2, ExternalLink, Github } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface Project {
  id: string;
  title: string;
  description: string;
  image_url: string;
  live_url: string | null;
  github_url: string | null;
  technologies: string[];
}

export function FeaturedProjects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchProjects() {
      try {
        const { data, error } = await supabase
          .from('projects')
          .select('*')
          .order('created_at', { ascending: false });

        if (error) throw error;
        setProjects(data || []);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load projects');
      } finally {
        setLoading(false);
      }
    }

    fetchProjects();
  }, []);

  return (
    <section className="py-20 bg-white" id="projects">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 flex items-center justify-center gap-2">
          <Code2 className="text-indigo-600" />
          Featured Projects
        </h2>
        
        {loading && (
          <div className="text-center text-gray-600">Loading projects...</div>
        )}
        
        {error && (
          <div className="text-center text-red-600">
            Error: {error}
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img 
                src={project.image_url}
                alt={`${project.title} Preview`}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                {project.technologies && project.technologies.length > 0 && (
                  <div className="mb-4 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span 
                        key={tech}
                        className="px-2 py-1 bg-gray-100 text-sm text-gray-700 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
                <div className="flex gap-4">
                  {project.live_url && (
                    <a 
                      href={project.live_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-indigo-600 hover:text-indigo-800 flex items-center gap-1"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                  )}
                  {project.github_url && (
                    <a 
                      href={project.github_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-indigo-600 hover:text-indigo-800 flex items-center gap-1"
                    >
                      <Github size={16} />
                      Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}