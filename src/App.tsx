import { useEffect, useState } from 'react';
import TerminalBlock from './support-components/TerminalBlock';
import Projects from './support-components/Projects';
import Footer from './support-components/Ender';


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

  const scrolldown = (x: number) => {
    window.scrollBy({ top: x, left: 0, behavior: 'smooth' });
  }

  return (
    <>
      <div className="min-h-screen w-full flex flex-col items-center bg-[#181c20] px-2 sm:px-4">
        {/* Navbar */}
        <nav className="w-full max-w-6xl flex flex-col md:flex-row justify-end items-end gap-4 md:gap-12 mt-6 md:mt-8 mb-6 md:mb-8 text-base md:text-lg">
          <a onClick={() => scrolldown(1300)} className="text-[#bfc8f8] font-medium hover:text-[#00e0ff] transition cursor-pointer">Projects</a>
          <a onClick={() => window.location.reload()} className="text-[#bfc8f8] font-medium hover:text-[#00e0ff] transition cursor-pointer">Reload?</a>
        </nav>

        {/* Typewriter */}
        <div className="w-full max-w-6xl flex flex-col items-center mb-8 px-2 md:px-0">
          <div className="w-full flex justify-start mt-10 md:mt-[15vh]">
            <span className="text-2xl sm:text-3xl md:text-[3rem] lg:text-[5rem] font-mono font-semibold text-[#00e0ff]">
              &gt; <span className="text-[#bfc8f8]">{displayText}{showCursor && <span className="bg-[#00e0ff] text-[#00e0ff] ml-1 md:ml-2 px-2 md:px-4 rounded-sm animate-pulse"></span>}</span>
            </span>
          </div>
          <span className="mt-10 md:mt-20 flex flex-col gap-y-2 md:gap-y-3 text-[#bfc8f8] text-base sm:text-xl md:text-2xl text-left w-full max-w-7xl px-1 md:px-0">
            <p className="">I am a Developer. My passion is to break things and understand it.</p>
            <p>Check out my <a onClick={() => scrolldown(1200)} className="text-[#00e0ff] font-semibold underline underline-offset-2 hover:text-[#b8ffb8] cursor-pointer">side-projects</a> below.</p>
          </span>
        </div>

        {/* Terminal Block */}
        <div className="w-full flex justify-center mt-10 md:mt-20 px-1 md:px-0">
          <TerminalBlock />
        </div>

        <div className="w-full text-white mt-10 md:mt-20">
          <Projects />
        </div>

        <div className="w-full text-white mt-10 md:mt-15 md-5">
          <Footer/>
        </div>
      </div>
    </>
  );
}

export default App;
