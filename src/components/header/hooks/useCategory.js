"use client"

import UseCategoryContext from "@/context/hook/UseCategoryContext";
import {useEffect } from "react";

const useCategory = () => {
    const { getCategory, categories } = UseCategoryContext()
// componente reservado para el context de categoria
    useEffect(() => {
        getCategory();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return {
        categories
    };
}

export default useCategory;