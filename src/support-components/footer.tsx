import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { SiPeerlist } from 'react-icons/si';
import { AiOutlineMail } from 'react-icons/ai';

export default function Foooter() {
  const date = new Date()
  return (
    <>
      <div className='flex flex-col items-center justify-center pt-[3rem] sm:pt-[5rem]'>
        <span className='text-white text-xl sm:text-2xl font-bold mb-4'>Connect with me :)</span>

        <div id="connect" className="h-auto w-full max-w-[425px] sm:max-w-none 
          flex flex-col sm:flex-row flex-wrap justify-center items-center 
          p-3 sm:p-5 gap-3 sm:gap-4">
          
          <a href="https://twitter.com/aman__singh29" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full sm:w-auto">
            <span className="text-white flex items-center justify-center sm:justify-start 
              gap-2 sm:gap-4 text-sm sm:text-base hover:opacity-80 transition-opacity">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
              </svg>
              X (formely Twitter)
            </span>
          </a>

          <a href="https://peerlist.io/singhaman21" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full sm:w-auto">
            <span className="text-green-600 flex items-center justify-center sm:justify-start 
              gap-2 sm:gap-4 text-sm sm:text-base hover:opacity-80 transition-opacity">
              <SiPeerlist size={20} className="sm:text-[24px]" />
              Peerlist
            </span>
          </a>

          <a href="https://www.linkedin.com/in/aman-singh21" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full sm:w-auto">
            <span className="text-blue-700 flex items-center justify-center sm:justify-start 
              gap-2 sm:gap-4 text-sm sm:text-base hover:opacity-80 transition-opacity">
              <FaLinkedinIn size={20} className="sm:text-[24px]" />
              LinkedIn
            </span>
          </a>

          <a href="https://github.com/SinghAman21" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full sm:w-auto">
            <span className="text-gray-600 flex items-center justify-center sm:justify-start 
              gap-2 sm:gap-4 text-sm sm:text-base hover:opacity-80 transition-opacity">
              <FaGithub size={20} className="sm:text-[24px]" />
              Github
            </span>
          </a>

          <a href="mailto:work.singhaman@gmail.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full sm:w-auto">
            <span className="text-red-500 flex items-center justify-center sm:justify-start 
              gap-2 sm:gap-4 text-sm sm:text-base hover:opacity-80 transition-opacity">
              <AiOutlineMail size={20} className="sm:text-[24px]" />
              Mail
            </span>
          </a>
        </div>

        <div className="w-full max-w-[425px] sm:max-w-none px-4 sm:px-0">
          <hr className="border-white/30 my-4 sm:my-6" />
        </div>

        <span className='text-white py-4 sm:py-[4rem] text-sm sm:text-base'>
          Made by {' '}
          <a href="https://github.com/SinghAman21" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity">
            <span className="text-gray-600">
              user
            </span>
          </a>
          {' '}&copy; {date.getFullYear()}
        </span>
      </div>
    </>
  );
}
