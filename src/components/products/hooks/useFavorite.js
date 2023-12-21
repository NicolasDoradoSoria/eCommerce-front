import { addFavorite, deleteFavorite } from "@/service/Products.service";
import { useState } from "react";
import { useGetUserToken } from "./useUserToken";

export default function useFavorite(id, isFavorite) {

    const token = useGetUserToken()
    const [favorite, setFavorite] = useState(isFavorite);
    
    const handleFavorite = () => {
        if (favorite) {
            deleteFavorite(id, token)
            setFavorite(false)
        } else {
            addFavorite(id, token)
            setFavorite(true)
        }
    }

    return {favorite, handleFavorite}
}