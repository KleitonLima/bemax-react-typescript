import { useState } from "react";
import KioskCard from "../../components/KioskCard";
import KioskCheckoutModal from "../../components/KioskCheckoutModal";
import MenuHeader from "../../components/MenuHeader";
import { Container, Content } from "../../services/styles/globalStyles";
import * as Styled from "./styles";

const Home = () => {
  const [showKioskModal, setShowKioskModal] = useState<boolean>(false);

  const handleShowKioskModal = () => {
    setShowKioskModal(!showKioskModal);
  };

  return (
    <Container>
      <MenuHeader />
      <Content>
        <KioskCard handleShowKioskModal={handleShowKioskModal} />
        <KioskCard handleShowKioskModal={handleShowKioskModal} />
        <KioskCard handleShowKioskModal={handleShowKioskModal} />
        <KioskCard handleShowKioskModal={handleShowKioskModal} />
        <KioskCard handleShowKioskModal={handleShowKioskModal} />
        <KioskCard handleShowKioskModal={handleShowKioskModal} />
        <KioskCard handleShowKioskModal={handleShowKioskModal} />
        <KioskCard handleShowKioskModal={handleShowKioskModal} />
        <KioskCard handleShowKioskModal={handleShowKioskModal} />
        <KioskCard handleShowKioskModal={handleShowKioskModal} />
        <KioskCard handleShowKioskModal={handleShowKioskModal} />
        <KioskCard handleShowKioskModal={handleShowKioskModal} />
        <KioskCard handleShowKioskModal={handleShowKioskModal} />
        <KioskCard handleShowKioskModal={handleShowKioskModal} />
        <KioskCard handleShowKioskModal={handleShowKioskModal} />
        <KioskCard handleShowKioskModal={handleShowKioskModal} />
        <KioskCard handleShowKioskModal={handleShowKioskModal} />
        <KioskCard handleShowKioskModal={handleShowKioskModal} />
        <KioskCard handleShowKioskModal={handleShowKioskModal} />
        <KioskCard handleShowKioskModal={handleShowKioskModal} />
      </Content>
      {showKioskModal && (
        <KioskCheckoutModal handleShowKioskModal={handleShowKioskModal} />
      )}
    </Container>
  );
};

export default Home;
