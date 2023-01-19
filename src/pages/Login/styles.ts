import styled from "styled-components";

export const BackContainer = styled.body`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #90a0d0;
`;
export const Container = styled.main`
  height: 97vh;
  width: 98vw;
  box-shadow: 0 0 10px 0 #0008;
  border-radius: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #fafafa;

  img {
    padding-bottom: 8px;
  }
`;

export const Form = styled.form`
  height: 21rem;
  width: 16rem;
  background-image: linear-gradient(#90a0d0, #b6e9f7);
  border-radius: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  input {
    width: 70%;
    height: 40px;
    border-radius: 4px;
    border: none;
    padding: 0 8px 0 8px;
    font-size: medium;
  }
  p {
    text-align: center;
    width: 80%;
    height: 28px;
    margin: 0;
    color: #ff0000;
    font-size: small;
  }
  button {
    width: 100px;
    height: 32px;
    background-color: #00d9af;
    border-radius: 8px;
    border: none;
    font-size: small;
    font-weight: 700;

    :hover {
      font-weight: 600;
      background-color: #00bbef;
      transform: scale(1.05);
      transition: all, 0.3s;
    }
  }
`;
