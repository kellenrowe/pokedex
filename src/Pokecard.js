
function Pokecard({ id, name, type, baseExperience }) {
  return (
    <div>
      <h3>{ name}</h3>
      <img src={ `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png` } alt={ name}></img>
      <p>Type: {type}</p>
      <p>Experience: {baseExperience} </p>

    </div>
  );
}

export default Pokecard;