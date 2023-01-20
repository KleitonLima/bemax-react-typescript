import styled from "styled-components";

export const Container = styled.div`
  width: 300px;
  height: 100px;
  display: flex;
  justify-content: space-around;
  cursor: pointer;
  box-shadow: 0px -4px 4px 0px #0004;
  border-radius: 8px;

  :hover {
    background-color: #86e1fa;
    transform: scale(1.05);
    transition: all, 0.5s;
    box-shadow: 0 0 2px 0;

  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    h3,
    p {
      margin: 8px 0 8px 0;
    }
  }
`;
