import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import axios from "axios";
const GameGrid = () => {
  type Game = {
    id: number;
    title: string; // name
  };

//   type FetchGamesResponse = {
//     // count: number;
//     results: Game[];
//   };

  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    // apiClient.get(/games)
    axios
      .get<Game[]>("https://jsonplaceholder.typicode.com/posts")
      .then((res) => setGames(res.data))
      .catch((error) => setError(error.message));
  }, []);

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
