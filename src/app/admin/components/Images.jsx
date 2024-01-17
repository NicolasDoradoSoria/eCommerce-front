import { Button } from "@nextui-org/react";

const Images = () => {

    return (
        <>
            {/* SUBIR IMAGBEN */}
            <div className="product_item">
                <Button color="primary">
                    Subir
                    <input hidden accept="image/*" name="img" type="file" />
                </Button>
            </div>
            {/* IMAGEN PREVIA */}
            <div className="product_item_col2">
                <div className="product_upload_img">
                    {
                        <div className="product_select_image">
                            <Button >
                                <img src={`https://img.freepik.com/foto-gratis/collage-paisaje-montanas-magicas_23-2150800059.jpg?size=626&ext=jpg&ga=GA1.1.1412446893.1705525200&semt=ais`} alt="uploaded_image" className="addEdditProduct_img" />
                            </Button>
                        </div>
                    }
                </div>
            </div>
        </>

    );
}

export default Images;