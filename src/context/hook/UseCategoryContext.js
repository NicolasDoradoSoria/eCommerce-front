import { useContext } from "react";
import CategoryContext from "../categoryContext/CategoryContext";

const UseCategoryContext = () => {
    const categoryContext = useContext(CategoryContext)
    const { getCategory, categories } = categoryContext

    return { getCategory, categories }
}

export default UseCategoryContext;