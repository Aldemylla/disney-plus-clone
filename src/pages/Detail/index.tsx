import styled from 'styled-components';

const Detail = () => {
  return (
    <Container>
      <Background>
        <img src='' alt='' />
      </Background>

      <ImageTitle>
        <img src='' alt='' />
      </ImageTitle>
    </Container>
  );
};

const Container = styled.div`
  min-height: calc(100vh - 250px);

  position: relative;
  top: 72px;

  display: block;

  padding: 0 calc(3.5vw + 5px);

  overflow-x: hidden;
`;

const Background = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;

  opacity: 0.8;

  z-index: -1;

  img {
    width: 100vw;
    height: 100vh;

    @media only screen and (max-width: 768px) {
      width: initial;
    }
  }
`;

const ImageTitle = styled.div`
  width: 100%;
  height: 30vw;
  min-height: 170px;

  display: flex;
  align-items: flex-end;
  justify-content: flex-start;

  margin: 0 auto;
  padding-bottom: 24px;

  img {
    width: 35vw;
    min-width: 200px;
    max-width: 600px;
  }
`;

export default Detail;
