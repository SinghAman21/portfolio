import React, { useEffect, useState } from 'react';

const terminalLines = [
  { 
    command: 'Aman.currentLocation', 
    output: '"Mumbai, India"' 
  },
  { 
    command: 'Aman.contactInfo', 
    output: [
      { label: 'Mail', url: 'mailto:work.singhaman@gmail.com' },
      { label: 'LinkedIn', url: 'https://www.linkedin.com/in/aman-singh21' },
      { label: 'github', url: 'https://github.com/SinghAman21' }
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
    output: '["Kali",  "Python", "JavaScript", "React", "Backend Engineering", "Flask", "Kali", "git"]' 
  }
];

type OutputLink = { label: string, url: string };
type OutputType = string | OutputLink[];

const TerminalBlock: React.FC = () => {
  const [displayed, setDisplayed] = useState<
    { type: 'command' | 'output', text: string | OutputLink[] }[]
  >([]);
  const [currentLine, setCurrentLine] = useState(0);
  const [displayState, setDisplayState] = useState<'command' | 'output'>('command');
  const [showCursor, setShowCursor] = useState(true);

  // Blinking cursor
  useEffect(() => {
    const blink = setInterval(() => setShowCursor(c => !c), 500);
    return () => clearInterval(blink);
  }, []);

  useEffect(() => {
    if (currentLine >= terminalLines.length) return;

    if (displayState === 'command') {
      setDisplayed(prev => [
        ...prev,
        { type: 'command', text: `> ${terminalLines[currentLine].command}` }
      ]);
      const timeout = setTimeout(() => setDisplayState('output'), 700);
      return () => clearTimeout(timeout);
    } else {
      setDisplayed(prev => [
        ...prev,
        { type: 'output', text: terminalLines[currentLine].output }
      ]);
      const timeout = setTimeout(() => {
        setCurrentLine(i => i + 1);
        setDisplayState('command');
      }, 1100);
      return () => clearTimeout(timeout);
    }
  }, [currentLine, displayState]);

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
                target={item.url.startsWith('http') ? "_blank" : undefined}
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

  return (
    <div className="w-full h-[55vh] max-w-7xl rounded-xl shadow-2xl border border-[#23272e] bg-[#23272e] overflow-hidden">
      {/* Header */}
      <div className="relative flex items-center justify-center bg-[#181c20] px-6 py-2 border-b border-[#23272e]">
        {/* Centered title */}
        <span className="absolute left-1/2 -translate-x-1/2 text-[#00e0ff] font-bold font-mono text-center">root@user: ~</span>
        {/* Window controls on the right */}
        <div className="flex gap-2 ml-auto">
          <span className="w-3 h-3 rounded-full bg-yellow-400 border border-yellow-600 shadow"></span>
          <span className="w-3 h-3 rounded-full bg-green-400 border border-green-600 shadow"></span>
          <span className="w-3 h-3 rounded-full bg-red-400 border border-red-600 shadow"></span>
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
                  {idx === displayed.length - 1 && showCursor && displayState === 'command' && (
                    <span className="ml-1 animate-pulse text-[#00e0ff]">█</span>
                  )}
                </>
            }
          </div>
        ))}
        {/* If finished, show blinking cursor at the end */}
        {currentLine >= terminalLines.length && (
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
