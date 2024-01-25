
import UseAddEditProduct from "../hook/UseAddEditProduct";
import UseProductRow from "../hook/UseProductRow";
import ProductManagementContext from "./ProductManagementContext";
import React from "react";

const ProductManagementState = ({ children }) => {
    
    const { imageChange, images, selectImage, selectedImage, productButtonDisabled,
        imageButtonDisabled, productSubmit, name, price, descripcion, originalPrice, categories,
        productChange, checkedOfferChange, checkedOffer,
        deleteImage, product, category } = UseAddEditProduct()

    const { loadingProgress, onClickEditProduct,
        open, setOpen, changeDialog, success} = UseProductRow()


    return (
        <ProductManagementContext.Provider value={{
            images,
            imageChange,
            selectedImage,
            selectImage,
            productButtonDisabled,
            imageButtonDisabled,
            productSubmit, name, price, descripcion, originalPrice, categories,
            productChange, checkedOfferChange, checkedOffer,
            deleteImage,
            loadingProgress,
            onClickEditProduct,
            open,
            setOpen, changeDialog, success, product,
            category
        }}>
            {children}
        </ProductManagementContext.Provider>
    )
}

export default ProductManagementState