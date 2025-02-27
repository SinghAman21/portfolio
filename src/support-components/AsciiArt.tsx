import React, { useState, useEffect } from 'react';

interface OutBoxProps {
  children?: React.ReactNode;
}

const asciivalue = [`
%===========================================@
#...........................................@
#...........................................@
#...........................................@
#..........====:.............====-..........@
#..........====:.............====-..........@
#..........====:.............====-..........@
#..........====:.............====-..........@
#..........-::------.....-----::::..........@
#..............-====....:====...............@
#..............-====....:====...............@
#..............-====....:====...............@
#..............-====....:====...............@
#.+++=.....======================-....+++++.@
#.++++.....======================-....+++++.@
#.++++.....=======================....+++++.@
#.++++.....=======================....+++++.@
#.++++.....====-----=====----=====....+++++.@
#.++++.....====:....====-....=====....+++++.@
#.++++.....====:....====-....=====....+++++.@
#.++++.....+===:....====-....=====....+++++.@
#.++++.....++==:....====-....==++=....+++++.@
#.....=++++++++==============+++++++++......@
#.....=+++++++++++++=====+++++++++++++......@
#.....++++++++++++++++++++++++++++++++......@
#.....++++++++++++++++++++++++++++++++......@
#.....-----+++++++++++++++++++++++----......@
#..........++++++++++++++++++++++=..........@
#..........++++++++++++++++++++++=..........@
#..........++++++++++++++++++++++=..........@
#..........++++++++++++++++++++++=..........@
#..............-++++....-++++...............@
#..............-++++....-++++...............@
#..............-++++....-++++...............@
#..............-++++....-++++...............@
#..........-:---====....:====----:..........@
#..........++++-.............++++=..........@
#..........++++-.............++++=..........@
#..........++++-.............++++=..........@
#..........++++-.............++++=..........@
#...........................................@
#...........................................@
#...........................................@
%===========================================@
`,
  `

@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@.....................................%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@.....................................%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@.....................................%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@.........====...........:===.........%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@.........====...........:===.........%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@.........====...........:===.........%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@.........====...........:===.........%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@.............====...:===-............%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@.............====...:===-............%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@.............====...:===-............%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@.............====...:===-............%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@.++++....===================....=+++.%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@.++++....===================....=+++.%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@.++++....===================....=+++.%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@.++++....===================....=+++.%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@.++++....====....===-...:===....=+++.%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@.++++....====....===-...:===....=+++.%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@.++++....+===....===-...-===....=+++.%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@.++++....++==....===-...-=++....=+++.%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@.....+++++++++=========+++++++++:....%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@.....+++++++++++++++++++++++++++:....%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@.....+++++++++++++++++++++++++++:....%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@.....+++++++++++++++++++++++++++:....%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@.........+++++++++++++++++++.........%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@.........+++++++++++++++++++.........%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@.........+++++++++++++++++++.........%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@.........+++++++++++++++++++.........%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@.............++++...-+++-............%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@.............++++...-+++-............%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@.............++++...-+++-............%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@.........----===-...:====---.........%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@.........++++...........-+++.........%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@.........++++...........-+++.........%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@.........++++...........-+++.........%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@.........::::............:::.........%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@.....................................%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@.....................................%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@


  `
];

const AsciiArt: React.FC<OutBoxProps> = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % asciivalue.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
<div className='flex items-center justify-center overflow-hidden h-screen w-screen pt-20'>
<div className="bg-yellow-600 h-full w-auto z-50 absolute m-4 p-4 flex-row items-center">
      <div className='ascii-content bg-white border-2'>
        <pre style={{ fontFamily: 'monospace', whiteSpace: 'pre-wrap', lineHeight: 0.9, fontSize: '12px' }}>
          {asciivalue[currentIndex]}
        </pre>
      </div>
      {/* <button className="ui-btn">
        <span>
          Explore ?
        </span>
      </button> */}
    </div>
    </div>
  );
};

export default AsciiArt;
