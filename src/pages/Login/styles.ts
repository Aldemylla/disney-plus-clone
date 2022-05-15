import styled from 'styled-components';

export const Container = styled.section`
  height: 100vh;

  display: flex;
  flex-direction: column;

  text-align: center;
  overflow: hidden;
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;

  margin-bottom: 10vw;
  padding: 80px 40px;

  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  box-sizing: border-box;
`;

export const BackgroundImg = styled.div`
  height: 100%;

  position: absolute;
  inset: 0;

  z-index: -99999999;

  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url('/images/login-background.jpg');
`;

export const CTA = styled.div`
  width: 100%;
  max-width: 650px;

  display: flex;
  flex-direction: column;
`;

export const CTALogoOne = styled.img`
  width: 100%;

  max-width: 600px;
  min-height: 1px;

  display: block;

  margin-bottom: 12px;
`;

export const SignUp = styled.a`
  width: 100%;

  margin-bottom: 12px;
  padding: 16.5px 0;

  font-weight: bold;
  color: var(--white);
  letter-spacing: 1.5px;
  font-size: 18px;

  background: var(--blue);
  border: 1px solid transparent;
  border-radius: 4px;

  &:hover {
    background-color: var(--light-blue);
  }
`;

export const Description = styled.p`
  margin: 0 0 24px;

  color: var(--white);
  font-size: 11px;
  letter-spacing: 1.5px;
`;

export const CTALogoTwo = styled.img`
  width: 100%;
  max-width: 600px;

  display: inline-block;

  margin-bottom: 20px;
  vertical-align: bottom;
`;
