import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/auth";
import * as Styled from "./styles";

const MenuHeader = () => {
  const navigate = useNavigate();
  const { logged } = useAuth();

  return (
    <Styled.BackContainer>
      <Styled.Container>
        <img src="../imgs/logobemax.png" alt="Logo Bemax" />
        <div>
          <p onClick={() => navigate("/")}>Home</p>
          {!logged ? (
            <div>
              <p onClick={() => navigate("/settings/kiosks")}>Settings</p>
            </div>
          ) : (
            <div>
              <p onClick={() => navigate("/login")}>Login</p>
            </div>
          )}
        </div>
      </Styled.Container>
    </Styled.BackContainer>
  );
};

export default MenuHeader;
