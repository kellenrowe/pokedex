import "./Pokedex.css";
import Pokecard from "./Pokecard";


const POKEMONS = [
  { id: 4, name: "Charmander", type: "fire", base_experience: 62 },
  { id: 7, name: "Squirtle", type: "water", base_experience: 63 },
  { id: 11, name: "Metapod", type: "bug", base_experience: 72 },
  { id: 12, name: "Butterfree", type: "flying", base_experience: 178 },
  { id: 25, name: "Pikachu", type: "electric", base_experience: 112 },
  { id: 39, name: "Jigglypuff", type: "normal", base_experience: 95 },
  { id: 94, name: "Gengar", type: "poison", base_experience: 225 },
  { id: 133, name: "Eevee", type: "normal", base_experience: 65 },
];

/** 
 * Pokedex: Holds a sequence of Pokecards
 * 
 * Props: {
 * - pokemons:  array, like 
 *      [{id: 5, name: "Charmander", type="fire", base_experience: 62 }...]
 * - isWinner: a string like either: "you win" or "you lose"
 * }
 **/  

function Pokedex({ pokemons, isWinner }) {

  return (
    <div className="Pokedex-container">
      <div className="Pokedex">
        { pokemons.map( ({ id, name, type, base_experience }) => <Pokecard 
          id={id}
          name={name}
          type={type}
          baseExperience={base_experience}
          />)}
      </div>
      <h2 className="Pokedex-header">{isWinner}</h2>      
    </div>
  )
}

Pokedex.defaultProps = {
  pokemons: POKEMONS
};

export default Pokedex;
export { POKEMONS }