import Pokecard from "./Pokecard";

function Pokedex({ pokemons }) {
  return (
    <div>
      { pokemons.map( p => <Pokecard 
        id={p.id}
        name={p.name}
        type={p.type}
        baseExperience={p.base_experience}
        />)}
    </div>
  )
}

export default Pokedex;