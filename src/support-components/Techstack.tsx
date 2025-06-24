// import React from 'react'
import FallingText from './FallingText'

const TechStack = () => {
  return (
    <>
    <div className='h-auto mx-auto w-[70vw] px-2 sm:px-4'> 
      <span className="text-base sm:text-lg lg:text-xl text-white mb-4 block">
        I have
      </span>
  
      <FallingText
        text={`HTML CSS Tailwind Node.js React.js JavaScript Python Figma Bootstrap Express MongoDB Kali PostgreSQL Bash Git Linux Postman`}
        highlightWords={["Tailwind", "JavaScript","Kali", "Node.js", "Git", "TypeScript"]}
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
    </>
  )
}

export default TechStack