import {useEffect, useState} from "react";
import apiClient from "../services/network/api-client";
import {CanceledError} from "axios";

export interface Platform {
    id: number;
    name: string;
    slug: string;
}

export interface Game {
    id: number;
    name: string
    background_image: string;
    parent_platforms: { platform: Platform }[]
    metacritic: number;
}

interface FetchGameResponse {
    count: number;
    results: Game[]
}

const useGames = () => {
    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(null);

    useEffect(() => {
        setError(null)
        const controller = new AbortController();
        setIsLoading(true);

        apiClient.get<FetchGameResponse>("/games", {signal: controller.signal})
            .then(res => setGames(res.data.results))
            .catch(err => {
                if (err instanceof CanceledError) return;
                setError(err.message)
            }).finally(() => setIsLoading(false))

        return () => controller.abort();
    }, [])
    return {
        games,
        error,
        isLoading,
    }
};

export default useGames;