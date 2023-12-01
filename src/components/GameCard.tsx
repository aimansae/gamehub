import React from "react";
import { Game } from "../hooks/UseGames";
import { Card, CardBody, Heading, Image } from "@chakra-ui/react";

type Props = {
  game: Game;
};
const GameCard = ({ game }: Props) => {
  return (
    <div>
      <Card borderRadius={10} overflow='hidden'>
        <Image src={game.background_image} />
        <CardBody>
            <Heading fontSize='2xl'>{game.title}</Heading>
        </CardBody>
      </Card>
    </div>
  );
};

export default GameCard;
