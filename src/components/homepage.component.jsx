import "../styles/main.scss";
import CircularMenu from "./circular-menu.component";
import { ReactComponent as HomeIcon } from "../assets/home-icon.svg";
import { ReactComponent as ProjectsIcon } from "../assets/projects-icon.svg";
import { ReactComponent as ContactIcon } from "../assets/contact-icon.svg";
import { ReactComponent as AboutIcon } from "../assets/about-icon.svg";
import { useEffect, useState } from "react";
import { Outlet } from "react-router";




const menuButtons = [
  { icon: HomeIcon, color: "rgba(255,255,255)", route:"/" },
  { icon: ProjectsIcon, color: "#ffffff", route:"projects" },
  { icon: ContactIcon, color: "#ffffff", route:"contact" },
  { icon: AboutIcon, color: "#ffffff", route:"about" },

];

const Homepage = () => {

  return (
    
      <div className="gradient-bg">

      <div className='cursor-dot' data-cursor-dot></div>
      <div className='cursor-outline' data-cursor-outline></div>
      <div className='clash-container'>
      <div className='route-content'><Outlet /></div> 
      <div className="page-container">
          <CircularMenu pages={menuButtons}  />
        </div>
        </div> 
        
{/* <div className='dynamic-content-container'>
    <About className={``} />
</div> */}
        <svg xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter id="goo">
              <feGaussianBlur
                in="SourceGraphic"
                stdDeviation="10"
                result="blur"
                
              />
              <feColorMatrix
                in="blur"
                mode="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
                result="goo"
                
              />
              <feBlend in="SourceGraphic" in2="goo" />
            </filter>
          </defs>
        </svg>
       
        <div className="gradients-container">
        <div className="g1"></div>
        <div className="g2"></div>
        <div className="g3"></div>
        <div className="g4"></div>
        <div className="g5"></div>
        
          <div className='interactive'></div>
          
        </div>
      </div>
  );
}

export default Homepage;
