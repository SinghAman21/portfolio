import React, { useState } from 'react';
import { X, Minus, Square } from 'lucide-react';
import Aman from '../support-components/Aman';
import TechStack from '../support-components/TechStack';
import Projects from '../support-components/Projects';
import Contactme from '../support-components/Contactme';

export default function Terminal() {
  const [path, setPath] = useState('C:\\Aman Singh\'s\\Portfolio');
  const [command, setCommand] = useState('');
  const [showContent, setShowContent] = useState<JSX.Element | null>(null);

  const handleButtonClick = (buttonName: string) => {
    window.scrollTo({ top: 850, behavior: 'smooth' });
    setCommand(`ls -l`);
    if (buttonName === 'about_me') {
      setShowContent(<Aman />);
      setPath('C:\\Aman Singh\'s\\Portfolio\\About');
    } else if (buttonName === 'techstack') {
      setShowContent(<TechStack />);
      setPath('C:\\Aman Singh\'s\\Portfolio\\TechStack');
    } else if (buttonName === 'projects') {
      setShowContent(<Projects />);
      setPath('C:\\Aman Singh\'s\\Portfolio\\Projects');
    } else if (buttonName === 'contact_me') {
      setShowContent(<Contactme />);
      setPath('C:\\Aman Singh\'s\\Portfolio\\Contact_me');
    }
  };

  return (
    <>
      <div className='flex justify-center items-start h-auto pt-10 sm:pt-20'>
        <div className='bg-terminal-bg text-white font-mono h-auto 
          w-[95vw] sm:w-[90vw] lg:w-[80vw] rounded-lg shadow-lg 
          border border-white-700 mx-auto'>
          
          {/* Terminal Header */}
          <div className='flex items-center justify-between bg-gray-900 
            px-2 sm:px-4 py-2 rounded-t-lg h-auto sm:h-15'>
            <span className='text-white font-semibold'>
              <button className="ui-btn rounded-xl relative 
                top-1 left-2 sm:left-4 text-sm sm:text-base">
                <span>My Terminal</span>
              </button>
            </span>
          </div>
          
          {/* Terminal Body */}
          <div className='flex flex-col p-2 sm:p-3 space-y-3'>
            {/* Navigation Buttons */}
            <div className='flex flex-wrap gap-2 sm:gap-4'>
              <button className='bg-gray-800 hover:bg-gray-700 text-white 
                px-2 sm:px-4 py-1 sm:py-2 rounded-2xl transition 
                text-sm sm:text-base whitespace-nowrap cursor-pointer' 
                onClick={() => handleButtonClick('about_me')}>
                cd about
              </button>
              <button className='bg-gray-800 hover:bg-gray-700 text-white 
                px-2 sm:px-4 py-1 sm:py-2 rounded-2xl transition 
                text-sm sm:text-base whitespace-nowrap cursor-pointer'  
                onClick={() => handleButtonClick('techstack')}>
                cd techstack
              </button>
              <button className='bg-gray-800 hover:bg-gray-700 text-white 
                px-2 sm:px-4 py-1 sm:py-2 rounded-2xl transition 
                text-sm sm:text-base whitespace-nowrap cursor-pointer' 
                onClick={() => handleButtonClick('projects')}>
                cd projects
              </button>
              <button className='bg-gray-800 hover:bg-gray-700 text-white 
                px-2 sm:px-4 py-1 sm:py-2 rounded-2xl transition 
                text-sm sm:text-base whitespace-nowrap cursor-pointer' 
                onClick={() => handleButtonClick('contact_me')}>
                cd contact me
              </button>
            </div>
            
            {/* Command Display */}
            <code className='p-1 sm:p-2 rounded w-fit text-sm sm:text-base 
              break-all sm:break-normal'>
              {path} &gt; {command}
            </code>
            
            {/* Display Dynamic Content */}
            <div className='p-1 sm:p-2 rounded overflow-x-auto'>
              {showContent}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
