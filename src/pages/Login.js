import React from "react";
import styled from "styled-components";

const Login = () => {
  return (
    <Container>
      <CTA>
        <CTALogoOne src="/images/cta-logo-one.svg"></CTALogoOne>
        <SignUp>GET ALL THERE</SignUp>
        <Description>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
          adipisci dicta explicabo et ex atque accusantium totam itaque odit.
          Magni numquam hic facilis repellat nam?
        </Description>
        <CTALogoTwo src="/images/cta-logo-two.png"></CTALogoTwo>
      </CTA>
    </Container>
  );
};

export default Login;

const Container = styled.div`
  position: relative;
  height: calc(100vh - 70px);
  display: flex;
  align-items: top;
  justify-content: center;


  &:before {
    background-positon: top;
    background-size: cover;
    opacity: 0.8;
    background: url("/images/login-background.jpg") center center / cover
      no-repeat fixed;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
  }
`;

const CTA = styled.div`
margin-top:75px;
  max-width: 650px;
  padding: 80px 40px;
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items:center;
`;
const CTALogoOne = styled.img``;

const CTALogoTwo = styled.img`
width:90%`;
const SignUp = styled.a`
  width: 100%;
  background-color: #0063e5;
  font-weight: bold;
  padding: 17px 0;
  color: #f9f9f9;
  border-radius: 4px;
  text-align: center;
  font-size: 18px;
  cusor: pointer;
  transition: all 250ms;
  letter-spacing: 1.5px;
  margin-top: 8px;
  margin-bottom: 12px;
  cursor: pointer;

  &:hover {
    background: #0483ee;
  }
`;
const Description = styled.p`
  font-size: 11px;
  leter-spacing: 1.5px;
  text-align: center;
`;
