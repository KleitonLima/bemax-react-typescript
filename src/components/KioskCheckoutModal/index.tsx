import { Button } from "../../services/styles/globalStyles";
import * as Styled from "./styles";

interface KioskCheckoutModalProps {
  handleShowKioskModal: () => void;
}
const KioskCheckoutModal = ({
  handleShowKioskModal,
}: KioskCheckoutModalProps) => {
  return (
    <Styled.BackContainer>
      <Styled.Container>
        <div>
          <img src="./quiosque-icon.png" alt="" width="50px" />
        </div>
        <div>
          <h3>Quiosque 1</h3>
          <h3>R$30,00</h3>
          <input type="date" />
          <Button>Alugar</Button>
        </div>
        <div>
          <h4>Mais informações</h4>
          <p>Entrada: 06h00</p>
          <p>Saída: 18h00</p>
        </div>
        <Styled.CloseContainerModal>
          <p onClick={handleShowKioskModal}>X</p>
        </Styled.CloseContainerModal>
      </Styled.Container>
    </Styled.BackContainer>
  );
};

export default KioskCheckoutModal;
