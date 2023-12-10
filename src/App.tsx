import "./App.css";
import { Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { Genre } from "./hooks/useGenres";
import { useState } from "react";
import PlaftormSelector from "./components/PlaftormSelector";
import { Platform } from "./hooks/useGames";

export type GameQuery = {
  genre: Genre | null;
  platform: Platform | null
};
function App() {
const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery)
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area="nav">
        <Navbar />
      </GridItem>
      <Show above="lg">
        <GridItem paddingX={5} area="aside">
          <GenreList
            selectedGenre={gameQuery.genre}
            onSelectedGenre={(genre) => setGameQuery({...gameQuery, genre})}
          />
        </GridItem>
      </Show>
      <GridItem area="main">
        <PlaftormSelector
          onSelectPlatform={(platform) => setGameQuery({...gameQuery, platform})}
          selectedPlatform={gameQuery.platform}
        />
        <GameGrid
          gameQuery={gameQuery}
        />
      </GridItem>
    </Grid>
  );
}

export default App;
