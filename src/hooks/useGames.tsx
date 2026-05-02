import useData from "./useData";
import {GameGridProps} from "../components/game/GameGrid";

export interface Platform {
	id: number;
	name: string;
	slug: string;
}

export interface Game {
	id: number;
	name: string;
	background_image: string;
	parent_platforms: { platform: Platform }[];
	metacritic: number;
}

const useGames = ({selectedGenre, selectedPlatform, sortOrder, searchText}: GameGridProps) => useData<Game>({
	endpoint: '/games',
	axiosRequestConfig: {
		params: {
			genres: selectedGenre?.id,
			platforms: selectedPlatform?.id,
			ordering: sortOrder,
			search: searchText
		}
	},
	deps: [selectedGenre?.id, selectedPlatform?.id, sortOrder, searchText],
});

export default useGames;
