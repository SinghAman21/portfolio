import DecryptedText from './DecryptedText'
export default function Aman() {
  return (
    <>
      Hi! I am Aman Singh
      I love to dive into pool of information 👾
      <div className='flex'>
        <div>
          {/* Example 1: Defaults (hover to decrypt) */}
          <DecryptedText text="Hover me!" />

          {/* Example 2: Customized speed and characters */}
          <DecryptedText
            text="Customize me"
            speed={100}
            maxIterations={20}
            characters="ABCD1234!?"
            className="revealed"
            parentClassName="all-letters"
            encryptedClassName="encrypted"
          />

          {/* Example 3: Animate on view (runs once) */}
          <div style={{ marginTop: '' }}>
            <DecryptedText
              text="This text animates when in view"
              animateOn="view"
              revealDirection="center"
            />
          </div>
        </div>
        <div>

        </div>
      </div>



    </>
  )
}
