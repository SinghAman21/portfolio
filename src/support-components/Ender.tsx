import React from 'react';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { SiPeerlist } from 'react-icons/si';
import { AiOutlineMail } from 'react-icons/ai';

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#181c20] py-8 md:py-10 flex flex-col items-center border-t border-[#23272e] mt-10 md:mt-16 px-2 sm:px-4">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-center">Connect with me</h2>
      <div className="w-full flex flex-col items-center justify-center flex-wrap gap-4 md:gap-6 mb-6 md:mb-8 max-w-2xl">
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 w-full items-center">
          <a
            href="https://x.com/useraman21"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-[#bfc8f8] hover:text-[#00e0ff] transition text-base md:text-lg"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
              <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
            </svg>
            X
          </a>
          <a
            href="https://peerlist.io/singhaman21/signup"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-green-400 hover:text-[#00e0ff] transition text-base md:text-lg"
          >
            <SiPeerlist size={20} />
            Peerlist
          </a>
          <a
            href="https://www.linkedin.com/in/aman-singh21"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-blue-400 hover:text-[#00e0ff] transition text-base md:text-lg"
          >
            <FaLinkedinIn size={20} />
            LinkedIn
          </a>
          <a
            href="https://github.com/SinghAman21"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-[#bfc8f8] hover:text-[#00e0ff] transition text-base md:text-lg"
          >
            <FaGithub size={20} />
            Github
          </a>
          <a
            href="mailto:work.singhaman@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-red-400 hover:text-[#00e0ff] transition text-base md:text-lg"
          >
            <AiOutlineMail size={20} />
            Mail
          </a>
        </div>
      </div>
      <div className="text-[#bfc8f8] text-xs md:text-md text-center">
        &copy; {new Date().getFullYear()} <a href="https://x.com/useraman21">Aman Singh</a>. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;