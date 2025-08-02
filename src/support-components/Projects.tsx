import React, { useState, useEffect } from 'react';
import npm from './photos/n.png';
import resumeme from './photos/resume.png';
import heal from './photos/heal.png'
import silentparcel from './photos/silentparcel.jpg'

interface Project {
  title: string;
  description: string;
  image: string | null;
  tech: string[];
  demo: string | undefined;
  source: string;
}

const Projects: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  // Static data defined directly
  useEffect(() => {
    const data: Project[] = [
      {
        title: 'SilentParcel',
        description:'SilentParcel offers secure, anonymous file sharing and chat—no registration. Files are AES-256 encrypted in your browser, ensuring SilentParcel can\'t access your data.',
        image: silentparcel, // or null
        tech: ['TypeScript', 'Next.js', 'Appwrite', 'Shadcn', 'Tailwind CSS', 'Github Actions'],
        demo: 'https://silentparcel.com/?utm_source=linkedin',
        source: 'https://github.com/SinghAman21/silentparcel',
      },
      {
        title: 'template-boss',
        description: 'template-boss provides ready-made templates with essential configurations, giving you a head start to launch and develop new ideas efficiently.',
        image: npm, // or null
        tech: ['JavaScript'],
        demo: 'https://www.npmjs.com/package/template-boss',
        source: 'https://github.com/SinghAman21/template-boss',
      },
      {
        title: 'ResumeMe',
        description: 'ResumeMe offers honest feedback on your resume in both formal and informal styles, helping you reflect on your strengths and weaknesses with a touch of humor.',
        image: resumeme, // or null
        tech: ['TypeScript', 'Python', 'Flask' ,'Gemini', 'NLP' , 'AI'],
        demo: 'https://checkyourresume.vercel.app/',
        source: 'https://github.com/Tanay-277/ResumeMe',
      },
      {
        title: 'HealthCare AI',
        description: 'An advanced AI healthcare assistant that creates personalized survival plans tailored to your unique circumstances.',
        image: heal, // or null
        tech: ['TypeScript','Gemini',  'GEN AI' , 'Python'],
        demo: 'https://mp38.vercel.app/',
        source: 'https://github.com/SinghAman21/mini-project-04',
      },
    ];
    setProjects(data);
  }, []);

  return (
    <section className="w-full flex flex-col items-center py-10 md:py-16 bg-[#181c20] px-2 sm:px-4">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#bfc8f8] mb-10 md:mb-40 text-center">Projects</h2>
      <div className="w-full max-w-5xl flex flex-col gap-8 md:gap-[15vh]">
        {projects.map((project, idx) => (
          <div
            key={project.title + idx}
            className="group flex flex-col md:flex-row w-full min-h-[420px] md:min-h-[340px] bg-[#23272e] rounded-2xl shadow-2xl overflow-hidden border border-[#23272e] hover:shadow-[#00e0ff44] transition-shadow duration-300 ease-in-out"
          >
            {/* Diagonal image with colored border and shadow */}
            <div className="relative w-full md:w-1/3 min-h-[180px] md:min-h-[220px] flex items-stretch">
              <img
                src={project.image || '/fallback.png'}
                alt={project.title}
                className="w-full h-full object-cover transition-all duration-300 group-hover:blur-none"
                style={{
                  clipPath: 'polygon(0 0, 100% 0, 100% 85%, 0% 100%)',
                }}
              />
              {/* Diagonal colored border highlight */}
              <div
                className="absolute top-0 right-[-1px] w-2/3 h-full pointer-events-none transition-all duration-300"
                style={{
                  clipPath: 'polygon(100% 0, 100% 0, 100% 100%, 80% 100%)',
                  background: 'linear-gradient(120deg, #23272e 100%, transparent 100%)',
                  boxShadow: '0 8px 32px 0 #00e0ff22',
                }}
              />
              {/* Diagonal shadow for depth */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  clipPath: 'polygon(0 0, 100% 0, 100% 85%, 0% 100%)',
                  boxShadow: '0 12px 32px 0 #000a',
                }}
              />
            </div>

            <div className="flex-1 p-4 sm:p-6 md:p-8 flex flex-col justify-between ml-0 md:ml-10">
              <div>
                <h3 className="text-2xl sm:text-3xl md:text-5xl mt-4 md:mt-8 font-bold text-[#00e0ff] mb-2">{project.title}</h3>
                <p className="text-[#bfc8f8] mb-2 md:mb-4 mt-4 md:mt-10 text-base md:text-lg">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-2 md:mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 md:px-3 py-1 mt-2 md:mt-5 rounded-full border border-[#00e0ff] text-[#00e0ff] text-xs md:text-sm font-mono bg-[#181c20] bg-opacity-60"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-2 md:gap-4 mt-2 md:mt-4">
                {project.demo && <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 md:px-4 py-2 rounded-lg bg-[#00e0ff] text-[#181c20] font-bold shadow hover:bg-[#b8ffb8] hover:text-[#181c20] transition text-center"
                >
                  Live Demo
                </a>}
                <a
                  href={project.source}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 md:px-4 py-2 rounded-lg border border-[#bfc8f8] text-[#bfc8f8] font-bold hover:bg-[#23272e] hover:border-[#00e0ff] hover:text-[#00e0ff] transition text-center"
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
