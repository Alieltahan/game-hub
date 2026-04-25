import React from 'react';
import {SimpleGrid, Text} from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";

const GameGrid = () => {
    const {games, error} = useGames();

    if (error) {
        return <Text colorScheme="red">error</Text>
    }

    return (
        <SimpleGrid columns={{sm: 1, md: 2, lg: 3}} spacing={5} padding={10}>
            {games.map(game => <GameCard key={game.id} game={game}/>)}
        </SimpleGrid>
    );
};

export default GameGrid;