import { Button } from "../../assets/styles/globalStyles";
import * as Styled from "./styles";

interface KioskSettingsCardProps {
  handleShowEditModal: () => void;
  handleShowDeleteModal: () => void;
}

const KioskSettingsCard = ({
  handleShowEditModal,
  handleShowDeleteModal,
}: KioskSettingsCardProps) => {
  return (
    <Styled.ContainerCard>
      <div>
        <img src="../quiosque-icon.png" alt="" width="50px" />
      </div>
      <div>
        <h3>Q1</h3>
      </div>
      <div>
        <p>Diária R$30,00</p>
      </div>
      <div>
        <p>Quantidade: 10</p>
      </div>
      <div>
        <Button onClick={handleShowEditModal}>Editar</Button>
        <Button onClick={handleShowDeleteModal}>Excluir</Button>
      </div>
    </Styled.ContainerCard>
  );
};

export default KioskSettingsCard;
