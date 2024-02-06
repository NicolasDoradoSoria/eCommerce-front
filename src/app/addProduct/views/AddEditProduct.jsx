"use client"

import '../styles/AddEditProduct.css';
import { Button, Input, Select, SelectItem } from "@nextui-org/react";
import Images from '../components/Images'
import { Checkbox } from "@nextui-org/react";
import { useContext } from 'react';
import ProductManagementContext from '../context/ProductManagementContext';
import DeleteIcon from '../styles/deleteIcon';
const AddEditProduct = () => {

    const productManagementContext = useContext(ProductManagementContext);
    const { productButtonDisabled, imageButtonDisabled, productSubmit, name, price, descripcion, originalPrice, categories, category,
        productChange, checkedOfferChange, checkedOffer,
        deleteImage, product } = productManagementContext;

    return (
        <div className="flex flex-col items-center w-full h-screen">
            <div className="product_card">
                {!product ? <h1>Agregar Producto</h1> : <h1>Editar Producto</h1>}
                <form className="product_form" onSubmit={productSubmit}>
                    {/* NOMBRE */}
                    <div className="product_item">
                        <Input onChange={productChange} label="nombre del producto" name="name" />
                    </div>
                    {/* PRECIO */}
                    <div className="product_item">
                        <Input onChange={productChange} type="number" label="Precio" name="price" inputProps={{ inputProps: { min: 0 } }}  />
                    </div>
                    {/* DESCRIPCION */}
                    <div className="product_item">
                        <Input onChange={productChange}  label="Descripcion" name="descripcion" />
                    </div>
                    {/* STOCK */}
                    <div className="product_item">
                        <Input onChange={productChange} type="number" label="Stock" name="stock" inputProps={{ inputProps: { min: 1 } }} defaultValue="1" />
                    </div>
                    {/* CATEGORIA */}
                    <div className="product_item">
                        <Select
                            onChange={productChange}
                            label="categorias"
                            placeholder="seleccione una categoria"
                            className="max-w-xs"
                            name="category"
                            items={category}
                        >
                            {categories.map(category => (
                                <SelectItem value={category._id} key={category._id} >{category.name}</SelectItem>
                            ))}
                        </Select>
                    </div>
                    {/* CARGA Y MOSTRAR IMAGENES */}
                    <Images />
                    {/* ELIMINAR IMAGEN */}
                    <div className="product_item">
                        <Button startContent={<DeleteIcon/>} color="primary" className='cursor-pointer' isDisabled={imageButtonDisabled()} onClick={() => deleteImage()} >Eliminar</Button>
                    </div>
                    {/* CHECKBOX DE SI TIENE OFERTA O NO */}
                    <div className="product_item">
                        <Checkbox name="checkedOffer" checked={checkedOffer} onChange={checkedOfferChange} defaultSelected>Oferta</Checkbox>
                    </div>
                    {/* PRECIO ORIGINAL se activa si es true el checkedOffer */}
                    {checkedOffer ? 
                    <div className="product_item">
                        <Input label="precio orginal" productChange={productChange} type="number" name="originalPrice" inputProps={{ inputProps: { min: price } }} />
                    </div> : <></>
                    }
                    <div className="product_item">
                        <Button color="primary" type="submit" className='cursor-pointer' isDisabled={productButtonDisabled()}>
                        {!product ? "Agregar Producto" : "Actualizar Producto"}
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default AddEditProduct;