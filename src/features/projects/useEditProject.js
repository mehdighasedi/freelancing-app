import { useMutation, useQueryClient } from "@tanstack/react-query";
import { editProjectApi } from "../../services/projectService";
import toast from "react-hot-toast";

export default function useEditProject() {

    const queryClient = useQueryClient();

    const { isPending: isEditingProject, mutate: editProject } = useMutation({
        mutationFn: editProjectApi,
        onSuccess: (data) => {
            toast.success(data?.message)
            queryClient.invalidateQueries({
                queryKey: ["owner-projects"]
            })
        }

        ,
        onError: (err) => { toast.err(err?.response?.data?.message) }

    })

    return { isEditingProject, editProject }
}