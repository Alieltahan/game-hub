import { SimpleGrid, Text } from "@chakra-ui/react";
import { Genre } from "../../hooks/useGenres";
import GameCard from "./GameCard";
import GameCardContainer from "./GameCardContainer";
import GameCardSkeleton from "./GameCardSkeleton";
import useGames, { Platform } from "../../hooks/useGames";

export interface GameGridProps {
	selectedGenre?: Genre | null;
	selectedPlatform: Platform | null;
	sortOrder: string | null;
	searchText: string;
}

const GameGrid = ({selectedGenre, selectedPlatform, sortOrder, searchText}: GameGridProps) => {
	const {data: games, error, isLoading} = useGames({selectedGenre, selectedPlatform, sortOrder, searchText});
	const skeletonArray = new Array(6).fill(1);
	if (error) {
		return <Text colorScheme="red">error</Text>;
	}

	return (
		<SimpleGrid columns={{sm: 2, md: 2, lg: 3, xl: 4}} spacing={3} padding={10}>
			{isLoading && skeletonArray.map((_sk, index) =>
				<GameCardContainer key={index}>
					<GameCardSkeleton/>
				</GameCardContainer>)}
			{games.map((game) =>
				<GameCardContainer key={game.id}>
					<GameCard game={game}/>
				</GameCardContainer>)}
		</SimpleGrid>
	);
};

export default GameGrid;
