import {useEffect, useState} from "react";
import apiClient from "../services/network/api-client";
import {CanceledError} from "axios";

interface Game {
    id: number;
    name: string
}

interface FetchGameResponse {
    count: number;
    results: Game[]
}

const UseGames = () => {
    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState(null);
    useEffect(() => {
        setError(null)
        const controller = new AbortController();
        apiClient.get<FetchGameResponse>("/games", {signal: controller.signal})
            .then(res => setGames(res.data.results))
            .catch(err => {
                if (err instanceof CanceledError) return;
                setError(err.message)
            })

        return () => controller.abort();
    }, [])
    return {
        games,
        error
    }
};

export default UseGames;