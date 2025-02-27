import React from 'react';
// import reactImg from '../assets/react.png'; // Corrected import
import img from './911-target.png';
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
<div className='grid grid-cols-3 justify-start h-[30vw] w-auto overflow-y-scroll scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-gray-500 scrollbar-track-gray-200'>
  {projects.map(project => (
    <div className='mx-4 py-2 h-[30vw] w-auto flex flex-col justify-between' key={project.name}>
      <span className='text-center'>||=================================||</span>
      <div className='py-4 px-4 flex-1'>
        {project.img && (
          <img className='mx-auto' src={project.img} alt={project.name} height={300} width={300} />
        )}
        <br />
        <h2 className='text-3xl text-gray-100'>{project.name}</h2>
        <p className='text-base text-gray-500 py-1'>{project.about}</p>
        <span className='relative top-4'>
        {project.link && (
          <a href={project.link} target="_blank" rel="noopener noreferrer">View Live</a>
        )} 
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        {project.github_link && (
          <a href={project.github_link} target="_blank" rel="noopener noreferrer">View on GitHub</a>
        )}
        </span>
        <br />
      </div>
      <span className='text-center'>||=================================||</span>
    </div>
  ))}
</div>

  );
}
