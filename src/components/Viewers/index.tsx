import * as S from './styles';

import viewers from './viewers-list';

const Viewers = () => {
  return (
    <S.Container>
      {viewers.map(viewer => (
        <S.Wrap key={viewer.title}>
          <img src={viewer.image} alt={viewer.title} />
          <video playsInline autoPlay muted loop>
            <source src={viewer.video} type='video/mp4' />
          </video>
        </S.Wrap>
      ))}
    </S.Container>
  );
};

export default Viewers;
