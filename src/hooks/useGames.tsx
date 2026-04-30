import useData from "./useData";
import { Genre } from "./useGenres";

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

interface UseGamesProps {
	selectedGenre?: Genre | null;
	selectedPlatform?: Platform | null;
}

const useGames = ({selectedGenre, selectedPlatform}: UseGamesProps) => useData<Game>({
	endpoint: '/games',
	axiosRequestConfig: {
		params: {
			genres: selectedGenre?.id,
			platforms: selectedPlatform?.id
		}
	},
	deps: [selectedGenre?.id, selectedPlatform?.id],
});

export default useGames;
