import '../styles/AddEditProduct.css';
import { Button, Input, Select } from "@nextui-org/react";
import Images from '../components/Images'
import { Checkbox } from "@nextui-org/react";
const AddEditProduct = () => {

    return (
        <div className="flex flex-col items-center w-full h-screen">
            <div className="product_card">
                <h1 className='text-black'>AgregarProducto</h1>
                <form className="product_form">
                    {/* NOMBRE */}
                    <div className="product_item">
                        <Input label="nombre del producto" name="name" />
                    </div>
                    {/* PRECIO */}
                    <div className="product_item">
                        <Input type="number" label="Precio" name="price" inputProps={{ inputProps: { min: 0 } }} />
                    </div>
                    {/* DESCRIPCION */}
                    <div className="product_item">
                        <Input label="Descripcion" name="descripcion"  />
                    </div>
                    {/* STOCK */}
                    <div className="product_item">
                        <Input type="number" label="Stock" name="stock"  inputProps={{ inputProps: { min: 1 } }} defaultValue="1" />
                    </div>
                    {/* CATEGORIA */}
                    <div className="product_item">
                        <Select
                            // items={animals}
                            label="Favorite Animal"
                            placeholder="Select an animal"
                            className="max-w-xs"
                            name="category"

                        >
                            {/* {(animal) => <SelectItem key={animal.value}>{animal.label}</SelectItem>} */}
                        </Select>
                    </div>
                    {/* CARGA Y MOSTRAR IMAGENES */}
                    <Images />
                    {/* ELIMINAR IMAGEN */}
                    <div className="product_item">
                        <Button color="primary">Eliminar</Button>
                    </div>
                    {/* CHECKBOX DE SI TIENE OFERTA O NO */}
                    <div className="product_item">
                        <Checkbox name="checkedOffer" defaultSelected>Oferta</Checkbox>
                    </div>
                    {/* PRECIO ORIGINAL se activa si es true el checkedOffer */}
                    <div className="product_item">
                        <Input label="precio orginal" type="number" name="originalPrice" />
                    </div>
                    <div className="product_item">
                        <Button color="primary">
                            Agregar Producto
                        </Button>
                    </div>

                </form>
            </div>
        </div>
    );
}

export default AddEditProduct;