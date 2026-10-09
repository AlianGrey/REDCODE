import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

import "swiper/css";
import "swiper/css/navigation";

import "./ProjectPage.scss";

function ProjectGallery({ images }) {
  if (!images || images.length === 0) {
    return null;
  }

  return (
    <div className="project-gallery">

      <button className="swiper-button-prev swiper-navigation-icon" type="button" aria-label="Предыдущее изображение">
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      
      <Swiper
        modules={[Navigation]}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        spaceBetween={20}
        slidesPerView={3}
        breakpoints={{
            768: {
                slidesPerView: 2,
            },
            1200: {
                slidesPerView: 3,
            },
        }}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="project-gallery__image-wrapper">
              <img
                src={image}
                alt={`Изображение проекта ${index + 1}`}
                className="project-gallery__image"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <button className="swiper-button-next swiper-navigation-icon" type="button" aria-label="Следующее изображение">
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
    
    </div>
  );
}

export default ProjectGallery;