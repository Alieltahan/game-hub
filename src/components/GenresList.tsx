import React from 'react';
import useGenres from "../hooks/useGenres";
import {HStack, Image, List, ListItem, Text} from "@chakra-ui/react";
import {getCroppedUrl} from "../services/utils";

const GenresList = () => {
    const { data: genres, isLoading, error } = useGenres();

    return (
        <List>
            {genres.map((genre, index) => (
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