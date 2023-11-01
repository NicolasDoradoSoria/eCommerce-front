import { useState } from "react";

export default function useFavorite (initialValue = false) {
  const [favorite, setFavorite] = useState(initialValue);

  const handleFavorite = () => setFavorite(!favorite);

  return {handleFavorite, favorite}
}