import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logoutApi } from "../../services/authService";
import { useNavigate } from "react-router-dom";

export default function useLogout() {
    const navigate = useNavigate()
    const queryClient = useQueryClient();

    const { isPending, mutate: logout } = useMutation({
        mutationFn: logoutApi,
        onSuccess: () => {
            queryClient.removeQueries();
            navigate("/auth")
        }


    })

    return { isPending, logout }
}