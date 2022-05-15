import * as S from './styles';

const Login = () => {
  return (
    <S.Container>
      <S.Content>
        <S.CTA>
          <S.CTALogoOne src='/images/cta-logo-one.svg' />
          <S.SignUp> GET ALL THERE </S.SignUp>
          <S.Description>
            Get Premier Access to Raya and the Last Dragon for an additional fee
            with a Disney+ subscription. As of 03/26/21, the price of Disney+
            and The Disney Bundle will increase by $1.
          </S.Description>
          <S.CTALogoTwo src='/images/cta-logo-two.png' />
        </S.CTA>
        <S.BackgroundImg />
      </S.Content>
    </S.Container>
  );
};
export default Login;
