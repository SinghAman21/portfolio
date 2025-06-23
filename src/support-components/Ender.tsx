import React from 'react';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { SiPeerlist } from 'react-icons/si';
import { AiOutlineMail } from 'react-icons/ai';

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#181c20] py-10 flex flex-col items-center border-t border-[#23272e] mt-16">
      <h2 className="text-[#bfc8f8] text-2xl font-bold mb-6">Connect with me</h2>
      <div className="flex flex-wrap justify-center gap-6 mb-8 w-full max-w-2xl">
        <a
          href="https://twitter.com/aman__singh29"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-[#bfc8f8] hover:text-[#00e0ff] transition text-lg"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" viewBox="0 0 16 16">
            <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
          </svg>
          X (formely Twitter)
        </a>
        <a
          href="https://peerlist.io/singhaman21"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-green-400 hover:text-[#00e0ff] transition text-lg"
        >
          <SiPeerlist size={22} />
          Peerlist
        </a>
        <a
          href="https://www.linkedin.com/in/aman-singh21"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-blue-400 hover:text-[#00e0ff] transition text-lg"
        >
          <FaLinkedinIn size={22} />
          LinkedIn
        </a>
        <a
          href="https://github.com/SinghAman21"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-[#bfc8f8] hover:text-[#00e0ff] transition text-lg"
        >
          <FaGithub size={22} />
          Github
        </a>
        <a
          href="mailto:work.singhaman@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-red-400 hover:text-[#00e0ff] transition text-lg"
        >
          <AiOutlineMail size={22} />
          Mail
        </a>
      </div>
      <div className="text-[#bfc8f8] text-sm text-center">
        &copy; {new Date().getFullYear()} Aman Singh. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;