import styled from "styled-components";

export const Container = styled.div`
  width: 300px;
  height: 100px;
  display: flex;
  justify-content: space-around;
  cursor: pointer;
  box-shadow: 0px -4px 4px 0px #0004;
  border-radius: 8px;
  position: relative;
  top: 0;
  transition: top ease 1s;

  :hover {
    top: -20px;
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
