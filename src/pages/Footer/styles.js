import styled from "styled-components";

export const Container = styled.section`
  color: #fff;
  text-align: center;
  background: #1a1a1a;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100vh;
  width: 100%;
`;

export const Subtitle = styled.h2`
  font-size: 32px;
  height: 7%;
`

export const Paragraph = styled.p`
  font-size: 20px;
  width: 38%;
  height: 20%;

  @media (max-width: 768px) {
    width: 75%;
  }
`

export const Boxsocials = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  justify-content: space-evenly;
  width: 100%;
  height: 20%;
`;

export const Paragraphsocials = styled.p`
  font-size: 18px;
  height: 20%;
`;

export const Box = styled.ul`
    display: flex;
    list-style: none;
    width: 100%;
    justify-content: space-evenly;
    background: #1a1a1a;
`;

export const List = styled.li`
    font-size: 30px;
`;