import { useState, useEffect } from 'react';
import green from './green-shirt.png';

export default function Aman() {
  const thingsIDo = ['Development','DSA', 'Mendling with OS', 'Exploring Technologies', 'Plays Badminton'];

  const getRandomColor = () => {
    const colors = [
      '#FF69B4', '#33CC33', '#6666FF', '#FF9900', '#CC33CC',
      '#33CCCC', '#FF33CC', '#CCFF33', '#33CCFF', '#FFCC33'
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  };
  
const tellme = () => {
//  What should i add text? Tell me
// I want if the user clicks on the tell me part it should just scroll down give a glow to div id="connect"
// you can use props,useref etc Make sure that the scrolling is smooth and tell me should have typing effect
}
  const text = `Currently an engineering student pursuing Bachelor in Technology. 
I have worked with various Development technologies.

Things i do:\n${thingsIDo.join('\n')}

What should i add next? 





btw Good to see ya :)`;

  // console.log(text);

  const [typedText, setTypedText] = useState('');
  const [cursorIndex, setCursorIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      if (isTyping) {
        const nextIndex = cursorIndex + 1;
        setTypedText(text.slice(0, nextIndex));
        setCursorIndex(nextIndex);
        if (nextIndex >= text.length) setIsTyping(false);
      }
    }, 50);
    return () => clearInterval(timer);
  }, [cursorIndex, isTyping, text]);

  return (
    <>
      <div className='flex flex-col lg:flex-row h-auto w-full p-4 max-w-[425px] sm:max-w-full mx-auto'>
        
        <div className='flex flex-col w-full lg:w-[50%] mb-6 lg:mb-0'>
          <span className='flex flex-col text-2xl font-bold mb-4'>
            Hi! I am Aman Singh
            <span className='text-lg font-normal'>
              I love to dive into pool of Information
            </span>
          </span>
          <pre className='whitespace-pre-wrap font-sans text-base'>
            {typedText}{isTyping}<span style={{animation: 'cursor 0.5s infinite'}}>_</span>
          </pre>
        </div>

        <div className='flex w-full lg:w-[50%] justify-center lg:justify-evenly'>
          <img 
            className="rounded-3xl max-w-full h-auto" 
            src={green} 
            alt="Aman's picture" 
            style={{
              maxHeight: '300px',
              objectFit: 'scale-down'
            }}
          />
        </div>
      </div>
    </>
  );
}
