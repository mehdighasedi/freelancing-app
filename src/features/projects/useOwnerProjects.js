import { useQuery } from "@tanstack/react-query";
import { getOwnerProjectsApi } from "../../services/projectService";

export default function useOwnerProjects() {
    const { isLoading, data } = useQuery({
        queryKey: ["projects"],
        queryFn: getOwnerProjectsApi,
    })

    const { projects } = data || {};

    return { projects, isLoading };
}