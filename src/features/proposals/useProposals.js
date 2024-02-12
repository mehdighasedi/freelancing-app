import { useQuery } from "@tanstack/react-query";
import { getProposalApi } from "../../services/proposalService";

export default function useProposals() {
    const { isLoading, data } = useQuery({
        queryKey: ["proposals"],
        queryFn: getProposalApi,
    })

    const { proposals } = data || {};

    return { isLoading, proposals }
}