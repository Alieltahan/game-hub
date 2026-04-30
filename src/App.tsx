import './App.css';
import { Grid, GridItem, Show } from "@chakra-ui/react";
import { useState } from "react";
import NavBar from "./components/NavBar";
import { GenresList } from "./components/genre";
import { GameGrid } from "./components/game";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/useGames";
import { Genre } from "./hooks/useGenres";

interface GameQuery {
	genre: Genre | null;
	platform: Platform | null;
}

function App() {
	const [gameQuery, setGameQuery] = useState<GameQuery>({genre: null, platform: null});

	const handleSelectedGenre = (genre: Genre) => {
		setGameQuery({...gameQuery, genre});
	};

	function renderNavBar() {
		return (
			<GridItem area="nav">
				<NavBar/>
			</GridItem>);
	};

	function renderGenreList() {
		return <Show above="lg">
			<GridItem area="aside" paddingX="5px">
				<GenresList onSelectedGenre={handleSelectedGenre} selectedGenre={gameQuery.genre}/>
			</GridItem>
		</Show>;
	}

	function renderGameGrid() {
		return <GridItem area="main">
			<PlatformSelector
				selectedPlatform={gameQuery.platform}
				onSelectPlatform={(platform) => setGameQuery({...gameQuery, platform})}
			/>
			<GameGrid selectedPlatform={gameQuery.platform} selectedGenre={gameQuery.genre}/>
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
