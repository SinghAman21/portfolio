import React from 'react';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { SiPeerlist } from 'react-icons/si';
import { AiOutlineMail } from 'react-icons/ai';

export default function Contactme() {
  return (
    <div className="h-auto w-full max-w-[425px] sm:max-w-none 
      flex flex-col items-center sm:items-start 
      gap-3 sm:gap-4 p-4 sm:p-6">
      
      <a href="https://twitter.com/aman__singh29" 
        target="_blank" 
        rel="noopener noreferrer"
        className="w-full sm:w-auto transition-transform hover:scale-105">
        <span className="text-black-500 flex items-center justify-center sm:justify-start 
          gap-2 sm:gap-4 text-sm sm:text-base">
          <svg xmlns="http://www.w3.org/2000/svg" 
            width="18" 
            height="18" 
            className="sm:w-[20px] sm:h-[20px]"
            fill="currentColor" 
            viewBox="0 0 16 16">
            <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/>
          </svg>
          X (formely Twitter)
        </span>
      </a>

      <a href="https://peerlist.io/singhaman21" 
        target="_blank" 
        rel="noopener noreferrer"
        className="w-full sm:w-auto transition-transform hover:scale-105">
        <span className="text-green-600 flex items-center justify-center sm:justify-start 
          gap-2 sm:gap-4 text-sm sm:text-base">
          <SiPeerlist size={20} className="sm:text-[24px]" />
          Peerlist
        </span>
      </a>

      <a href="https://www.linkedin.com/in/aman-singh21" 
        target="_blank" 
        rel="noopener noreferrer"
        className="w-full sm:w-auto transition-transform hover:scale-105">
        <span className="text-blue-700 flex items-center justify-center sm:justify-start 
          gap-2 sm:gap-4 text-sm sm:text-base">
          <FaLinkedinIn size={20} className="sm:text-[24px]" />
          LinkedIn
        </span>
      </a>

      <a href="https://github.com/SinghAman21" 
        target="_blank" 
        rel="noopener noreferrer"
        className="w-full sm:w-auto transition-transform hover:scale-105">
        <span className="text-gray-600 flex items-center justify-center sm:justify-start 
          gap-2 sm:gap-4 text-sm sm:text-base">
          <FaGithub size={20} className="sm:text-[24px]" />
          Github
        </span>
      </a>

      <a href="mailto:work.singhaman@gmail.com" 
        target="_blank" 
        rel="noopener noreferrer"
        className="w-full sm:w-auto transition-transform hover:scale-105">
        <span className="text-red-500 flex items-center justify-center sm:justify-start 
          gap-2 sm:gap-4 text-sm sm:text-base">
          <AiOutlineMail size={20} className="sm:text-[24px]" />
          Mail
        </span>
      </a>
    </div>
  );
}
