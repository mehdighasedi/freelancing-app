import { useQuery } from "@tanstack/react-query"
import { getCategoryApi } from "../services/categoryService"

export default function useCategory() {
    const { isLoading, data } = useQuery({
        queryKey: ["categories"],
        queryFn: getCategoryApi,
    })
    const { categories: rawCategory = [] } = data || {};


    const categories = rawCategory.map(item => ({
        label: item.title,
        value: item._id,
    }));

    const transformedCategory = rawCategory.map(item => ({
        label: item.title,
        value: item.englishTitle,
    }));


    return { isLoading, categories, transformedCategory }
}