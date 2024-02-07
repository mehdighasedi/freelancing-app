import { useQuery } from "@tanstack/react-query";
import { getProjectApi } from "../../services/projectService";
import { useParams } from "react-router-dom";

export default function useProject() {
    const { id } = useParams();
    const { isLoading, data } = useQuery({
        queryKey: ["project", id],
        queryFn: () => getProjectApi(id),
    })

    const { project } = data || {};

    return { project, isLoading };
}