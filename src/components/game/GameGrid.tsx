import { SimpleGrid, Text } from "@chakra-ui/react";
import GameCard from "./GameCard";
import GameCardContainer from "./GameCardContainer";
import GameCardSkeleton from "./GameCardSkeleton";
import {Game} from "../../hooks/useGames";

export interface GameGridProps {
  games: Game[],
  isLoading: boolean;
  error: string
}

const GameGrid = ({games, error, isLoading}: GameGridProps) => {
	const skeletonArray = new Array(8).fill(1);
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
