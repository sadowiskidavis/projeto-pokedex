const BASE_URL = 'https://pokeapi.co/api/v2/pokemon';

// Bulbasaur, Charmander e Squirtle
export const idsIniciais = [1, 4, 7];

export type Pokemon = {
  id: number;
  nome: string;
  imagem: string;
  tipos: string[];
  altura: number; // metros
  peso: number; // kg
};

export async function buscarPokemon(id: number): Promise<Pokemon> {
  const resposta = await fetch(`${BASE_URL}/${id}`);
  const dados = await resposta.json();

  return {
    id: dados.id,
    nome: dados.name,
    imagem: dados.sprites.other['official-artwork'].front_default,
    tipos: dados.types.map((t: { type: { name: string } }) => t.type.name),
    altura: dados.height / 10,
    peso: dados.weight / 10,
  };
}
