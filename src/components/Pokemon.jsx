export const Pokemon = ({ pokemon }) => {
  return (
    <div
      className="pokeCard"
      style={{ textAlign: "center", maxWidth: "400px", margin: "0 auto" }}
    >
      <div className="imgContainer">
        <img
          style={{ height: "100%", width: "100%" }}
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
          alt={pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
          title={pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
        />
      </div>
      <p style={{ margin: "10px auto", letterSpacing: "1px" }}>
        #{pokemon.id.toString().padStart(4, "0")}
      </p>
      <h3 style={{ letterSpacing: "1.5px", marginBottom: "10px" }}>
        {pokemon.name}
      </h3>
      <p style={{ textTransform: "capitalize", letterSpacing: "1px" }}>
        Type:{" "}
        {pokemon.types.map((pokemonType) => pokemonType.type.name).join("/")}
      </p>
    </div>
  );
};
