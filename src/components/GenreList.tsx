import { Button, HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import useData from "../hooks/useData";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

type Props = {
  onSelectedGenre : (genre:Genre) => void 
  selectedGenre: Genre | null
}

const GenreList = ({onSelectedGenre,selectedGenre}: Props) => {
  const { data, isLoading, error} = useGenres();
  if (isLoading) return <Spinner />

  if (error) return null
  return (
    <div>
      <List>
        {data.map((genre) => (
          <ListItem key={genre.id} paddingY='5px'>
            <HStack>
              <Image boxSize='32px' borderRadius={8} src={genre.image_background}></Image>
            <Button fontWeight={ genre.id === selectedGenre?.id? 'bold': 'normal'} onClick={() =>onSelectedGenre(genre)}  variant='link' fontSize='lg'>{genre.name}</Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default GenreList;
