import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import axios from "axios";
import UseGames from "../hooks/UseGames";
import { SimpleGrid } from "@chakra-ui/react";
import GameCard from "./GameCard";
import { Game } from "../hooks/UseGames";

type Props = {
  game: Game;
};
const GameGrid = () => {
  const { games, error } = UseGames();

  return (
    <div>
      {error && <p>{error}</p>}{" "}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        spacing={10}
        padding="10px"
      >
        {games.map((game) => (
          <GameCard key={game.id} game={game}></GameCard>
        ))}
      </SimpleGrid>
    </div>
  );
};

export default GameGrid;
