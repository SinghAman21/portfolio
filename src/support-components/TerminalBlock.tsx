import React, { useEffect, useState } from 'react';

const terminalLines = [
  { 
    command: 'Aman.currentLocation', 
    output: '["Mumbai, India"]' 
  },
  { 
    command: 'Aman.contactInfo', 
    output: [
      { label: 'Mail', url: 'mailto:work.singhaman@gmail.com' },
      { label: 'LinkedIn', url: 'https://www.linkedin.com/in/aman-singh21' },
      { label: 'X', url: 'https://twitter.com/useraman21' }
    ]
  },
  { 
    command: 'Aman.resume', 
    output: [
      { label: "Aman's Resume.pdf", url: '/Aman-Resume.pdf' }
    ]
  },
  { 
    command: 'Aman.interests', 
    output: '[ "Badminton", "Chess", "Exploring stuffs"]' 
  },
  { 
    command: 'Aman.education', 
    output: '["B.Tech in Information Technology - University of Mumbai"]' 
  },
  { 
    command: 'Aman.skills', 
    output: '["Kali",  "Python", "Git", "Open Source Contributor","JavaScript", "React", "Backend Engineering", "Flask", "GitHub Actions ","Appwrite", "Firebase", "GCP"]' 
  }
];

type OutputLink = { label: string, url: string };
type OutputType = string | OutputLink[];

type DisplayedLine = { type: 'command' | 'output', text: string | OutputLink[] };

const TerminalBlock: React.FC = () => {
  const [displayed, setDisplayed] = useState<DisplayedLine[]>([]);
  const [currentPair, setCurrentPair] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  // Blinking cursor
  useEffect(() => {
    const blink = setInterval(() => setShowCursor(c => !c), 500);
    return () => clearInterval(blink);
  }, []);

  useEffect(() => {
    if (currentPair >= terminalLines.length) return;
    // Show command
    const showCommand = setTimeout(() => {
      setDisplayed(prev => [
        ...prev,
        { type: 'command', text: `> ${terminalLines[currentPair].command}` }
      ]);
      // Show output after command
      setTimeout(() => {
        setDisplayed(prev => [
          ...prev,
          { type: 'output', text: terminalLines[currentPair].output }
        ]);
        // Move to next pair
        setTimeout(() => {
          setCurrentPair(i => i + 1);
        }, 500);
      }, 200);
    }, currentPair === 0 ? 0 : 200);
    return () => clearTimeout(showCommand);
  }, [currentPair]);

  // Helper to render output with links
  const renderOutput = (output: OutputType) => {
    if (Array.isArray(output)) {
      return (
        <span className="flex flex-wrap gap-2">
          [
          {output.map((item, idx) => (
            <React.Fragment key={item.label}>
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-[#00e0ff] hover:text-[#b8ffb8] transition"
              >
                {item.label}
              </a>
              {idx < output.length - 1 && <span>,&nbsp;</span>}
            </React.Fragment>
          ))}
          ]
        </span>
      );
    }
    return output;
  };

  // import React from 'react';

  const MinimizeRoundedIcon = ({ size = 24, color = 'currentColor', ...props }) => (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24" 
      width={size} 
      height={size} 
      fill={color}
      {...props}
    >
      <path xmlns="http://www.w3.org/2000/svg" fill="currentColor" d="M7 21q-.425 0-.713-.288T6 20q0-.425.288-.713T7 19h10q.425 0 .713.288T18 20q0 .425-.288.713T17 21H7Z"/>
    </svg>
  );

  // import React from 'react';

 const SquareIcon = ({ size = 24, color = 'currentColor', ...props }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 20 20" 
    width={size} 
    height={size} 
    fill={color}
    {...props}
  >
    <path xmlns="http://www.w3.org/2000/svg" fill="currentColor" fill-rule="evenodd" d="M4 5a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5Zm2 1v8h8V6H6Z" clip-rule="evenodd"/>
  </svg>
);

// import React from 'react';

 const CrossIcon = ({ size = 24, color = 'currentColor', ...props }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    width={size} 
    height={size} 
    fill={color}
    {...props}
  >
    <path xmlns="http://www.w3.org/2000/svg" fill="currentColor" d="M18.36 19.78L12 13.41l-6.36 6.37l-1.42-1.42L10.59 12L4.22 5.64l1.42-1.42L12 10.59l6.36-6.36l1.41 1.41L13.41 12l6.36 6.36z"/>
  </svg>
);

  

  return (
    <div className="w-full h-[65vh] max-w-5xl rounded-xl shadow-2xl border border-[#23272e] bg-[#23272e] overflow-hidden">
      {/* Header */}
      <div className="relative flex items-center justify-center bg-[#181c20] px-6 py-2 border-b border-[#23272e]">
        {/* Centered title */}
        <span className="absolute left-1/2 -translate-x-1/2 text-[#00e0ff] font-bold font-mono text-center">root@aman ~</span>
        {/* Window controls on the right */}
        <div className="flex gap-2 ml-auto">
          <span className="w-5 h-5 rounded-full bg-yellow-400 border border-yellow-600 shadow"><MinimizeRoundedIcon size={18} color=''/></span>
          <span className="w-5 h-5 rounded-full bg-green-400 border border-green-600 shadow"><SquareIcon size={18}/></span>
          <span className="w-5 h-5 rounded-full bg-red-400 border border-red-600 shadow"><CrossIcon size={18}/></span>
        </div>
      </div>
      {/* Body */}
      <div className="bg-[#23272e] px-8 py-6 min-h-[320px] font-mono text-base md:text-lg">
        {displayed.map((line, idx) => (
          <div
            key={idx}
            className={
              line.type === 'command'
                ? 'text-[#00e0ff] font-semibold flex items-center'
                : 'text-[#b8ffb8] ml-8'
            }
          >
            {line.type === 'output'
              ? renderOutput(line.text)
              : <>
                  {typeof line.text === "string" ? line.text : null}
                  {/* Show cursor at the end of the active command */}
                  {idx === displayed.length - 1 && showCursor && currentPair < terminalLines.length && (
                    <span className="ml-1 animate-pulse text-[#00e0ff]">█</span>
                  )}
                </>
            }
          </div>
        ))}
        {/* If finished, show blinking cursor at the end */}
        {currentPair >= terminalLines.length && (
          <div className="text-[#00e0ff] font-semibold flex items-center">
            <span>&gt;</span>
            {showCursor && <span className="ml-1 animate-pulse">█</span>}
          </div>
        )}
      </div>
    </div>
  );
};

export default TerminalBlock;
