import { ReactElement } from 'react';
import {Button, Heading, HStack, Image, List, ListItem} from "@chakra-ui/react";
import useGenres, { Genre } from "../../hooks/useGenres";
import {getCroppedUrl} from "../../services/utils";
import { GameCardContainer } from "../game";
import GenreSkeleton from "./GenreSkeleton";

interface GenresListProps {
  onSelectedGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
  genres: Genre[]
  isLoading: boolean;
}

const GenresList = ({onSelectedGenre, selectedGenre, genres, isLoading}: GenresListProps): ReactElement => {
    const skeletonArray = new Array(15).fill(1);
    const isGenreSelected = (genreId: number) => selectedGenre?.id === genreId;

    return (
      <>
          <Heading fontSize='2xl' marginBottom="3">
              Genres
          </Heading>
        <List>
            {isLoading && skeletonArray.map((_sk, index) =>
                <GameCardContainer key={index}>
                    <GenreSkeleton/>
                </GameCardContainer>
            )}
            {genres.map((genre: Genre) => (
                <ListItem key={genre.id} paddingY="5px">
                <HStack>
                    <Image
                      boxSize="32px"
                      borderRadius="8"
                      src={getCroppedUrl(genre.image_background)}
                      objectFit="cover"/>
                    <Button whiteSpace="normal" textAlign="left"
                            fontWeight={isGenreSelected(genre.id) ? 'bold' : 'normal'}
                            colorScheme={isGenreSelected(genre.id) ? 'red' : 'white'} variant="link" fontSize="lg"
                            onClick={() => onSelectedGenre(genre)}>{genre.name}</Button>
                </HStack>
            </ListItem>))}
        </List>
      </>
    );
};

export default GenresList;
