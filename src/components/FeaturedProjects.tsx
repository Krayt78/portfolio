import { useEffect, useState } from 'react';
import { Code2, ExternalLink, Github, ChevronLeft, ChevronRight } from 'lucide-react';
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
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    async function fetchProjects() {
      try {
        const { data, error } = await supabase
          .from('projects')
          .select('*')
          .order('created_at', { ascending: false })

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

  const nextSlide = () => {
    if (isAnimating || !projects.length) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => {
      const nextIndex = prev + 3;
      // If next index would exceed the last complete or incomplete group, go back to start
      return nextIndex < projects.length ? nextIndex : 0;
    });
    setTimeout(() => setIsAnimating(false), 500);
  };

  const prevSlide = () => {
    if (isAnimating || !projects.length) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => {
      const lastGroupStartIndex = Math.floor((projects.length - 1) / 3) * 3;
      return prev - 3 >= 0 ? prev - 3 : lastGroupStartIndex;
    });
    setTimeout(() => setIsAnimating(false), 500);
  };

  const totalGroups = Math.ceil(projects.length / 3);

  return (
    <section className="py-20 bg-white dark:bg-gray-900" id="projects">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 flex items-center justify-center gap-2 text-gray-900 dark:text-white">
          <Code2 className="text-indigo-600 dark:text-indigo-400" />
          Featured Projects
        </h2>
        
        {loading && (
          <div className="text-center text-gray-600 dark:text-gray-400">Loading projects...</div>
        )}
        
        {error && (
          <div className="text-center text-red-600 dark:text-red-400">
            Error: {error}
          </div>
        )}

        {projects.length > 0 && (
          <div className="relative">
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${(currentIndex * 100) / 3}%)` }}
              >
                {projects.map((project) => (
                  <div 
                    key={project.id}
                    className="w-1/3 flex-shrink-0 px-4"
                  >
                    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-200 h-full">
                      <img 
                        src={project.image_url}
                        alt={`${project.title} Preview`}
                        className="w-full h-48 object-cover"
                      />
                      <div className="p-6 flex flex-col h-[calc(100%-12rem)]">
                        <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">{project.title}</h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">{project.description}</p>
                        {project.technologies && project.technologies.length > 0 && (
                          <div className="mb-4 flex flex-wrap gap-2">
                            {project.technologies.slice(0, 3).map((tech) => (
                              <span 
                                key={tech}
                                className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-sm text-gray-700 dark:text-gray-300 rounded-full"
                              >
                                {tech}
                              </span>
                            ))}
                            {project.technologies.length > 3 && (
                              <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-sm text-gray-700 dark:text-gray-300 rounded-full">
                                +{project.technologies.length - 3}
                              </span>
                            )}
                          </div>
                        )}
                        <div className="flex gap-6 mt-auto">
                          {project.live_url && (
                            <a 
                              href={project.live_url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 flex items-center gap-2"
                            >
                              <ExternalLink size={18} />
                              Live Demo
                            </a>
                          )}
                          {project.github_url && (
                            <a 
                              href={project.github_url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 flex items-center gap-2"
                            >
                              <Github size={18} />
                              Code
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white dark:bg-gray-800 text-gray-800 dark:text-white p-3 rounded-full shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={isAnimating || projects.length <= 3}
              aria-label="Previous projects"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white dark:bg-gray-800 text-gray-800 dark:text-white p-3 rounded-full shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={isAnimating || projects.length <= 3}
              aria-label="Next projects"
            >
              <ChevronRight size={24} />
            </button>

            {/* Dots Navigation */}
            {totalGroups > 1 && (
              <div className="flex justify-center gap-2 mt-8">
                {Array.from({ length: totalGroups }, (_, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      if (!isAnimating) {
                        setIsAnimating(true);
                        setCurrentIndex(i * 3);
                        setTimeout(() => setIsAnimating(false), 500);
                      }
                    }}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      Math.floor(currentIndex / 3) === i
                        ? 'bg-indigo-600 dark:bg-indigo-400 w-6'
                        : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                    }`}
                    aria-label={`Go to project group ${i + 1}`}
                  />
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}