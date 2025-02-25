import React from 'react';
// import reactImg from '../assets/react.png'; // Corrected import
import img from './911-target.png';

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
      img: img,
      name: 'hello 1',
      about: 'Description of Project 1',
      link: 'https://example.com/project1',
      github_link: 'https://github.com/user/project1'
    },
    {
      img: '',
      name: 'haahha 2',
      about: 'Description of Project 2',
      link: undefined,
      github_link: 'https://github.com/user/project2'
    },
    {
      img: '',
      name: 'yesyeys 3',
      about: 'Description of Project 3',
      link: undefined,
      github_link: undefined
    }
  ];

  return (

    <div className='flex justify-around items-center'>

      {projects.map(project => (
        <div className='mx-4' key={project.name}>
          <span>||=================================|| </span>
          <div className='py-4 px-4'>
            {project.img && (
              <img className='mx-auto' src={project.img} alt={project.name} height={150} width={150} />
            )}
            <br />
            <h2 className='text-4xl text-gray-100'>{project.name}</h2>
            <p className='text-base text-gray-500'>{project.about}</p>
            {project.link && (
              <a href={project.link} target="_blank" rel="noopener noreferrer">View Live</a>
            )} 
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            {project.github_link && (
              <a href={project.github_link} target="_blank" rel="noopener noreferrer">View on GitHub</a>
            )}
            <br />
          </div>
          <span>||=================================||</span>
        </div>
      ))}
    </div>

  );
}
