import { useEffect, useState, DependencyList } from "react";
import apiClient from "../services/network/api-client";
import { AxiosRequestConfig, CanceledError } from "axios"; // Ensure this is imported

interface FetchResponse<T> {
	count: number;
	results: T[];
}

interface UseDataPros {
	endpoint: string;
	axiosRequestConfig?: AxiosRequestConfig;
	// Use React's DependencyList so callers can pass any dependency values
	deps?: DependencyList;
}

const useData = <T>({endpoint, axiosRequestConfig, deps}: UseDataPros) => {
	const [data, setData] = useState<T[]>([]);
	const [error, setError] = useState("");
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const controller = new AbortController();

		error && setError("");

		apiClient
			.get<FetchResponse<T>>(endpoint, {signal: controller.signal, ...axiosRequestConfig})
			.then((res) => {
				setData(res.data.results);
				setIsLoading(false);
			})
			.catch((err) => {
				if (err instanceof CanceledError) return;
				setError(err.message);
				setIsLoading(false);
			});

		return () => controller.abort();
	}, (deps ? [...deps, endpoint] : [endpoint]));

	return {data, error, isLoading};
};

export default useData;
