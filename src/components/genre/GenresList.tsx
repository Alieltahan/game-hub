import React from 'react';
import {HStack, Image, List, ListItem, Text} from "@chakra-ui/react";
import useGenres from "../../hooks/useGenres";
import {getCroppedUrl} from "../../services/utils";
import GameCardContainer from "../game/GameCardContainer";
import GenreSkeleton from "./GenreSkeleton";

const GenresList = () => {
    const { data: genres, isLoading } = useGenres();
    const skeletonArray = new Array(15).fill(1)
    return (
        <List>
            {isLoading && skeletonArray.map((_sk, index) =>
                <GameCardContainer key={index}>
                    <GenreSkeleton/>
                </GameCardContainer>
            )}
            {genres.map((genre) => (
                <ListItem key={genre.id} paddingY="5px">
                <HStack>
                    <Image boxSize="32px" borderRadius="8" src={getCroppedUrl(genre.image_background)}  />
                    <Text fontSize="lg">{genre.name}</Text>
                </HStack>
            </ListItem>))}
        </List>
    );
};

export default GenresList;
