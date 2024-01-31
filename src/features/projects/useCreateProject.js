import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createProjectApi } from "../../services/projectService";
import toast from "react-hot-toast";

export default function useCreateProject() {

    const queryClient = useQueryClient();

    const { isPending: isCreatingProject, mutate: createProject } = useMutation({
        mutationFn: createProjectApi,
        onSuccess: (data) => {
            toast.success(data?.message)
            queryClient.invalidateQueries({
                queryKey: ["owner-projects"]
            })
        }

        ,
        onError: (err) => { toast.err(err?.response?.data?.message) }

    })

    return { isCreatingProject, createProject }
}