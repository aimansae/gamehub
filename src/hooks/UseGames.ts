import axios, { CanceledError } from "axios";
import { useState, useEffect } from "react";

export type Game = {
  id: number;
  title: string; // name
};

//   type FetchGamesResponse = {
//     // count: number;
//     results: Game[];
//   };

const UseGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    // apiClient.get(/games)
    axios
      .get<Game[]>("https://jsonplaceholder.typicode.com/posts", {
        signal: controller.signal,
      })
      .then((res) => setGames(res.data))
      .catch((error) => {
        if (error instanceof CanceledError) return;
        setError(error.message);
      });
    return () => controller.abort();
  }, []);

  return { games, error };
};

export default UseGames;
