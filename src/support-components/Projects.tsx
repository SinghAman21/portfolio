import moon from './moon.png';
import key from './key.png';
import readme from './readme.png';
import onepiece from './onepiece.png';  


interface Project {
  img: string | undefined;
  name: string;
  about: string;
  link: string | undefined;
  github_link: string | undefined;
}

export default function Projects() {
  const projects: Project[] = [
    {
      img: onepiece,
      name: 'One Piece Quiz Page',
      about: 'The Piece Quiz App challenges users with unique questions across four routes, but beware: two incorrect answers will freeze your screen for 2 minutes.',
      link: 'https://quizisfun.netlify.app/',
      github_link: 'https://github.com/SinghAman21/ITSA2'
    },
    {
      img: moon,
      name: 'My Chaand',
      about: 'If your loved ones are upset from you show them this ',
      link: 'https://isntthemoonlovely.netlify.app/',
      github_link: 'https://github.com/SinghAman21/My-Chaand'
    },
    {
      img: key,
      name: 'Key Logger',
      about: 'The Key Logger is a utility tool designed to monitor and record keyboard input for security or productivity tracking.',
      link: undefined,
      github_link: 'https://github.com/SinghAman21/key-logger'
    },
    {
      img: readme,
      name: 'Readme Generator',
      about: 'This README Generator leverages the power of Google\'s Gemini API to create comprehensive and professional README files for projects',
      link: 'https://readthisme.netlify.app/',
      github_link: 'https://github.com/GDGVITM/readme_md'
    }
  ];

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 
      h-auto w-full overflow-y-auto overflow-x-hidden max-h-[80vh] 
      scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-gray-500 scrollbar-track-gray-200'>
      {projects.map(project => (
        <div className='mx-2 sm:mx-4 py-2 h-auto min-h-[400px] sm:min-h-[450px] 
          w-full flex flex-col justify-between' key={project.name}>
          
          <span className='text-center text-sm sm:text-base'>
            ||=================================||
          </span>
          
          <div className='py-2 sm:py-4 px-2 sm:px-4 flex-1'>
            {project.img && (
              <img 
                className='mx-auto max-w-full h-auto object-contain 
                  max-h-[150px] sm:max-h-[200px]' 
                src={project.img} 
                alt={project.name} 
              />
            )}
            <br />
            <h2 className='text-xl sm:text-2xl lg:text-3xl text-gray-100 mb-2'>
              {project.name}
            </h2>
            <p className='text-sm sm:text-base text-gray-500 py-1'>
              {project.about}
            </p>
            
            <div className='flex flex-col sm:flex-row gap-2 sm:gap-4 mt-4'>
              {project.link && (
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-400 transition-colors text-sm sm:text-base"
                >
                  View Live
                </a>
              )}
              {project.github_link && (
                <a 
                  href={project.github_link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-gray-300 transition-colors text-sm sm:text-base"
                >
                  View on GitHub
                </a>
              )}
            </div>
          </div>
          
          <span className='text-center text-sm sm:text-base'>
            ||=================================||
          </span>
        </div>
      ))}
    </div>
  );
}
