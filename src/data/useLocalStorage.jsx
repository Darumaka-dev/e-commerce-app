import { useState, useEffect } from 'react';

export const useLocalStorage = (key, initialValue) => {
	const [value, setValue] = useState(() => {
		const data = localStorage.getItem(key);
		return data ? JSON.parse(data) : initialValue;
	});

	useEffect(() => {
		localStorage.setItem(key, JSON.stringify(value));
	}, [key, value]);
	// localStorage.clear()
	return [value, setValue];
};
