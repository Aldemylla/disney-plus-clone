import styled from 'styled-components';
import Slider from 'react-slick';

export const Carousel = styled(Slider)`
  margin-top: 20px;

  & > button {
    &:hover {
      opacity: 1;
      transition: opacity 0.2s ease 0s;
    }
  }

  .slick-dots {
    width: auto;

    position: absolute;
    right: 20px;
    bottom: 20px;

    display: block;

    padding: 0;
    margin: 0;

    list-style: none;
    text-align: right;

    li {
      width: 20px;
      height: 20px;

      position: relative;

      display: inline-block;

      margin: 0;
      padding: 0;

      pointer-events: auto;
      cursor: pointer;

      &.slick-active button::before {
        color: #fff;
      }

      button::before {
        font-size: 6px;
        color: rgb(150, 158, 171);

        opacity: 1;
      }
    }
  }

  .slick-list {
    margin: 0px -10px;

    .slick-slide {
      width: 1225px;
      height: 100%;
      min-height: 1px;

      float: left;

      padding: 10px;

      outline: none;

      &.slick-active a {
        img:first-of-type {
          opacity: 1;
          transform: translateX(0px);
          transition: transform 700ms var(--transition-timing-function-25) 150ms,
            opacity 700ms var(--transition-timing-function-25) 150ms;
        }

        h4 {
          opacity: 1;
          transition: opacity 750ms var(--transition-timing-function-25) 850ms;

          @media only screen and (max-width: 1025px) {
            font-size: 15px;
          }
        }
      }
    }
  }
`;

export const Wrap = styled.div`
  position: relative;

  border-radius: 4px;

  cursor: pointer;

  a {
    position: relative;

    display: block;

    border-radius: 4px;
    box-shadow: rgb(0 0 0 / 69%) 0 26px 30px -10px,
      rgb(0 0 0 / 73%) 0 16px 10px -10px;

    &:hover {
      box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
        rgb(0 0 0 / 73%) 0px 16px 10px -10px;
      transform: scale(1);
      transition: all 150ms var(--transition-timing-function-55) 0s !important;

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

      transition: border 150ms linear 0s;
    }
  }
`;

export const ProdOverlay = styled.img`
  width: 100%;
  height: 100%;

  position: absolute;
  inset: 0;

  display: block;

  opacity: 1;
  object-fit: cover;
  transform: translateX(30px);
  transition: transform 700ms var(--transition-timing-function-25) 150ms;

  &.message {
    width: 22.9%;
    height: auto;

    inset: 10% auto auto 6.5%;

    object-fit: contain;
  }
`;

export const ProdBackground = styled.img`
  width: 100%;
  height: 100%;
`;

export const ProdMessage = styled.h4`
  position: absolute;
  bottom: 10%;
  left: 6.5%;

  font-size: 20px;
  letter-spacing: 1px;

  opacity: 0;
`;
