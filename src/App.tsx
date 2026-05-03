import './App.css';
import {Box, Grid, GridItem, HStack, Show} from "@chakra-ui/react";
import { useState } from "react";
import NavBar from "./components/NavBar";
import { GenresList } from "./components/genre";
import { GameGrid } from "./components/game";
import PlatformSelector from "./components/PlatformSelector";
import useGames, {Platform} from "./hooks/useGames";
import useGenres, {Genre} from "./hooks/useGenres";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";

export interface GameQuery {
	genre: Genre | null;
	platform: Platform | null;
	sortOrder: string | null
	searchText: string;
}

function App() {
	const [gameQuery, setGameQuery] = useState<GameQuery>({genre: null, platform: null, sortOrder: null, searchText: ''});
  const {data: genres, isLoading: isGenresLoading} = useGenres();
  const {data: games, error: gameFetchError, isLoading: isGamesLoading} = useGames(gameQuery);

	function renderNavBar() {
		return (
			<GridItem area="nav">
				<NavBar onSearch={(searchText => setGameQuery({...gameQuery, searchText}))}/>
			</GridItem>);
	};

	function renderGenreList() {
		return <Show above="lg">
			<GridItem area="aside" paddingX="5px">
				<GenresList
          genres={genres}
          isLoading={isGenresLoading || isGamesLoading}
					onSelectedGenre={(genre: Genre) => setGameQuery({...gameQuery, genre})}
					selectedGenre={gameQuery.genre}/>
			</GridItem>
		</Show>;
	}

	function renderGameGrid() {
		return <GridItem area="main">
			<Box paddingLeft={10}>
				<GameHeading gameQuery={gameQuery}/>
				<HStack spacing={5} marginBottom={5}>
				<PlatformSelector
					selectedPlatform={gameQuery.platform}
					onSelectPlatform={(platform) => setGameQuery({...gameQuery, platform})}
				/>
				<SortSelector sortOrder={gameQuery.sortOrder}
				              onSelectedSortOrder={(sortOrder) => setGameQuery({...gameQuery, sortOrder})}/>
			</HStack>
			</Box>
      <GameGrid games={games} error={gameFetchError} isLoading={isGenresLoading || isGamesLoading}/>
		</GridItem>;
	}

	return <Grid
		templateAreas={{
			base: `"nav" "main"`,
			lg: `"nav nav" "aside main"`
		}}
		templateColumns={{
			base: "1fr",
			lg: "200px 1fr"
		}}>
		{renderNavBar()}
		{renderGenreList()}
		{renderGameGrid()}
	</Grid>;
}

export default App;
