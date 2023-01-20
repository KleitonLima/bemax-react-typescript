import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { User } from "../../types";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { api } from "../../services";

interface LoginParams {
  token: string;
  user: User;
}
interface AuthProviderData {
  logged: boolean;
  login: (params: LoginParams) => void;
  logout: () => void;
}
interface AuthProviderProps {
  children: ReactNode;
}

const AuthContext = createContext({} as AuthProviderData);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [logged, setLogged] = useState<boolean>(false);
  const navigate = useNavigate();

  const login = ({ token, user }: LoginParams) => {
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(user));
    setLogged(true);
    navigate("/");
    toast.success("Bem vindo!");
  };

  const logout = () => {
    localStorage.clear();
    setLogged(false);
    navigate("/login");
  };

  const checkTokenExpiration = () => {
    const user = JSON.parse(localStorage.getItem("user") || "");
    const token = localStorage.getItem("token");

    const headers = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    api
      .get(`/users/${user.id}`, headers)
      .then(() => {
        setLogged(true);
        navigate("/");
      })
      .catch(() => {
        logout();
        toast.error("Sessão expirada! Faça login novamente!");
      });
  };

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) checkTokenExpiration();
  }, []);

  return (
    <AuthContext.Provider value={{ logged, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
