import "./projects-slider.styles.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { projects } from "../../data";
import { Navigation, Pagination, EffectFlip } from "swiper/modules";
import { useState } from "react";
import { ReactComponent as GitIcon } from "../../assets/git-hub-icon.svg";

// Import Swiper styles

import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";

const ProjectsSlider = () => {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);
  const [selectedProjectTitle, setSelectedProjectTitle] = useState(projects[0].title);
  const [selectedProjectText, setSelectedProjectText] = useState(projects[0].text);

   


  return (
    <div className="contact-container">
      <h2>PROJECTS</h2>

      <div className="content-body1">
        <div className="about-container5">
          <div className="row5">
            <Swiper
              effect={"flip"}
              grabCursor={true}
              pagination={true}
              navigation={true}
              modules={[EffectFlip, Pagination, Navigation]}
              className="swiper"
              onSlideChange = {(swiper) => {
    const newIndex = swiper.activeIndex;
    setSelectedProjectIndex(newIndex);
    const selectedProject = projects[newIndex];
    setSelectedProjectTitle(selectedProject.title);
    setSelectedProjectText(selectedProject.text);
}}
            >
              {projects.map((item) => {
                return (
                  <>
                    <SwiperSlide className="swiper-slide" key={item.id}>
                      <div className="slider-img-container">
                        <img src={item.image} alt={item.title} />
                      </div>
                    </SwiperSlide>
                  </>
                );
              })}
            </Swiper>
          </div>
        </div>
        <div className="about-container2">
          {selectedProjectTitle && (
            <div className="row-projects">
              <h3 className='project-title'>{selectedProjectTitle}</h3>
              <p className='project-text'>{selectedProjectText}</p>
              
            </div>
            
          )}
          <div className='row-projects-icons'>
          <GitIcon className='git-icon' />
          <GitIcon className='git-icon' />
          </div>
        </div>
       
        
      </div>
    </div>
  );
};

export default ProjectsSlider;
