import { fireEvent, render, screen } from "@testing-library/react";
import Login from "./index.tsx";
import { Link } from "react-router-dom";

const navigateMock = vi.fn();

describe("testa o component de Login", () => {
  vi.mock("react-router-dom", () => ({
    useNavigate() {
      return navigateMock;
    },
    Link: vi.fn().mockImplementation((props) => props.children)
  }));

  test("deve haver um título escrito 'Sign In'", async () => {
    render(<Login />);

    const title = await screen.findByRole("heading", {
      name: "Sign In"
    });

    expect(title).toBeInTheDocument();
  });

  test("devem haver dois imputs na minha tela", async () => {
    render(<Login />);

    const inputs = await screen.findAllByRole("textbox");

    expect(inputs).toHaveLength(2);
  });

  test("Deve haver um botão", async () => {
    render(<Login />);

    const button = await screen.findByRole("button");

    expect(button.textContent).toBe("Login");
  });

  test("Deve haver um input de email", async () => {
    render(<Login />);

    const inputEmail = await screen.findByPlaceholderText("insira seu e-mail");
    expect(inputEmail).toBeInTheDocument();
  });

  test("Deve haver um input de senha", async () => {
    render(<Login />);

    const inputSenha = await screen.findByPlaceholderText("insira sua senha");
    expect(inputSenha).toBeInTheDocument();
  });

  //Simular o click nos botões
  test("O botão deve executar a função", async () => {
    render(<Login />);

    const button = await screen.findByRole("button");
    fireEvent.click(button);

    expect(navigateMock).toBeCalledTimes(1);
  });

  test("Deve haver um link para a pagina de SignUp", async () => {
    render(<Login />);

    const link = screen.findByText("Não possui cadastro?");

    expect(link).toBeInTheDocument;
  });
});
