import { useContext } from "react";
import ProductContext from "../productsContext/ProductContext";

const UseProductContext = () => {

    //productContext
    const productContext = useContext(ProductContext);
    const { getProducts, products, totalPages, searchProducts, loading, deleteProduct, addProduct, msg, getProduct, product, updateProduct } = productContext;

    return {
        getProducts,
        products,
        totalPages, 
        searchProducts, 
        loading, 
        deleteProduct, 
        addProduct, 
        msg, 
        getProduct, 
        product, 
        updateProduct
    };
}

export default UseProductContext;