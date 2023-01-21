import styled from "styled-components";

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
