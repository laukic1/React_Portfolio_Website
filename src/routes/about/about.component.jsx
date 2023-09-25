import "./about.styles.scss";
import { ReactComponent as InfoIcon } from "../../assets/info-icon.svg";
import ProfileImage from '../../assets/profile.png';


const About = () => {
  return (
    <div className="contact-container">
      <h2>ABOUT ME</h2>

      <div className="content-body">

      <div className='about-container3'>
        <div className='row1'>
       <img src={ProfileImage} className='profile-img' alt='profile' />
        </div>
      </div>
        <div className="about-container1">
          <div className="row1">
           
            <p>Hey, my name is David Lauko and I'm a passionate front-end developer from Maribor, Slovenia.</p>

          </div>


          <div className="row1">
           

          <p>My dedication to excellence and commitment to deliver best possible product have been honed by my ability to be a creative and efficient problem solver.</p>

          </div>


          <button className='send-email-btn'>View resume</button>
        </div>

        <div className="about-container2">
          <div className="row-about">
            
            <InfoIcon className="info-icon" />
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
