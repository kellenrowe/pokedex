

/** Shuffle array items in-place and return shuffled array. */
function shuffle(POKEMONS) {
  let items = POKEMONS.slice();

  for (let i = items.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * i);
    [items[i], items[j]] = [items[j], items[i]];
  }
  return items;
}

/** calc score of experience of all pokemon in hand */
// function calculateExp(deck) {
//   let score = deck.reduce(function (acc, curr) {
//     return acc + curr.base_experience;
//   }, 0);
//   return score; 
// }

export { shuffle };