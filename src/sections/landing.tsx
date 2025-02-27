import LetterGlitch from '../support-components/LetterGlitch'

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
