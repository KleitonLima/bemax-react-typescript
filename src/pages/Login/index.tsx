import * as Styled from "./styles";
import * as yup from "yup";
import { useAuth } from "../../contexts/auth";
import { api } from "../../services";
import { toast } from "react-hot-toast";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

interface LoginData {
  email: string;
  password: string;
}

const loginschema = yup.object().shape({
  email: yup.string().required("Email é obrigatório!"),
  password: yup
    .string()
    .required("Senha é obrigatória")
    .min(8, "A senha deve conter no mínimo 8 caracteres!")
    .matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#.])[0-9a-zA-Z$*&@#.]{8,}$/,
      "A senha deve conter pelo menos uma letra minúscula, uma letra maiúscula, um número e um carácter especial"
    ),
});

const Login = () => {
  const { login } = useAuth();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<LoginData>({ resolver: yupResolver(loginschema) });

  const handleLogin = ({ email, password }: LoginData) => {
    api
      .post("/auth", { email, password })
      .then((res) => {
        login({ token: res.data.token, user: res.data.user });
      })
      .catch((res) => {
        toast.error("Email ou senha inválidos!");
      });
  };

  return (
    <Styled.BackContainer>
      <Styled.Container>
        <Styled.Form onSubmit={handleSubmit(handleLogin)}>
          <img src="./imgs/logobemax.png" alt="Logo Bemax" width="200px" />
          <input
            type="text"
            {...register("email")}
            placeholder="Digite seu email..."
          />
          <input
            type="password"
            {...register("password")}
            placeholder="Digite sua senha..."
          />
          <p>{errors.email?.message || errors.password?.message}</p>
          <button type="submit">Entrar</button>
        </Styled.Form>
      </Styled.Container>
    </Styled.BackContainer>
  );
};

export default Login;
