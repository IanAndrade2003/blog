import styled from "styled-components";

export const Container = styled.main`
  color: #fff;
  text-align: center;
  background: #1a1a1a;
  height: 100vh;
  width: 100%;
`;

export const Boxproject = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 94%;
  flex-wrap: wrap;
`;

export const Boxone = styled.div`
  display: flex;
  background-color: #8BC6EC;
  background-image: linear-gradient(45deg, #8BC6EC 0%, #9599E2 33%, #4f8bbc 66%, #252fc2 100%);
  height: 50%;
  width: 200px;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  
  @media (max-width: 768px) {
    height: 29%;
  };
  @media (max-width: 425px) {
    width: 120px;
  }
`;

export const Boxtwo = styled.div`
  display: flex;
  background-color: #bef991;
  background-image: linear-gradient(45deg, #bef991 0%, #FFFB7D 33%, #ccdf7c 66%, #ffffff 100%);
  height: 50%;
  width: 200px;
  cursor: pointer;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    height: 29%;
  };
  @media (max-width: 425px) {
    width: 120px;
  }
`;

export const Boxthree = styled.div`
  display: flex;
  background-color: #FBAB7E;
  background-image: linear-gradient(45deg, #FBAB7E 0%, #F7CE68 33%, #eafb7d 66%, #ffffff 100%);
  height: 50%;
  width: 200px;
  cursor: pointer;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    height: 29%;
  };
  @media (max-width: 425px) {
    width: 120px;
  }
`;

export const Boxfour = styled.div`
  display: flex;
  background-color: #D9AFD9;
  background-image: linear-gradient(45deg, #D9AFD9 0%, #97D9E1 33%, #58c3fb 66%, #ffffff 100%);
  height: 50%;
  width: 200px;
  cursor: pointer;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    height: 29%;
  };
  @media (max-width: 425px) {
    width: 120px;
  }
`;

export const Boxfive = styled.div`
  display: flex;
  background-color: #ff58d9;
  background-image: linear-gradient(45deg, #ff58d9 0%, #EE74E1 33%, #d87aff 66%, #ffffff 100%);
  height: 50%;
  width: 200px;
  cursor: pointer;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    height: 29%;
  };
  @media (max-width: 425px) {
    width: 120px;
  }
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