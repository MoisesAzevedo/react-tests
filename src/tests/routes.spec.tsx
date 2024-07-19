import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import MainRoutes from "../routes";

describe("testa o component MainRoutes", () => {
  //testando a pagia "/" do arquivo de rotas
  test("Deve renderizar a página de login", async () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <MainRoutes />
      </MemoryRouter>
    );

    const title = await screen.findByRole("heading", {
      name: "Sign In"
    });

    expect(title).toBeInTheDocument;
  });

  test("Deve renderizar a página de dashboard", async () => {
    render(
      <MemoryRouter initialEntries={["/dashboard"]}>
        <MainRoutes />
      </MemoryRouter>
    );

    const title = await screen.findByRole("heading", {
      name: "Dashboard"
    });

    expect(title).toBeInTheDocument;
  });

  test("Deve renderizar a página de sign up", async () => {
    render(
      <MemoryRouter initialEntries={["/sign-up"]}>
        <MainRoutes />
      </MemoryRouter>
    );

    const title = await screen.findByRole("heading", {
      name: "Cadastre-se"
    });

    expect(title).toBeInTheDocument;
  });

  test("Deve renderizar a pagina de erro 404", async () => {
    render(
      <MemoryRouter initialEntries={["/qualquerrota"]}>
        <MainRoutes />
      </MemoryRouter>
    );

    const title = await screen.getByText("404 Page Not Found");

    expect(title).toBeInTheDocument;
  });
});
