import React from 'react';
import {SimpleGrid, Text} from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardContainer from "./GameCardComponents";
import GameCardSkeleton from "./GameCardSkeleton";

const GameGrid = () => {
    const {data: games, error, isLoading} = useGames();
    const skeletonArray = Array().fill(6);
    if (error) {
        return <Text colorScheme="red">error</Text>
    }

    return (
        <SimpleGrid columns={{sm: 1, md: 2, lg: 3}} spacing={3} padding={10}>
            <GameCardContainer>
                {isLoading && skeletonArray.map(sk => <GameCardSkeleton key={sk} />)}
                {games.map(game => <GameCard key={game.id} game={game}/>)}
            </GameCardContainer>
        </SimpleGrid>
    );
};

export default GameGrid;