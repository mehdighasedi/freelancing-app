import { useMutation, useQueryClient } from "@tanstack/react-query";
import { removeProjectsApi } from "../../services/projectService";
import toast from "react-hot-toast";

export default function useRemoveProject() {
    const queryClient = useQueryClient()
    const { isPending: isDeleting, mutate: removeProject } = useMutation({
        mutationFn: removeProjectsApi,
        onSuccess: (data) => {
            toast.success(data?.message)
            queryClient.invalidateQueries({
                queryKey: ["owner-projects"]
            })
        }

        ,
        onError: (err) => { toast.err(err?.response?.data?.message) }
    })

    return { isDeleting, removeProject }
}