import { useState } from "react";
import { Button } from "../../services/styles/globalStyles";
import { Kiosk } from "../../types";
import KioskCheckoutModal from "../KioskCheckoutModal";
import * as Styled from "./styles";

interface KioskCardProps {
  // kiosk: Kiosk;
  handleShowKioskModal: () => void;
}

const KioskCard = ({ handleShowKioskModal }: KioskCardProps) => {
  return (
    <Styled.Container onClick={handleShowKioskModal}>
      <div>
        <img src="./quiosque-icon.png" alt="" width="50px" />
      </div>
      <div>
        <h3>Q1</h3>
        <p>
          Diária <br /> R$30,00
        </p>
      </div>
      <div>
        <Button size="small">Alugar</Button>
      </div>
    </Styled.Container>
  );
};

export default KioskCard;
