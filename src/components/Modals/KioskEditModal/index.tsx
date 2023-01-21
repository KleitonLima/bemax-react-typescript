import { ModalOverlay } from "../../../assets/styles/globalStyles";
import * as Styled from "./styles";

interface KioskEditModalProps {
  handleShowEditModal: () => void;
}

const KioskEditModal = ({ handleShowEditModal }: KioskEditModalProps) => {
  return (
    <ModalOverlay>
      <Styled.Container>
        <p onClick={() => handleShowEditModal}>X</p>
      </Styled.Container>
    </ModalOverlay>
  );
};

export default KioskEditModal;
