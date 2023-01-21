import { useState } from "react";
import KioskCard from "../../components/KioskCard";
import KioskCheckoutModal from "../../components/Modals/KioskCheckoutModal";
import MenuHeader from "../../components/MenuHeader";
import { Container, Content } from "../../assets/styles/globalStyles";
import * as Styled from "./styles";

const Home = () => {
  const [showCheckoutModal, setShowCheckoutModal] = useState<boolean>(false);

  const handleShowCheckoutModal = () => {
    setShowCheckoutModal(!showCheckoutModal);
  };

  return (
    <Container>
      <MenuHeader />
      <Content>
        <KioskCard handleShowKioskModal={handleShowCheckoutModal} />
        <KioskCard handleShowKioskModal={handleShowCheckoutModal} />
        <KioskCard handleShowKioskModal={handleShowCheckoutModal} />
        <KioskCard handleShowKioskModal={handleShowCheckoutModal} />
        <KioskCard handleShowKioskModal={handleShowCheckoutModal} />
        <KioskCard handleShowKioskModal={handleShowCheckoutModal} />
        <KioskCard handleShowKioskModal={handleShowCheckoutModal} />
        <KioskCard handleShowKioskModal={handleShowCheckoutModal} />
        <KioskCard handleShowKioskModal={handleShowCheckoutModal} />
        <KioskCard handleShowKioskModal={handleShowCheckoutModal} />
        <KioskCard handleShowKioskModal={handleShowCheckoutModal} />
        <KioskCard handleShowKioskModal={handleShowCheckoutModal} />
        <KioskCard handleShowKioskModal={handleShowCheckoutModal} />
        <KioskCard handleShowKioskModal={handleShowCheckoutModal} />
        <KioskCard handleShowKioskModal={handleShowCheckoutModal} />
        <KioskCard handleShowKioskModal={handleShowCheckoutModal} />
        <KioskCard handleShowKioskModal={handleShowCheckoutModal} />
        <KioskCard handleShowKioskModal={handleShowCheckoutModal} />
        <KioskCard handleShowKioskModal={handleShowCheckoutModal} />
        <KioskCard handleShowKioskModal={handleShowCheckoutModal} />
      </Content>
      {showCheckoutModal && (
        <KioskCheckoutModal handleShowKioskModal={handleShowCheckoutModal} />
      )}
    </Container>
  );
};

export default Home;
