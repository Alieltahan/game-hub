import { useEffect, useState } from "react";
import apiClient from "../services/network/api-client";
import { CanceledError } from "axios"; // Ensure this is imported

interface FetchResponse<T> {
    count: number;
    results: T[];
}

const useData = <T>(endpoint: string) => {
    const [data, setData] = useState<T[]>([]);
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const controller = new AbortController();

        setIsLoading(true);
        setError("");

        apiClient
            .get<FetchResponse<T>>(endpoint, { signal: controller.signal })
            .then((res) => {
                setData(res.data.results);
            })
            .catch((err) => {
                if (err instanceof CanceledError) return;
                setError(err.message);
            }).finally(() => setIsLoading(false));

        return () => controller.abort();
    }, [endpoint]);

    return { data, error, isLoading };
};

export default useData;