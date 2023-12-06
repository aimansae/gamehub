//custom hook for fetching games

import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

export type Platform = {
  id:number,
  name:string,
  slug:string,

}
export type Game = {
  id: number;
  name: string;
  background_image:string,
  title:string,
  parent_platforms:{platform: Platform}[],
  metacritic:number,
  
};

type FetchGameResponse = {
  count: number;
  results: Game[];
};

const UseGames = () => {
  const [games, setGame] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {

    const controller = new AbortController()
    apiClient
      .get<FetchGameResponse>("/games", {signal:controller.signal})
      .then((res) => setGame(res.data.results))
      .catch((err) => {
        if (err instanceof CanceledError) return
        setError(err.message)});

      return () => controller.abort()
  }, []);

  return {games, error}
};

export default UseGames;
