import styled from "styled-components";

export const Container = styled.header`
  color: #fff;
  text-align: center;
  background: #1a1a1a;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 94.6vh;
`;

export const Boxlogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70%;
  height: 70%;
`;

export const Imag = styled.img`
  display: flex;
  border-radius: 100%;
  width: 35%;
  height: 100%;

  @media (max-width: 830px) {
    width: 70%;
    height: 90%;
  };
  @media (max-width: 500px) {
    width: 100%;
    height: 80%;
  }
`;

export const Local = styled.img`
  display:flex;
  width: 40%;
  height: 30%;
`;

export const Paragraph = styled.p`
  font-size: 18px;
`;

export const Boxlocation = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Boxsocials = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  justify-content: space-evenly;
  width: 100%;
`;