import { findByRole, fireEvent, render, screen } from "@testing-library/react";
import SignUp from "./index";
import { useNavigate } from "react-router-dom";

const navigateMock = vi.fn();

describe("Testa o componente SignUp", () => {
  vi.mock("react-router-dom", () => ({
    useNavigate() {
      return navigateMock;
    },

    Link: vi.fn().mockImplementation((props) => props.children)
  }));

  test("devem haver  inputs na tela", async () => {
    render(<SignUp />);

    const inputs = await screen.findAllByRole("textbox");

    expect(inputs).toHaveLength(3);
  });

  test("devem haver inputs para nome, email e senha", async () => {
    render(<SignUp />);

    const inputName = await screen.findByPlaceholderText("insira seu nome");
    const inputEmail = await screen.findByPlaceholderText("insira seu e-mail");
    const inputPassword = await screen.findByPlaceholderText(
      "insira sua senha"
    );

    expect(inputName).toBeInTheDocument();
    expect(inputEmail).toBeInTheDocument();
    expect(inputPassword).toBeInTheDocument();
  });

  test("Deve haver um botao na tela", async () => {
    render(<SignUp />);

    const button = await screen.findByRole("button");

    expect(button).toHaveTextContent("Sign Up");
  });

  test("Deve haver um titulo 'Cadastre-se", async () => {
    render(<SignUp />);

    const title = await screen.findByRole("heading", {
      level: 2
    });

    expect(title).toHaveTextContent("Cadastre-se");
  });

  test("Deve navegar para a pagina de dashboard", async () => {
    render(<SignUp />);

    const button = await screen.findByRole("button");
    fireEvent.click(button);

    expect(navigateMock).toHaveBeenCalledTimes(1);
  });

  test("Deve haver um link para ir para a pagina de login", () => {
    render(<SignUp />);

    const link = screen.getByText("Já tem cadastro?");

    expect(link).toBeInTheDocument();
  });
});
