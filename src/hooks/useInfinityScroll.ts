import { useState, useEffect, useCallback, useRef } from 'react';
import axios from 'axios';

export const useInfinityScroll = (category: string) => {
	const [items, setItems] = useState<any>([]);
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(null);
	const [hasMore, setHasMore] = useState(true);
	const [page, setPage] = useState(1);

	const fetchData = useCallback(async () => {
		try {
			setLoading(true)
			const response = await axios.get(`https://rickandmortyapi.com/api/${category}?page=${page}`);
			setItems((prevItems: any) => [...prevItems, ...response.data.results]);
			setHasMore(response.data.info.next !== null);
			setLoading(false)
		} catch (error: any) {
			setLoading(false)
			setError(error);
		}
	}, [category, page]);

	useEffect(() => {
		fetchData();
	}, [fetchData]);

	const observer = useRef<IntersectionObserver | null>(null)

	const lastItemRef = useCallback(
		(node: HTMLDivElement | null) => {
			if (observer.current) observer.current.disconnect()

			observer.current = new IntersectionObserver(entries => {
				if (entries[0].isIntersecting && hasMore) {
					setPage(prevPage => prevPage + 1)
				}
			})

			if (node) observer.current.observe(node)
		},
		[hasMore, setPage]
	)

	return { items, error, hasMore, setPage, loading, lastItemRef };
};
