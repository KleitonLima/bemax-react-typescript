import styled, { css } from "styled-components";

interface GlobalStyleProps {
  size?: "small" | "large";
}

export const Button = styled.button<GlobalStyleProps>`
  ${({ size }) => css`
    width: 100px;
    height: 32px;
    background-color: #00d9af;
    border-radius: 8px;
    border: none;
    font-size: medium;
    font-weight: 700;
    cursor: pointer;
    margin: 8px;
    font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
      sans-serif;

    ${size === "small" &&
    css`
      width: 60px;
    `}

    :hover {
      background-color: #00bbef;
      transform: scale(1.07);
      transition: all, 0.5s 0s;
      box-shadow: 0 0 2px 0;
    }
  `}
`;

export const ModalOverlay = styled.section`
  position: fixed;
  height: 100vh;
  width: 100vw;
  background-color: #0009;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  flex-direction: column;
`;

export const Content = styled.main`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 48px;
  padding: 32px;
  box-sizing: border-box;
`;
