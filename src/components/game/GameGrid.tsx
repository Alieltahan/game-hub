import React from 'react';
import {SimpleGrid, Text} from "@chakra-ui/react";
import GameCard from "./GameCard";
import GameCardContainer from "./GameCardComponents";
import GameCardSkeleton from "./GameCardSkeleton";
import useGames from "../../hooks/useGames";

const GameGrid = () => {
    const {data: games, error, isLoading} = useGames();
    const skeletonArray = Array(6).fill(1);
    if (error) {
        return <Text colorScheme="red">error</Text>
    }

    return (
        <SimpleGrid columns={{sm: 2, md: 2, lg: 3}} spacing={3} padding={10}>
                {isLoading && skeletonArray.map((_sk, index) =>
                    <GameCardContainer>
                        <GameCardSkeleton key={index} />
                    </GameCardContainer>)}
                {games.map((game) =>
                    <GameCardContainer>
                        <GameCard key={game.id} game={game}/>
                    </GameCardContainer>)}
        </SimpleGrid>
    );
};

export default GameGrid;