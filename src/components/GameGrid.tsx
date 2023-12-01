import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import axios from "axios";
import UseGames from "../hooks/UseGames";
const GameGrid = () => {
  const { games, error } = UseGames();

  return (
    <div>
      {error && <p>{error}</p>}{" "}
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default GameGrid;
