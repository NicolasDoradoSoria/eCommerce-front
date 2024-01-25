import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
import UseImages from "./UseImages";
import UseProductContext from "@/context/hook/UseProductContext";
import UseCategoryContext from "@/context/hook/UseCategoryContext";

const UseAddEditProduct = () => {

    // const navigate = useNavigate();

    const { addProduct, product, updateProduct } = UseProductContext()
    const {categories} = UseCategoryContext()
    // custom hooks de las imagenes 
    const { imagesDisabled,
        images,
        imageButtonDisabled,
        selectImage,
        imageChange,
        deleteImage,
        selectedImage,
        setImages
    } = UseImages()

    // hook de productNew se usa inicializa las propiedades
    const [productNew, setProductNew] = useState({
        name: "",
        price: 0,
        descripcion: "",
        stock: 0,
        category: null,
        checkedOffer: false,
        originalPrice: 0,
    });

    const { name, price, descripcion, category, checkedOffer, originalPrice } = productNew;

    const isEmpty = (aField) => aField === "";

    // desabilitar el boton de agregar producto si alguno de los campos no fue completado
    const productButtonDisabled = () => {
        return imagesDisabled() || (isEmpty(name) || isEmpty(descripcion) || isEmpty(category))
    }

    // checkbox
    const checkedOfferChange = (e) => setProductNew({ ...productNew, [e.target.name]: e.target.checked });

    // guarda en el hooks de productNew los campos
    const productChange = (e) => {
        setProductNew({
            ...productNew,
            [e.target.name]: e.target.value,
        });
    };

    const productSubmit = (e) => {
        e.preventDefault();
        (product ? updateProduct(productNew) : addProduct(productNew, images))
        // navigate("/")
    }

    useEffect(() => {
        // getCategory()
        if (product) {
            setProductNew(product)
            setImages(product.images)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [product])

    return {
        product,
        checkedOfferChange,
        imageButtonDisabled,
        checkedOffer,
        productChange,
        productButtonDisabled,
        categories,
        name,
        price,
        descripcion,
        category,
        originalPrice,
        productSubmit,
        imageChange,
        images,
        selectImage,
        selectedImage,
        deleteImage,

    };
}

export default UseAddEditProduct;