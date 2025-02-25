import React from 'react'
import FallingText from '../support-components/FallingText';

export default function TechStack() {
  return (
    <div className='h-[30vw] w-auto'> 
I have 
  
  <FallingText
    text={`HTML CSS Tailwind Node.js React.js JavaScript Python Figma TypeScript Bootstrap Express MongoDB PostgreSQL Bash Git Linux Postman`}
    highlightWords={["Tailwind", "JavaScript", "Node.js", "Git", "TypeScript"]}
    highlightClass="highlighted"
    trigger="hover"
    backgroundColor="transparent"
    wireframes={false}
    gravity={0.56}
    fontSize="2rem"
    mouseConstraintStiffness={0.9}
  />
    </div>
  )
}
