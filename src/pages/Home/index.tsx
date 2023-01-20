import { useState } from "react";
import KioskCard from "../../components/KioskCard";
import KioskCheckoutModal from "../../components/KioskCheckoutModal";
import MenuHeader from "../../components/MenuHeader";
import * as Styled from "./styles";

const Home = () => {
  const [showKioskModal, setShowKioskModal] = useState<boolean>(false);

  const handleShowKioskModal = () => {
    setShowKioskModal(!showKioskModal);
  };

  return (
    <Styled.Container>
      <MenuHeader />
      <Styled.Content>
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
      </Styled.Content>
      {showKioskModal && (
        <KioskCheckoutModal handleShowKioskModal={handleShowKioskModal} />
      )}
    </Styled.Container>
  );
};

export default Home;
