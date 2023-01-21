import { Button, ModalOverlay } from "../../../assets/styles/globalStyles";
import * as Styled from "./styles";

interface KioskDeleteModalProps {
  handleShowDeleteModal: () => void;
}

const KioskDeleteModal = ({ handleShowDeleteModal }: KioskDeleteModalProps) => {
  return (
    <ModalOverlay>
      <Styled.Container>
        <h3>Deseja deletar o quiosque?</h3>
        <div>
          <Button>Sim</Button>
          <Button onClick={handleShowDeleteModal}>Não</Button>
        </div>
      </Styled.Container>
    </ModalOverlay>
  );
};

export default KioskDeleteModal;
