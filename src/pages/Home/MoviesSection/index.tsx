import * as S from './styles';
import {
  NextArrow,
  PrevArrow,
} from '../../../components/CustomizedSliceArrows';

type Movie = {
  title: string;
  image: string;
  _id: string;
};

type MoviesSectionProps = {
  movies: Movie[];
  title: string;
};

const MoviesSection = ({ movies, title }: MoviesSectionProps) => {
  let settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: false,
    touchMove: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <S.Container>
      <h4>{title}</h4>
      <S.Carousel {...settings}>
        {movies.map((movie: Movie) => (
          <S.Wrap key={movie.title}>
            <div>
              <div>
                <img src={movie.image} alt={movie.title} />
              </div>
            </div>
          </S.Wrap>
        ))}
      </S.Carousel>
    </S.Container>
  );
};

export default MoviesSection;
