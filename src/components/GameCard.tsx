import React from 'react';
import {Game} from "../hooks/useGames";
import {Card, CardBody, Heading, HStack, Image} from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";

interface GameCardProps {
    game: Game;
}

const GameCard = ({game}: GameCardProps) => {
    return (
        <Card borderRadius={"10px"} overflow="hidden">
            <Image overflow="hidden" src={game.background_image} alt={game.name} borderRadius="10px"/>
            <CardBody display="flex" flexDirection="column" justifyContent="space-between">
                <Heading fontSize={"2xl"}>{game.name}</Heading>
                <HStack justifyContent="space-between">
                    <PlatformIconList platforms={game.parent_platforms.map(p => p.platform)}/>
                    <CriticScore score={game.metacritic}/>
                </HStack>
            </CardBody>
        </Card>
    );
};

export default GameCard;