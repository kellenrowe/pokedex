import Pokedex, { POKEMONS } from "./Pokedex";
import { shuffle } from "./helpers";


/** Pokegame: holds two Pokedex hands
 *  no props
 *  returns two shuffled hands of 4 Pokecards each
 *  
 */
function Pokegame() {
  
  /** calc score of experience of all pokemon in hand */
  function calculateExp(deck) {
    let score = deck.reduce(function (acc, curr) {
      return acc + curr.base_experience;
    }, 0);
    return score; 
  }

  let shuffledPokes = shuffle(POKEMONS)
  let deck1 = shuffledPokes.slice(0,4);
  let deck2 = shuffledPokes.slice(4);
  let deck1Score = calculateExp(deck1);
  let deck2Score = calculateExp(deck2);
  let isDeck1Winner = deck1Score > deck2Score
  return (
    <div>
      <div className="left">
        <Pokedex pokemons={deck1}
          isWinner={isDeck1Winner ? "This hand WINS!" : "This hand loses... you suck."} />
      </div>
      <div className="right">
        <Pokedex pokemons={deck2}
          isWinner={isDeck1Winner ? "This hand loses... you suck." : "This hand WINS!"}/>
      </div>
    </div>
  );
}

export default Pokegame;