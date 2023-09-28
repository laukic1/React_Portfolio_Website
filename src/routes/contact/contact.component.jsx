import "./contact.styles.scss";
import { ReactComponent as PhoneIcon } from "../../assets/phone-icon.svg";
import { ReactComponent as EmailIcon } from "../../assets/email-icon.svg";

import { ReactComponent as LinkedInIcon } from "../../assets/linkedIn-icon.svg";
import { ReactComponent as GitHubIcon } from "../../assets/git-hub-icon.svg";
import SendEmailButton from "../../components/email-send-button/email-send-button.component";
import PhoneCall from "../../components/phone-call/phone-call.component";
import { Link } from "react-router-dom";

import Lottie from "lottie-react";
import animationData from '../../assets/animation_ln3cfm62.json';
const Contact = () => {
  return (
    <div className="contact-container">
      <h2>CONTACT</h2>

      <div className="content-body">
        <div className="contact-container1">
          <div className="row1">
            <div className="phone-container">
              <PhoneIcon onClick={PhoneCall} className="phone-icon" />
            </div>
            <p>+386 40 323 077</p>
            <Lottie animationData={animationData} />
          </div>


          <div className="row1">
            <div className="email-container">
              <EmailIcon onClick={SendEmailButton} className="email-icon" />
            </div>

            <p>dlauko96@gmail.com</p>
          </div>

          

        </div>

        <div className="contact-container2">
          <div className="row1">
            
           <Link target="_blank" to='https://www.linkedin.com/in/david-lauko-602649269/'><LinkedInIcon className="linked-icon" /></Link> 
            <Link target="_blank" to='https://github.com/laukic1'><GitHubIcon className="git-icon" /></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
