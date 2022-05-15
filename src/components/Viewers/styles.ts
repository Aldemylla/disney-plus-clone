import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(5, minmax(0, 1fr));

  padding: 26px 0;
`;

export const Wrap = styled.div`
  position: relative;

  padding-top: 54%;

  border: 3px solid rgba(219, 219, 219, 0.2);
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 69%) 0 26px 30px -10px,
    rgb(0 0 0 / 73%) 0 16px 10px -10px;

  overflow: hidden;

  transition: all 250ms var(--transition-timing-function-25) 0s;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;

    position: absolute;
    inset: 0;

    display: block;

    background: linear-gradient(rgb(48, 50, 62), rgb(30, 31, 42));

    opacity: 1;
    object-fit: cover;
    transition: opacity 500ms ease-in-out 0s;

    z-index: 1;
  }

  video {
    width: 100%;
    height: 100%;

    position: absolute;
    top: 0;

    opacity: 0;

    z-index: 0;
  }

  &:hover {
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    transform: scale(1.05);

    img {
      background: transparent;
    }

    video {
      opacity: 1;
      transform: scale(1.05);
    }
  }
`;
