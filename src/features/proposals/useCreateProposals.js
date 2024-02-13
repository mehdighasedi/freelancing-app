import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { createProposalsApi } from "../../services/proposalService";
export default function useCreateProposals() {

    const queryClient = useQueryClient();

    const { isPending: isCreatingProposals, mutate: createProposals } = useMutation({
        mutationFn: createProposalsApi,
        onSuccess: (data) => {
            toast.success(data?.message)
            queryClient.invalidateQueries({
                queryKey: ["proposals"]
            })
        }

        ,
        onError: (err) => { toast.err(err?.response?.data?.message) }

    })

    return { isCreatingProposals, createProposals }
}