import styled from "styled-components";

export const BackContainer = styled.section`
  position: fixed;
  height: 100vh;
  width: 100vw;
  background-color: #0009;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  height: 200px;
  width: 500px;
  background-color: #fff;
  display: flex;
  justify-content: space-around;
  border-radius: 8px;

  div {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;

    p,
    h3,
    h4 {
      margin: 0;
    }
  }
`;

export const CloseContainerModal = styled.p`
  cursor: pointer;

  p {
    margin: 0;
  }
`;
