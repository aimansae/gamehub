import useData from "../hooks/useData";
import useGenres, { Genre } from "../hooks/useGenres";

const GenreList = () => {
  const { data} = useGenres();
  return (
    <div>
      <ul>
        {data.map((genre) => (
          <li key={genre.id}>{genre.name}</li>
        ))}
      </ul>
      <p>Check Area</p>
    </div>
  );
};

export default GenreList;
