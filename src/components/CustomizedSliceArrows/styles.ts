import styled from 'styled-components';

export const Button = styled.button`
  width: calc(3.5vw + 24px);
  height: 100%;

  position: absolute;
  top: 0px;

  display: block;

  padding: 0px;

  border: none;
  background: transparent;
  opacity: 0;

  transition: opacity 0.2s ease 0s;

  z-index: 1;

  cursor: pointer;

  &.slick-next {
    right: 0px;
    transform: translateX(100%);
  }

  &.slick-prev {
    left: 0px;
    transform: translateX(-100%);
  }

  &.slick-disabled {
    display: none !important;
  }

  &::before {
    content: '';
  }

  &:hover {
    opacity: 1;
  }

  svg {
    width: 40px !important;
    height: 40px !important;

    margin-top: 0px;
  }
`;
