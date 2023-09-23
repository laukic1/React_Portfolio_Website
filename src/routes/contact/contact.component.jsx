import "./contact.styles.scss";
import { ReactComponent as PhoneIcon } from "../../assets/phone-icon.svg";
import { ReactComponent as EmailIcon } from "../../assets/email-icon.svg";

import { ReactComponent as LinkedInIcon } from "../../assets/linkedIn-icon.svg";
import { ReactComponent as GitHubIcon } from "../../assets/git-hub-icon.svg";

const Contact = () => {
  return (
    <div className="contact-container">
      <h2>CONTACT</h2>

      <div className="content-body">
        <div className="contact-container1">
          <div className="row1">
            <div className="phone-container">
              <PhoneIcon className="phone-icon" />
            </div>
            <p>+386 40 323 077</p>
          </div>


          <div className="row1">
            <div className="email-container">
              <EmailIcon className="email-icon" />
            </div>

            <p>dlauko96@gmail.com</p>
          </div>


          <button className='send-email-btn'>Send email</button>
        </div>

        <div className="contact-container2">
          <div className="row1">
            
            <LinkedInIcon className="linked-icon" />
            <GitHubIcon className="git-icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
