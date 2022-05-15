import styled from "styled-components";

export const Container = styled.main`
  min-height: calc(100vh - 250px);

  position: relative;
  top: 72px;

  display: block;

  padding: 0 calc(3.5vw + 5px);

  overflow-x: hidden;

  > div {
    width: 97%;

    transform: translate(1.5%);
  }

  &::after {
    content: '';

    position: absolute;
    inset: 0;

    background: url('images/home-background.png') center center / cover
      no-repeat fixed;

    z-index: -1;
  }

  img {
    border-radius: 4px;
  }

  .slick-list {
    overflow: initial;
  }
`;
