import { Button } from "../../services/styles/globalStyles";
import * as Styled from "./styles";

const KioskSettingsCard = () => {
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
        <Button>Editar</Button>
        <Button>Excluir</Button>
      </div>
    </Styled.ContainerCard>
  );
};

export default KioskSettingsCard;
