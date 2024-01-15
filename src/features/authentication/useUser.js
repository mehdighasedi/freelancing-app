import { useQuery } from "@tanstack/react-query";
import { getUser } from "../../services/authService";

export default function useUser() {
    return useQuery({
        queryKey: ["get-user"],
        queryFn: getUser,
        refetchOnWindowFocus: true,
        refetchOnReconnect: true,
        retry: false
    })
}