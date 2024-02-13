import { useQuery } from "@tanstack/react-query";
import { getProjectsApi } from "../services/projectService";

export default function useProject() {
    const { isLoading, data } = useQuery({
        queryKey: ["projects"],
        queryFn: getProjectsApi,
    })

    const { projects } = data || {};

    return { projects, isLoading };
}