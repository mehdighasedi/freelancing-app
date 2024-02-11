import { useEffect, useState } from "react";

export default function useLocalStorageState(key, initialState) {
    const [value, setValue] = useState(() => {
        const storedValue = localStorage.getItem(key) || null;
        return storedValue ? JSON.parse(storedValue) : initialState;
    })

    useEffect(() => {
        localStorage.setItem("isDarkMode", JSON.stringify(value));
    }, [value, key]);

    return [value, setValue]
}