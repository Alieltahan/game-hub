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

interface UseGameProps extends Omit<GameGridProps, 'games' | 'isLoading' | 'error'> {
}

const useGames = ({selectedGenre, platform, sortOrder, searchText}: UseGameProps) => useData<Game>({
	endpoint: '/games',
	axiosRequestConfig: {
		params: {
			genres: selectedGenre?.id,
      platforms: platform?.id,
			ordering: sortOrder,
			search: searchText
		}
	},
  deps: [selectedGenre?.id, platform?.id, sortOrder, searchText],
});

export default useGames;
