import * as Styled from "./styles";
import MenuHeader from "../../components/MenuHeader";
import KioskSettingsCard from "../../components/KioskSettingsCard";
import { Container, Content } from "../../services/styles/globalStyles";

const Settings = () => {
  return (
    <Container>
      <MenuHeader />
      <Content>
        <Styled.ContainerCard>
          <h2>+</h2>
          <p>Adicionar quiosque</p>
        </Styled.ContainerCard>
        <KioskSettingsCard />
        <KioskSettingsCard />
        <KioskSettingsCard />
        <KioskSettingsCard />
        <KioskSettingsCard />
        <KioskSettingsCard />
        <KioskSettingsCard />
        <KioskSettingsCard />
        <KioskSettingsCard />
        <KioskSettingsCard />
        <KioskSettingsCard />
        <KioskSettingsCard />
        <KioskSettingsCard />
        <KioskSettingsCard />
        <KioskSettingsCard />
      </Content>
    </Container>
  );
};

export default Settings;
