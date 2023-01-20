import * as Styled from "./styles";

interface KioskCheckoutModalProps {
  handleShowKioskModal: () => void;
}
const KioskCheckoutModal = ({
  handleShowKioskModal,
}: KioskCheckoutModalProps) => {
  return (
    <div>
      <div>
        <div>
          <img src="./quiosque-icon.png" alt="" width="50px" />
        </div>
        <div>
          <h3>Quiosque 1</h3>
          <h3>R$30,00</h3>
          <input type="date" />
          <button>Alugar</button>
        </div>
        <div>
          <h4>Mais informações</h4>
          <p>Entrada: 06h00</p>
          <p>Saída: 18h00</p>
        </div>
        <p onClick={handleShowKioskModal}>X</p>
      </div>
    </div>
  );
};

export default KioskCheckoutModal;
