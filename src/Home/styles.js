import styled from 'styled-components';

import bg from '../assets/bg.jpg';

export const Container = styled.div`
  width: 100%;
  display: flex;
  height: 100%;
  @media (max-width: 799px) {
    flex-direction: column;
  }
`;

export const CollumnLeft = styled.section`
  background: url(${bg}) no-repeat scroll 0 0 #12014f;
  height: 100vh;
  flex: 0 0 40vw;
  max-width: 555px;
  display: flex;
  align-items: center;
  padding: 0 20px;
  @media (max-width: 799px) {
    padding: 0 20px;
    flex: 0 0 auto;
  }
`;
export const CollumnRight = styled.section`
  background-color: #fff;
  max-width: 992px;
  height: 100vh;
  display: flex;
  align-items: center;
  padding: 0 80px;
  @media (max-width: 799px) {
    padding: 0 20px;
  }
`;

export const Brand = styled.div`
  h1 {
    font-size: 64px;
    text-transform: uppercase;
    font-weight: 800;
    color: #ffffff;
    @media (max-width: 799px) {
      font-size: 48px;
    }
  }
  p {
    color: #ffffff;
    font-size: 24px;
    @media (max-width: 799px) {
      font-size: 18px;
    }
  }
`;

export const Content = styled.article`
  hr {
    width: 80px;
    margin-bottom: 32px;
  }
  h1 {
    font-weight: normal;
    font-size: 36px;
    line-height: 49px;
    color: #000000;
    margin-bottom: 32px;
  }
  p {
    font-size: 24px;
    margin-bottom: 32px;
  }
`;

export const Bottom = styled.div`
  margin-top: 128px;
`;
export const Span = styled.span`
  margin-left: 64px;
`;
