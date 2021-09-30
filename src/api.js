export const getToepferList = async () => {
  // TODO: fetch harry potter list
  const harryPotter = await fetch("http://hp-api.herokuapp.com/api/characters");
  const characterList = await harryPotter.json();
  console.log(characterList);
  return characterList;
};

export const getToepfer = async ({ name } = {}) => {
  const character = await getToepferList();
  const findName = name;
  const characterName = character.find((theName) => {
    return theName.name.value === findName ?? "no such character";
  });
  console.log();
};
