import styled from 'styled-components';

export const Nav = styled.header`
  height: 70px;

  position: fixed;
  inset: 0;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 36px;

  letter-spacing: 16px;
  text-transform: uppercase;

  background: #090b13;

  z-index: 3;
`;

export const Logo = styled.a`
  width: 74px;
  height: auto;
  max-height: 70px;

  position: relative;

  display: inline-block;

  padding: 0;
  margin-top: 4px;

  font-size: 0;

  img {
    width: 100%;

    display: block;

    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }
`;

export const NavMenu = styled.nav`
  height: 100%;

  position: relative;

  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: flex-end;

  margin: 0px;
  margin-right: auto;
  margin-left: 40px;
  padding: 0;

  a {
    display: flex;
    align-items: center;

    padding: 13px 18px;

    img {
      width: 20px;
      min-width: 20px;
      height: 20px;

      z-index: auto;
    }

    p {
      position: relative;

      margin: 13px 0 13px 8px;
      padding: 2px 0px;

      color: var(--white);
      font-weight: 600;
      font-size: 13px;
      letter-spacing: 1.42px;
      white-space: nowrap;

      &:before {
        content: '';
        width: auto;
        height: 2px;

        position: absolute;
        left: 0;
        right: 0;
        bottom: -6px;
        transform-origin: left center;
        transform: scaleX(0);

        background: var(--white);
        border-radius: 0 0 4px 4px;
        opacity: 0;

        visibility: hidden;
        transition: all 250ms var(--transition-timing-function-25) 0s;
      }

      &:hover {
        &:before {
          transform: scaleX(1);

          visibility: visible;
          opacity: 1;
        }
      }
    }
  }

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

export const UserImg = styled.img`
  height: 100%;
`;

export const Login = styled.a`
  padding: 8px 16px;

  letter-spacing: 1.5px;

  background: rgba(0, 0, 0, 0.6);
  border: 1px solid var(--white);
  border-radius: 4px;

  transition: all 0.2s ease 0s;

  &:hover {
    color: #000;

    background: var(--white);
    border-color: transparent;
  }
`;

export const DropDown = styled.div`
  width: 100px;

  position: absolute;
  top: 48px;
  right: 0;

  padding: 10px;

  font-size: 14px;
  letter-spacing: 3px;

  background: rgb(19, 19, 19);
  border: 1px solid rgba(151, 151, 151, 0.34);
  border-radius: 4px;
  box-shadow: rgb(0 0 0 / 50%) 0 0 18px;
  opacity: 0;
`;
export const SignOut = styled.div`
  width: 48px;
  height: 48px;

  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  margin-right: -15px;

  cursor: pointer;

  ${UserImg} {
    width: 100%;
    height: 100%;

    border-radius: 50%;
  }

  &:hover {
    ${DropDown} {
      opacity: 1;
      transition: 1s;
    }
  }
`;
