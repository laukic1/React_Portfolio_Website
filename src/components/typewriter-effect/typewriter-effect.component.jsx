import { Typewriter } from "react-simple-typewriter";

const TypewriterEffect = () => {
    return(
        <h1 style={{ textShadow: '0 0 10px black' ,color: 'white', paddingBottom: '10rem', padding: '0.5em', margin: 'auto 0', fontWeight: 'bold', textAlign: "center"  }}>
        { " Developer who is " }
        <span style={{ color: 'black', fontWeight: 'bold',}}>
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={['building innovative and user-friendly applications.', 'providing smart solutions.', 'always eager to learn new technologies.', 'passionate about coding and problem-solving.']}
            loop={5}
            cursor
            cursorStyle='_'
            typeSpeed={50}
            deleteSpeed={70}
            delaySpeed={3000}
         
          />
        </span>
      </h1>
    )
   
}

export default TypewriterEffect;