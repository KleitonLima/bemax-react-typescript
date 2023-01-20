import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/auth";
import * as Styled from "./styles";

const MenuHeader = () => {
  const navigate = useNavigate();
  const { logged } = useAuth();

  return (
    <Styled.BackContainer>
      <Styled.Container>
        <img src="../imgs/logobemax.png" alt="Logo Bemax" width="200px" />
        {logged ? (
          <div onClick={() => navigate("/settings/kiosks")}>Settings</div>
        ) : (
          <div onClick={() => navigate("/login")}>Login</div>
        )}
      </Styled.Container>
    </Styled.BackContainer>
  );
};

export default MenuHeader;
