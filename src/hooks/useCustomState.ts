import { useState } from "react"

export const useCustomState = (initialState: any) => {
	const [state] = useState(initialState);
	const [visibleCount, setVisibleCount] = useState(8);
	const [loading, setLoading] = useState(false);
	let visibleState = state.slice(0, visibleCount);

	const handleShowMore = () => {
		setLoading(true);
		setTimeout(() => {
			setVisibleCount((prevCount) => prevCount + 4);
			setLoading(false);
		}, 1500);
	};

	return [
		state, visibleState, visibleCount, loading, handleShowMore,
	];
};