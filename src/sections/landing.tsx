import LetterGlitch from '@/support-components/LetterGlitch'
import React from 'react'

export default function Landing() {
    return (
        <>
            <LetterGlitch
                glitchSpeed={50}
                centerVignette={false}
                outerVignette={true}
                smooth={true}
            />
        </>
    )
}
