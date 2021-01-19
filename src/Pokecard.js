import "./Pokecard.css";

/** 
 * Pokecard: A single Pokemon card detail
 * 
 * Props: {
 * - id (int)
 * - name (String)
 * - type (String)
 * - baseExperience (int)
 * }
 **/  

 const POKE_BASE_URL =
   "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon";

function Pokecard({ id, name, type, baseExperience }) {
  return (
    <div className="Pokecard">
      <h3 className="Pokecard-header">{ name }</h3>
      <img 
        src={ `${POKE_BASE_URL}/${id}.png` } 
        alt={ name }
      />
      <p>Type: {type}</p>
      <p>Experience: {baseExperience} </p>

    </div>
  );
}

export default Pokecard;