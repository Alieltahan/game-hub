import useData from "./useData";

export interface Genre {
    id: number;
    name: string;
    slug: string;
    games_count: number;
    image_background: string;
}


const useGenres = () => useData<Genre>({endpoint: '/genres'});

export default useGenres;
