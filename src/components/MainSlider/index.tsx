import * as S from './styles';

import mainProductions from './productions-list';
import { NextArrow, PrevArrow } from '../CustomizedSliceArrows';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const MainSlider = () => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div>
      <S.Carousel {...settings}>
        {mainProductions.map(production => (
          <S.Wrap key={production.title}>
            <a>
              <S.ProdOverlay
                className={`${production.message ? 'message' : ''}`}
                src={production.overlay}
                alt={production.title}
              />
              <S.ProdBackground
                src={production.background}
                alt={production.title}
              />
              {production?.message && (
                <S.ProdMessage>{production?.message}</S.ProdMessage>
              )}
            </a>
          </S.Wrap>
        ))}
      </S.Carousel>
    </div>
  );
};

export default MainSlider;
