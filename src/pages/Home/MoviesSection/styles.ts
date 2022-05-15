import styled from 'styled-components';
import Slider from 'react-slick';

export const Container = styled.div`
  padding: 0 0 26px;

  > h4 {
    font-size: 20px;
    font-weight: 600;
    line-height: 1.4;
  }
`;

export const Carousel = styled(Slider)`
  margin: 0 -10px;

  .slick-slide {
    height: 100%;
    min-height: 1px;

    float: left;

    padding: 10px;

    pointer-events: auto;
    transition: opacity 300ms ease 0s;
  }
`;

export const Wrap = styled.div`
  div {
    display: block;

    position: relative;

    border-radius: 4px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0 / 73%) 0px 16px 10px -10px;

    transform: scale(1, 1) translateZ(0px);
    transition: 300ms transform, box-shadow ease-out;

    cursor: pointer;

    &:hover {
      box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
        rgb(0 0 0 / 72%) 0px 30px 22px -10px;

      transform: scale(1.05, 1.05) translateZ(0px) translate3d(0px, 0px, 0px);
      transition: 300ms transform, box-shadow ease-out;

      &:after {
        border: 4px solid var(--white-border);
      }
    }

    &:after {
      content: '';

      position: absolute;
      inset: 0px;

      border-radius: 4px;
      border: 4px solid transparent;

      transition: border 300ms ease-out 0s;
    }

    div {
      padding-top: 56.25%;

      border-radius: 4px;
      background: linear-gradient(rgb(48, 50, 62), rgb(30, 31, 42));

      img {
        width: 100%;
        height: 100%;

        position: absolute;
        inset: 0;

        display: block;

        opacity: 1;
        object-fit: cover;
        transition: opacity 500ms ease-in-out 0s;
      }
    }
  }
`;
