import { ReactNode } from "react";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./auth";
import { KiosksProvider } from "./kiosk";

interface ProvidersProps {
  children: ReactNode;
}
const Providers = ({ children }: ProvidersProps) => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <KiosksProvider>{children}</KiosksProvider>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default Providers;
