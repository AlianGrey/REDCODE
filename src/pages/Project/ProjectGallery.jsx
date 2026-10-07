import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import "./ProjectPage.scss";

function ProjectGallery({ images }) {
  if (!images || images.length === 0) {
    return null;
  }

  return (
    <div className="project-gallery">
      <Swiper
        modules={[Navigation]}
        navigation
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
    </div>
  );
}

export default ProjectGallery;