import React, { useEffect, useState } from 'react';

const terminalLines = [
  { command: 'Aman.currentLocation', output: '"San Jose, CA"' },
  { command: 'Aman.contactInfo', output: '["j.chi2241@gmail.com", "LinkedIn", "github"]' },
  { command: 'Aman.resume', output: '"Amanchi.pdf"' },
  { command: 'Aman.interests', output: '["design", "basketball", "cooking", "starcraft"]' },
  { command: 'Aman.education', output: '"B.Sc. Structural Engineering - University of California, San Diego"' },
  { command: 'Aman.skills', output: '["Sass", "JavaScript", "Python", "React", "Redux", "Flask", "webpack", "git"]' },
  { command: '', output: '' },
];

const TerminalBlock: React.FC = () => {
  const [displayedLines, setDisplayedLines] = useState<
    { type: 'command' | 'output', text: string }[]
  >([]);
  const [currentLine, setCurrentLine] = useState(0);

  useEffect(() => {
    if (currentLine < terminalLines.length) {
      const cmd = { type: 'command' as const, text: `> ${terminalLines[currentLine].command}` };
      setDisplayedLines(prev => [...prev, cmd]);
      const outputTimeout = setTimeout(() => {
        const out = { type: 'output' as const, text: terminalLines[currentLine].output };
        setDisplayedLines(prev => [...prev, out]);
        setCurrentLine(currentLine + 1);
      }, 500);
      return () => clearTimeout(outputTimeout);
    }
  }, [currentLine]);

  return (
    <div className="w-[100vw] max-w-2xl rounded-xl shadow-2xl border border-[#23272e] bg-[#23272e] overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between bg-[#181c20] px-6 py-2 border-b border-[#23272e]">
        <span className="text-[#00e0ff] font-bold font-mono">root@user: ~</span>
        <div className="flex gap-2">
          <span className="w-3 h-3 rounded-full bg-yellow-400 border border-yellow-600 shadow"></span>
          <span className="w-3 h-3 rounded-full bg-green-400 border border-green-600 shadow"></span>
          <span className="w-3 h-3 rounded-full bg-red-400 border border-red-600 shadow"></span>
        </div>
      </div>
      {/* Body */}
      <div className="bg-[#23272e] px-8 py-6 min-h-[320px] font-mono text-base md:text-lg">
        {displayedLines.map((line, idx) => (
          <div
            key={idx}
            className={
              line.type === 'command'
                ? 'text-[#00e0ff] font-semibold'
                : 'text-[#b8ffb8] ml-8'
            }
          >
            {line.text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TerminalBlock;
