import "./projects-slider.styles.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { projects } from "../../data";
import { EffectCreative, Navigation, Pagination, Scrollbar, A11y, EffectCube } from 'swiper/modules';

// Import Swiper styles


import 'swiper/css/pagination';

import 'swiper/css';
import 'swiper/css/effect-creative';

const ProjectsSlider = () => {
  return (
    <div className="contact-container">
      <h2>PROJECTS</h2>

      <div className="content-body1">
        <div className="about-container5">
          <div className="row5">
            <Swiper
                grabCursor={true}
        effect={'creative'}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, 0, -400],
          },
          next: {
            translate: ['100%', 0, 0],
          },
        }}
        modules={[EffectCreative, Pagination]}
        className="mySwiper"
        
     
            >
              {projects.map((item) => {
                return (
                  <SwiperSlide key={item.id}>
                    <div>
                      <img src={item.image} alt={item.title} />
                      
                       
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsSlider;
