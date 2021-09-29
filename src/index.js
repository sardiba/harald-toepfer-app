import { getPokemonList } from './api.js';
import { getPokedexHtml } from './pokedex.js';
import { render } from './render.js';

const pokemonList = await getPokemonList({ limit: 20 });
render(getPokedexHtml({ pokemonList }));
