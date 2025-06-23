import React, { useEffect, useState } from 'react';
import TerminalBlock from './support-components/TerminalBlock';

function App() {
  const fullText = 'Aman Singh';
  const [displayText, setDisplayText] = useState('');
  const [index, setIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    // Typing effect
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + fullText[index]);
        setIndex((prev) => prev + 1);
      }, 150);
      return () => clearTimeout(timeout);
    }
  }, [index]);

  useEffect(() => {
    // Blinking cursor effect
    const cursorBlink = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(cursorBlink);
  }, []);

  return (
    <div className="min-h-screen w-full flex flex-col items-center bg-[#181c20] px-4">
      {/* Navbar */}
      <nav className="w-full max-w-6xl flex justify-end gap-12 mt-8 mb-8">
        <a href="#" className="text-[#bfc8f8] text-lg font-medium hover:text-[#00e0ff] transition">Projects</a>
        <a href="#" className="text-[#bfc8f8] text-lg font-medium hover:text-[#00e0ff] transition">Contact</a>
      </nav>

      {/* Typewriter */}
      <div className="w-full max-w-6xl flex flex-col items-center mb-8">
        <div className="w-full flex justify-start">
          <span className="text-[3rem] md:text-[5rem] font-mono font-semibold text-[#00e0ff]">
            &gt; <span className="text-[#bfc8f8]">{displayText}{showCursor && <span className="bg-[#00e0ff] text-[#00e0ff] ml-2 px-4 rounded-sm animate-pulse"></span>}</span>
          </span>
        </div>
        <p className="mt-8 text-[#bfc8f8] text-xl md:text-2xl text-left w-full max-w-2xl">
          I am a web developer at MemSQL. My passion is building simple, beautiful user experiences.<br />
          Check out my <a href="#" className="text-[#00e0ff] font-semibold underline underline-offset-2 hover:text-[#b8ffb8]">side-projects</a> below.
        </p>
      </div>

      {/* Terminal Block */}
      <div className="w-full flex justify-center mt-8">
        <TerminalBlock />
      </div>
    </div>
  );
}

export default App;
