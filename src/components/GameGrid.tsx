import React from 'react';
import {Text} from "@chakra-ui/react";
import UseGames from "../hooks/useGames";

const GameGrid = () => {
    const {games, error} = UseGames();

    if (error) {
        return <Text colorScheme="red">error</Text>
    }
    
    return (
        <ul>
            {games.map(game => <li key={game.id}>{game.name}</li>)}
        </ul>
    );
};

export default GameGrid;