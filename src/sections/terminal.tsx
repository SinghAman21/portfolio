import React, { useState } from 'react';
import { X, Minus, Square } from 'lucide-react';
import Aman from '../support-components/Aman';
import TechStack from '../support-components/TechStack';
import Projects from '../support-components/Projects';

export default function Terminal() {
  const [path, setPath] = useState('C:\\Aman Singh\'s\\Portfolio');
  const [command, setCommand] = useState('');
  const [showContent, setShowContent] = useState<JSX.Element | null>(null);

  const handleButtonClick = (buttonName: string) => {
    window.scrollTo({ top: 5000, behavior: 'smooth' });
    setCommand(`ls -l`);
    if (buttonName === 'about') {
      setShowContent(<Aman />);
      setPath('C:\\Aman Singh\'s\\Portfolio\\About');
    } else if (buttonName === 'techstack') {
      setShowContent(<TechStack />);
      setPath('C:\\Aman Singh\'s\\Portfolio\\TechStack');
    } else if (buttonName === 'projects') {
      setShowContent(<Projects />);
      setPath('C:\\Aman Singh\'s\\Portfolio\\Projects');
    }
  };

  return (
    <div className='flex justify-center items-start h-screen'>
    <div className='bg-terminal-bg text-white font-mono h-auto w-[80vw] rounded-lg shadow-lg border border-white-700 mx-auto'>
      {/* Terminal Header */}
      <div className='flex items-center justify-between bg-gray-900 px-4 py-2 rounded-t-lg border-2 border-white-700'>
        <span className='text-white font-semibold'>Master Terminal</span>
        <div className='flex space-x-2'>
          <Minus size={18} className='text-yellow-500 cursor-pointer hover:text-yellow-400' />
          <Square size={18} className='text-blue-500 cursor-pointer hover:text-blue-400' />
          <X size={18} className='text-red-500 cursor-pointer hover:text-red-400' />
        </div>
      </div>
      
      {/* Terminal Body */}
      <div className='flex flex-col p-3 space-y-3'>
        {/* Navigation Buttons */}
        <div className='flex space-x-4'>
          <button className='bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded transition' onClick={() => handleButtonClick('about')}>cd aman</button>
          <button className='bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded transition' onClick={() => handleButtonClick('techstack')}>cd techstack</button>
          <button className='bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded transition' onClick={() => handleButtonClick('projects')}>cd projects</button>
        </div>
        
        {/* Command Display */}
        <code className=' p-2 rounded w-fit'>{path} &gt; {command}</code>
        
        {/* Display Dynamic Content */}
        <div className='p-2 rounded'>{showContent}</div>
      </div>
    </div>
    </div>
  );
}
