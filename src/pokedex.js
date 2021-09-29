export const getPokedexHtml = ({ pokemonList = [] }) => {
  // TODO: loop over pokemon and render cards
  return `
    <section class="cards">
      <article class="card">
        <h2>Ditto</h2>
        <dl>
          <dt>Height</dt>
          <dd>3</dd>
          <dt>Weight</dt>
          <dd>40</dd>
        </dl>
      </article>
    </section>
  `;
};
