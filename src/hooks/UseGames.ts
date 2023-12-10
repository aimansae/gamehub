//custom hook for fetching games
import useData from "./useData";
import { Genre } from "./useGenres";

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


const UseGames = (selectedGenre: Genre | null) =>useData<Game>('/games', {params: {genres:selectedGenre?.id}}, [selectedGenre?.id]) 
  

export default UseGames;
