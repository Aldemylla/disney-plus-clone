import * as S from './styles';
import MainSlider from '../../components/MainSlider';
import Viewers from '../../components/Viewers';
import MoviesSection from './MoviesSection';
import recommends from './MoviesLists/recommends';
import originals from './MoviesLists/originals';
import animations from './MoviesLists/animations';
import blockbusters from './MoviesLists/blockbusters';

const Home = () => {
  return (
    <S.Container>
      <MainSlider />
      <Viewers />
      <MoviesSection title='Recomendado para Você' movies={recommends} />
      <MoviesSection title='Originais' movies={originals} />
      <MoviesSection title='Filmes de Animação' movies={animations} />
      <MoviesSection title='Sucessos de Bilheteria' movies={blockbusters} />
    </S.Container>
  );
};

export default Home;
