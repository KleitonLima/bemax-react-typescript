import styled from "styled-components";

export const Button = styled.button`
  width: 100px;
  height: 32px;
  background-color: #00d9af;
  border-radius: 8px;
  border: none;
  font-size: medium;
  font-weight: 700;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;

  :hover {
    background-color: #00bbef;
    transform: scale(1.07);
    transition: all, 0.5s 0s;
    box-shadow: 0 0 2px 0;
  }
`;
