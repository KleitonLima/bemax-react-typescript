import * as Styled from "./styles";
import MenuHeader from "../../components/MenuHeader";
import KioskSettingsCard from "../../components/KioskSettingsCard";
import { Container, Content } from "../../assets/styles/globalStyles";
import { useState } from "react";
import KioskEditModal from "../../components/Modals/KioskEditModal";
import KioskDeleteModal from "../../components/Modals/KioskDeleteModal";

const Settings = () => {
  const [showEditModal, setShowEditModal] = useState<boolean>(false);
  const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false);

  const handleShowEditModal = () => {
    setShowEditModal(!showEditModal);
  };
  const handleShowDeleteModal = () => {
    setShowDeleteModal(!showDeleteModal);
  };
  return (
    <Container>
      <MenuHeader />
      <Content>
        <Styled.ContainerCard>
          <h2>+</h2>
          <p>Adicionar quiosque</p>
        </Styled.ContainerCard>
        <KioskSettingsCard
          handleShowEditModal={handleShowEditModal}
          handleShowDeleteModal={handleShowDeleteModal}
        />
        <KioskSettingsCard
          handleShowEditModal={handleShowEditModal}
          handleShowDeleteModal={handleShowDeleteModal}
        />
        <KioskSettingsCard
          handleShowEditModal={handleShowEditModal}
          handleShowDeleteModal={handleShowDeleteModal}
        />
        <KioskSettingsCard
          handleShowEditModal={handleShowEditModal}
          handleShowDeleteModal={handleShowDeleteModal}
        />
        <KioskSettingsCard
          handleShowEditModal={handleShowEditModal}
          handleShowDeleteModal={handleShowDeleteModal}
        />
        <KioskSettingsCard
          handleShowEditModal={handleShowEditModal}
          handleShowDeleteModal={handleShowDeleteModal}
        />
      </Content>
      {showEditModal && (
        <KioskEditModal handleShowEditModal={handleShowEditModal} />
      )}
      {showDeleteModal && (
        <KioskDeleteModal handleShowDeleteModal={handleShowDeleteModal} />
      )}
    </Container>
  );
};

export default Settings;
