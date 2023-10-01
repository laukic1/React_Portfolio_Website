import "./projects-slider.styles.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { projects } from "../../data";
import { Navigation, Pagination, EffectFlip } from "swiper/modules";
import { useState } from "react";
import { ReactComponent as GitIcon } from "../../assets/git-hub-icon.svg";
import { ReactComponent as WebsiteIcon } from "../../assets/website-icon.svg";
import { Link } from "react-router-dom";

// Import Swiper styles

import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";

const ProjectsSlider = () => {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);
  const [selectedProjectTitle, setSelectedProjectTitle] = useState(
    projects[0].title
  );
  const [selectedProjectText, setSelectedProjectText] = useState(
    projects[0].text
  );
  const [selectedProjectGitHub, setSelectedProjectGitHub] = useState(
    projects[0].github
  );
  const [selectedProjectWebsite, setSelectedProjectWebsite] = useState(
    projects[0].website
  );

  return (
    <div className="projects-container">
      <h2>PROJECTS</h2>

      <div className="content-body">
        <div className="main-slider-container">
          <div className="row">
            <Swiper
              effect={"flip"}
              pagination={true}
              navigation={true}
              grabCursor={true}
              modules={[EffectFlip, Pagination, Navigation]}
              className="swiper"
              onSlideChange={(swiper) => {
                const newIndex = swiper.activeIndex;
                setSelectedProjectIndex(newIndex);
                const selectedProject = projects[newIndex];
                setSelectedProjectTitle(selectedProject.title);
                setSelectedProjectText(selectedProject.text);
                setSelectedProjectGitHub(selectedProject.github);
                setSelectedProjectWebsite(selectedProject.website);
              }}
            >
              {projects.map((item) => {
                return (
                  <SwiperSlide key={item.id} className="swiper-slide">
                    <div className="slider-img-container">
                      <img key={item.id} src={item.image} alt={item.title} />
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
        <div className="projects-info-container">
          {selectedProjectTitle && (
            <div className="row-projects">
              <h3 className="project-title">{selectedProjectTitle}</h3>
              <p className="project-text">{selectedProjectText}</p>
            </div>
          )}

          {selectedProjectTitle && (
            <div className="row-projects-icons">
              <Link
                key={`${selectedProjectTitle}-web`}
                target="_blank"
                to={selectedProjectWebsite}
              >
                <WebsiteIcon className="web-icon" />
              </Link>

              {selectedProjectGitHub && (
                <Link
                  key={`${selectedProjectTitle}-git`}
                  target="_blank"
                  to={selectedProjectGitHub}
                >
                  <GitIcon className="git-icon" />
                </Link>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectsSlider;
