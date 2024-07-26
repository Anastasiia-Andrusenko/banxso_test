// import {Swiper, SwiperSlide} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import css from './Gallery.module.css';
import { useRef, useEffect, useState } from 'react';
import {
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
} from 'react-icons/md';

const images = [
  { src: require('../../img/img.webp'), caption: 'Lorem ipsum' },
  { src: require('../../img/img.webp'), caption: 'Lorem ipsum' },
  { src: require('../../img/img.webp'), caption: 'Lorem ipsum' },
  { src: require('../../img/img.webp'), caption: 'Lorem ipsum' },
  { src: require('../../img/img.webp'), caption: 'Lorem ipsum' },
  { src: require('../../img/img.webp'), caption: 'Lorem ipsum' },
];

const Gallery = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const paginationRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const swiper = document.querySelector(`.${css.swiper}`).swiper;
    swiper.params.navigation.prevEl = prevRef.current;
    swiper.params.navigation.nextEl = nextRef.current;
    swiper.params.pagination.el = paginationRef.current;
    swiper.navigation.init();
    swiper.navigation.update();
    swiper.pagination.init();
    swiper.pagination.update();
    swiper.on('slideChange', () => setActiveIndex(swiper.realIndex));
  }, []);

  return (
    <div className={css.section}>
      <h2 className={css.title}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </h2>
      <p className={css.description}>
        Ut eget ullamcorper elit, sed aliquam dui. Integer rutrum venenatis elit
        in convallis. Ut justo libero, posuere a nibh quis, sollicitudin
        venenatis ipsum. Ut vestibulum quis mauris vel posuere. Pellentesque ut
        sem nec massa elementum ultricies. Nulla efficitur rutrum lacus, id
        mattis ligula mattis sed.
      </p>
      <div className={css.galleryContainer}>
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={3}
          loop={true}
          className={css.swiper}
        >
          {images.map((image, index) => (
            <SwiperSlide key={index} className={css.swiperSlide}>
              <img
                src={image.src}
                alt={image.caption}
                width={400}
                className={css.img}
              />
              <p className={css.caption}>{image.caption}</p>
              <button type="button" className={css.btn}>
                Lorem ipsum
              </button>
            </SwiperSlide>
          ))}
        </Swiper>
        <div ref={prevRef} className={`${css.customNavButton} ${css.prev}`}>
          <MdOutlineArrowBackIos className={css.icon} />
        </div>
        <div ref={nextRef} className={`${css.customNavButton} ${css.next}`}>
          <MdOutlineArrowForwardIos className={css.icon} />
        </div>
        <div ref={paginationRef} className={css.customPagination}>
          {images.map((_, index) => (
            <span
              key={index}
              className={`${css.paginationBullet} ${
                activeIndex === index ? css.active : ''
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
