import React, { useState, useEffect } from 'react'
export default function Headog() {
const text = `Namaste World!`

const text2 = 
`Welcome to my Portfolio 
Glad you were able to reach! 
Without wasting time  
lets just scroll and 
EXPLOREEEE!`

  const [typedText, setTypedText] = useState('');
  const [typedText2, setTypedText2] = useState('');
  const [cursorIndex, setCursorIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [isTyping2, setIsTyping2] = useState(false);

  const scrollToTerminal = () => {
    window.scrollTo({ top: 850, behavior: 'smooth' });
  }

  useEffect(() => {
    const timer = setInterval(() => {
      if (isTyping) {
        const nextIndex = cursorIndex + 1;
        setTypedText(text.slice(0, nextIndex));
        setCursorIndex(nextIndex);
        if (nextIndex >= text.length) {
          setIsTyping(false);
          setIsTyping2(true);
        }
      }
      if (isTyping2) {
        const nextIndex2 = Math.min(cursorIndex + 1, text2.length);
        setTypedText2(text2.slice(0, nextIndex2));
        setCursorIndex(nextIndex2);
        if (nextIndex2 >= text2.length) setIsTyping2(false);
      }
    }, 50);
    return () => clearInterval(timer);
  }, [cursorIndex, isTyping, isTyping2, text, text2]);
  return (
    <>
    <div className='absolute top-0 left-0 w-full h-full z-50 pointer-events-none sm:h-[50vh]'>
      <div className='text-white z-10 absolute top-4 sm: flex items-center justify-center w-full'>
        <nav className='h-15 min-h-[40px] backdrop-blur-xs rounded-3xl 
           sm:p-5 w-[95vw] sm:w-[90vw] flex flex-col sm:flex-row 
          justify-center sm:justify-between items-center gap-2 sm:gap-0 pointer-events-auto'>
          
          <a className="text-white text-base sm:text-lg font-bold cursor-pointer" 
            onClick={()=>{
              window.location.reload();
          }}>&lt;Aman/&gt;</a>
          
          <a className="text-white text-base sm:text-lg font-bold">
            <pre className="text-center">
              {typedText}{isTyping ? <span style={{animation: 'cursor 0.5s infinite'}}>_</span> : ''}
            </pre>
          </a>
          
          <a className="text-white text-base sm:text-lg font-bold cursor-pointer" 
            onClick={scrollToTerminal}>
            Terminal
          </a>
        </nav>
      </div>

      <div className='flex items-center justify-center w-full h-auto px-4'>
        <pre className='text-white z-10 relative top-[7rem] sm:top-[20rem] 
          p-3 sm: backdrop-blur-xs  rounded-2xl font-bold
          text-sm sm:text-base text-center sm:text-left
          max-w-[95%] sm:max-w-none whitespace-pre-wrap'>
          {typedText2}{isTyping2 ? <span style={{animation: 'cursor 0.5s infinite'}}>_</span> : ''}
        </pre>
      </div>
      </div>
    </>
  )
}

