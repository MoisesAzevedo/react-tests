import { render, screen } from "@testing-library/react";
import Dashboard from ".";
import { fetchPokemonList } from "../services/PokemonService";
import { faker } from "@faker-js/faker";

const mockFetchListPokemonFn = vi
  .fn(fetchPokemonList)
  .mockImplementation(async () => {
    return [
      {
        id: 1,
        name: "Pikaxu",
        image: faker,
        type: "Eletrico"
      }
    ];
  });

describe("testa o component Dashboard", () => {
  test("Deve haver um título na página", async () => {
    render(<Dashboard />);

    const title = await screen.findByRole("heading");

    expect(title).toHaveTextContent("Dashboard");
  });

  test("Deve haver uma lista com 10 pokemons", async () => {
    render(<Dashboard />);

    const items = await screen.findAllByRole("listitem");

    expect(items).toHaveLength(10);
  });
});
