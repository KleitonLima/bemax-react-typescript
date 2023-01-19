import {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
} from "react";
import { api } from "../../services";
import { Kiosk } from "../../types";
import { useAuth } from "../auth";

interface KiosksProviderProps {
  children: ReactNode;
}

interface KiosksProviderData {
  kiosks: Kiosk[];
  handleGetKiosks: () => void;
}

const KiosksContext = createContext<KiosksProviderData>(
  {} as KiosksProviderData
);

export const KiosksProvider = ({ children }: KiosksProviderProps) => {
  const { logged } = useAuth();
  const [kiosks, setKiosks] = useState<Kiosk[]>([]);

  const handleGetKiosks = () => {
    const token = localStorage.getItem("token");
    const headers = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    api.get("/kiosks", headers).then((res) => setKiosks(res.data));
  };

  useEffect(() => {
    if (logged) handleGetKiosks();
  }, [logged]);
  return (
    <KiosksContext.Provider value={{ kiosks, handleGetKiosks }}>
      {children}
    </KiosksContext.Provider>
  );
};

export const useKiosks = () => useContext(KiosksContext);
