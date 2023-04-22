import { useState } from "react";

export const Search = ({ searchPokemon }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    searchPokemon(searchTerm);
  };

  const handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      handleSearch();
    }
  };

  return (
    <div
      className="searchContainer"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <input
        type="text"
        placeholder="Search for Pokemons..."
        style={{
          padding: "10px 20px",
          border: "none",
          outline: "none",
          borderRadius: "5px",
          fontSize: "16px",
          width: "100%",
          boxShadow: "0 3px 7px rgba(179, 179, 179, 0.5)",
        }}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <i
        className="fa-solid fa-magnifying-glass"
        style={{ position: "absolute", right: "20px", color: "#777" }}
      ></i>
    </div>
  );
};
