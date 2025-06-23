import React, { useState, useEffect } from 'react';
import moon from './moon.png';
import key from './key.png';
import readme from './readme.png';
import onepiece from './onepiece.png';  

interface Project {
  title: string;
  description: string;
  image: string | null;
  tech: string[];
  demo: string | undefined ;
  source: string;
}

const Projects: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  // Static data defined directly
  useEffect(() => {
    const data: Project[] = [
      {
        title: 'haha',
        description: 'whoknows',
        image: moon, // or null
        tech: ['fsd', 'fer', 'wefw'],
        demo: 'https://github.com',
        source: 'https://youtube.com',
      },
      {
        title: 'haha',
        description: 'whoknows',
        image: key, // or null
        tech: ['fsd', 'fer', 'wefw'],
        demo: undefined,
        source: 'https://youtube.com',
      },
      {
        title: 'haha',
        description: 'whoknows',
        image: onepiece, // or null
        tech: ['fsd', 'fer', 'wefw'],
        demo: 'https://github.com',
        source: 'https://youtube.com',
      },
    ];
    setProjects(data);
  }, []);

  return (
    <section className="w-full flex flex-col items-center py-16 bg-[#181c20]">
      <h2 className="text-3xl md:text-4xl font-bold text-[#bfc8f8] mb-12 text-center">Projects</h2>
      <div className="w-full max-w-6xl flex flex-col gap-12">
        {projects.map((project) => (
          <div
            key={project.title}
className="flex flex-col md:flex-row bg-[#23272e] rounded-2xl shadow-2xl overflow-hidden border border-[#23272e] hover:shadow-[#00e0ff44] transition-shadow duration-300 ease-in-out"
          >
            <div className="relative w-full md:w-1/3 min-h-[220px]">
              <div
                className="absolute inset-0 z-10 pointer-events-none"
                style={{
                  background: 'linear-gradient(120deg, #23272e 60%, transparent 100%)',
                }}
              />
              <img
                src={project.image || '/fallback.png'}  //if my image is corrupted or not loading
                alt={project.title}
                className="w-full h-full object-cover"
                style={{
                  clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)',
                }}
              />
            </div>

            <div className="flex-1 p-8 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold text-[#00e0ff] mb-2">{project.title}</h3>
                <p className="text-[#bfc8f8] mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full border border-[#00e0ff] text-[#00e0ff] text-xs font-mono bg-[#181c20] bg-opacity-60"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex gap-4 mt-4">
                { project.demo && <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg bg-[#00e0ff] text-[#181c20] font-bold shadow hover:bg-[#b8ffb8] hover:text-[#181c20] transition"
                >
                  Live Demo
                </a>}
                <a
                  href={project.source}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg border border-[#bfc8f8] text-[#bfc8f8] font-bold hover:bg-[#23272e] hover:border-[#00e0ff] hover:text-[#00e0ff] transition"
                >
                  View Source
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
