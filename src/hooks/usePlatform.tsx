import useData from "./useData";

interface Platform {
	id: number;
	name: string;
	slug: string;
}

const usePlatform = () => useData<Platform>({endpoint: '/platforms/lists/parents'});

export default usePlatform;
