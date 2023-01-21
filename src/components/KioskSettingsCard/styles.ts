import styled from "styled-components";

export const ContainerCard = styled.div`
  width: 300px;
  height: 200px;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  box-shadow: 0px 4px 4px 0px #0004;
  border-radius: 8px;
  position: relative;
  bottom: 0;
  transition: bottom ease 1s;

  :hover {
    bottom: -20px;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;

    img {
      position: absolute;
      margin-bottom: 20px;
    }

    h3,
    p {
      margin: 8px 0 8px 0;
    }
  }
`;
