import React from 'react'
import FallingText from '../support-components/FallingText';

export default function TechStack() {
  return (
    <div className='h-auto w-full px-2 sm:px-4'> 
      <span className="text-base sm:text-lg lg:text-xl text-white mb-4 block">
        I have
      </span>
  
      <FallingText
        text={`HTML CSS Tailwind Node.js React.js JavaScript Python Figma TypeScript Bootstrap Express MongoDB PostgreSQL Bash Git Linux Postman`}
        highlightWords={["Tailwind", "JavaScript", "Node.js", "Git", "TypeScript"]}
        highlightClass="highlighted"
        trigger="hover"
        backgroundColor="transparent"
        wireframes={false}
        gravity={0.56}
        fontSize={{
          mobile: "1rem",
          tablet: "1.5rem",
          desktop: "2rem"
        }}
        mouseConstraintStiffness={0.9}
        containerClassName="min-h-[300px] sm:min-h-[400px] lg:min-h-[500px]"
      />
    </div>
  )
}
