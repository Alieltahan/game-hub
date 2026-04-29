import { ReactElement } from 'react';
import { Button, HStack, Image, List, ListItem } from "@chakra-ui/react";
import useGenres, { Genre } from "../../hooks/useGenres";
import {getCroppedUrl} from "../../services/utils";
import { GameCardContainer } from "../game";
import GenreSkeleton from "./GenreSkeleton";

interface GenresListProps {
    onSelectedGenre: (genre: Genre) => void;
}

const GenresList = ({ onSelectedGenre }: GenresListProps): ReactElement => {
    const { data: genres, isLoading } = useGenres();
    const skeletonArray = new Array(15).fill(1)

    const truncateName = (s: string, max = 12) =>
        s.length > max ? `${s.slice(0, max)}...` : s;

    return (
        <List>
            {isLoading && skeletonArray.map((_sk, index) =>
                <GameCardContainer key={index}>
                    <GenreSkeleton/>
                </GameCardContainer>
            )}
            {genres.map((genre: Genre) => (
                <ListItem key={genre.id} paddingY="5px">
                <HStack>
                    <Image boxSize="32px" borderRadius="8" src={getCroppedUrl(genre.image_background)}  />
                    <Button variant="link" fontSize="lg" onClick={() => onSelectedGenre(genre)}>{truncateName(genre.name)}</Button>
                </HStack>
            </ListItem>))}
        </List>
    );
};

export default GenresList;
