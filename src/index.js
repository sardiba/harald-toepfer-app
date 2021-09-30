import { getToepferList } from "./api.js";
import { getPokedexHtml } from "./pokedex.js";
import { render } from "./render.js";

const toepferList = await getToepferList();
render(getPokedexHtml({ toepferList }));
