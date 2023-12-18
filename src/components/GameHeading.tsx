import { Heading } from '@chakra-ui/react'
import React from 'react'
import { GameQuery } from '../App'
type Props = {
    gameQuery: GameQuery
}
const GameHeading = ({gameQuery}:Props) => {
    const heading = `${gameQuery.platform?.name || ''} ${gameQuery.genre?.name || ''} Games`

  return (


    <div>
      <Heading as='h1' textAlign='left' marginY={5} fontSize='5xl'>{heading}</Heading>
    </div>
  )
}

export default GameHeading
