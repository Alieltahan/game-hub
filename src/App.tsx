import './App.css';
import { Grid, GridItem, Show } from "@chakra-ui/react";
import { useState } from "react";
import NavBar from "./components/NavBar";
import { GenresList } from "./components/genre";
import { GameGrid } from "./components/game";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/useGames";
import { Genre } from "./hooks/useGenres";

function App() {
	const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
	const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(null);

	const handleSelectedGenre = (genre: Genre) => {
		setSelectedGenre(genre);
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
				<GenresList onSelectedGenre={handleSelectedGenre} selectedGenre={selectedGenre}/>
			</GridItem>
		</Show>;
	}

	function renderGameGrid() {
		return <GridItem area="main">
			<PlatformSelector selectedPlatform={selectedPlatform} onSelectPlatform={setSelectedPlatform}/>
			<GameGrid selectedPlatform={selectedPlatform} selectedGenre={selectedGenre}/>
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
