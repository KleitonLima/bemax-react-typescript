import { Kiosk } from "../../types";
import * as Styled from "./styles";

interface KioskCardProps {
  kiosk: Kiosk;
}

const KioskCard = () => {
  return (
    <div>
      <h3>Q1</h3>
      <h3>R$30,00</h3>
      <input type="date" />
      <button>Alugar</button>
    </div>
  );
};

export default KioskCard;
