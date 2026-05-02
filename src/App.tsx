import './App.css';
import {Grid, GridItem, HStack, Show} from "@chakra-ui/react";
import { useState } from "react";
import NavBar from "./components/NavBar";
import { GenresList } from "./components/genre";
import { GameGrid } from "./components/game";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/useGames";
import { Genre } from "./hooks/useGenres";
import SortSelector from "./components/SortSelector";

export interface GameQuery {
	genre: Genre | null;
	platform: Platform | null;
	sortOrder: string | null
	searchText: string;
}

function App() {
	const [gameQuery, setGameQuery] = useState<GameQuery>({genre: null, platform: null, sortOrder: null, searchText: ''});

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
					onSelectedGenre={(genre: Genre) => setGameQuery({...gameQuery, genre})}
					selectedGenre={gameQuery.genre}/>
			</GridItem>
		</Show>;
	}

	function renderGameGrid() {
		return <GridItem area="main">
			<HStack spacing={5} marginBottom={5} paddingLeft={10}>
				<PlatformSelector
					selectedPlatform={gameQuery.platform}
					onSelectPlatform={(platform) => setGameQuery({...gameQuery, platform})}
				/>
				<SortSelector sortOrder={gameQuery.sortOrder}
				              onSelectedSortOrder={(sortOrder) => setGameQuery({...gameQuery, sortOrder})}/>
			</HStack>
			<GameGrid searchText={gameQuery.searchText} selectedPlatform={gameQuery.platform} selectedGenre={gameQuery.genre}
			          sortOrder={gameQuery.sortOrder}/>
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
