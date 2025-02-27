import React from 'react';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { SiPeerlist } from 'react-icons/si';
import { AiOutlineMail } from 'react-icons/ai';
export default function Foooter() {
  const date = new Date()
  return (
    <>
      <div className='flex flex-col items-center justify-center pt-[5rem]'>
        <span className='text-white text-2xl bold'>Connect with me :)</span>


        <div id="connect" className="h-auto w-auto flex flex-row p-5 justify-center  gap-4">
          <a href="https://twitter.com/aman__singh29" target="_blank" rel="noopener noreferrer">
            <span className="text-white flex items-center gap-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
              </svg>
              X (formely Twitter)
            </span>
          </a>
          <a href="https://peerlist.io/singhaman21" target="_blank" rel="noopener noreferrer">
            <span className="text-green-600 flex items-center gap-4">
              <SiPeerlist size={24} />
              Peerlist
            </span>
          </a>
          <a href="https://www.linkedin.com/in/aman-singh21" target="_blank" rel="noopener noreferrer">
            <span className="text-blue-700 flex items-center gap-4">
              <FaLinkedinIn size={24} />
              LinkedIn
            </span>
          </a>
          <a href="https://github.com/SinghAman21" target="_blank" rel="noopener noreferrer">
            <span className="text-gray-600 flex items-center gap-4">
              <FaGithub size={24} />
              Github
            </span>
          </a>
          <a href="mailto:work.singhaman@gmail.com" target="_blank" rel="noopener noreferrer">
            <span className="text-red-500 flex items-center gap-4">
              <AiOutlineMail size={24} />
              Mail
            </span>
          </a>
        </div>
        <span className='text-white'>--------------------------------------------------------------------------------------------------</span>
        <span className='text-white py-[4rem] relative top-[-1rem]'>Made by <a href="https://github.com/SinghAman21" target="_blank" rel="noopener noreferrer">
          <span className="text-gray-600  gap-4">
            user
          </span>
        </a> &copy; {date.getFullYear()}</span>

      </div>
    </>
  );
}
