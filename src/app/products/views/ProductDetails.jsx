import React from 'react'
import { Image, Button } from '@nextui-org/react'
import {HeartIcon} from './HeartIcon';
import ProductsSimilar from './ProductsSimilar';

//esto depende bastante de que info hay sobre el objeto
//hay imagenes extra? - carrusel
//similares abajo? (otro component?)


function ProductDetails({id}) {

    //en realidad debería ser una llamada para tener los detalles segun el id, que llega por el path
    const product = {
        id: 1,
        title: "Banana",
        img: "https://nextui.org/images/fruit-7.jpeg",
        price: "$7.50",
        description: "Voluptatibus commodi tenetur enim est aperiam quisquam molestias. Repellat ad perspiciatis adipisci aut qui. Qui placeat odit saepe saepe blanditiis. Ut magni explicabo et aut tempore debitis beatae deserunt. Recusandae qui quos vero aut eum labore. At ut qui maiores expedita."
      }

    return (<>
        <div className='flex flex-row justify-start mx-20 my-10 rounded-md drop-shadow-xl border-1 border-black bg-white h-5/6'>
            <div>
                <Image src={product.img} alt={product.title} width='100%' className='' ></Image>
            </div>

            <div className='w-full'>
                <div className='sticky top-0  p-5'>
                    <h1 className='text-4xl text-center font-extralight p-1'>{product.title}</h1>
                    <hr/>
                    <h2 className='text-lg text-start font-bold p-1'>{product.price}</h2>
                    <hr/>
                    <div className='flex flex-row gap-2 my-3'>
                        <Button color="success" className='text-lg bg-green-400 w-full rounded-sm p-1 text-center'>Add to cart</Button>
                        <Button isIconOnly color="danger" aria-label="Favorite" className='p-2 border border-red-900 rounded-sm'>
                            <HeartIcon fill='rgb(127 29 29)' />
                        </Button>    
                    </div>
                    <div className='p-5 text-sm'>{product.description}</div>
                </div>
            </div>
        </div>

        <ProductsSimilar></ProductsSimilar>

<div className='text-xl m-20'>
    <p>id: {id}</p>
<p>
            Voluptatibus commodi tenetur enim est aperiam quisquam molestias. Repellat ad perspiciatis adipisci aut qui. Qui placeat odit saepe saepe blanditiis. Ut magni explicabo et aut tempore debitis beatae deserunt. Recusandae qui quos vero aut eum labore. At ut qui maiores expedita.
        </p>
        <p>
            Voluptatibus commodi tenetur enim est aperiam quisquam molestias. Repellat ad perspiciatis adipisci aut qui. Qui placeat odit saepe saepe blanditiis. Ut magni explicabo et aut tempore debitis beatae deserunt. Recusandae qui quos vero aut eum labore. At ut qui maiores expedita.
        </p>
        <p>
            Voluptatibus commodi tenetur enim est aperiam quisquam molestias. Repellat ad perspiciatis adipisci aut qui. Qui placeat odit saepe saepe blanditiis. Ut magni explicabo et aut tempore debitis beatae deserunt. Recusandae qui quos vero aut eum labore. At ut qui maiores expedita.
        </p>
        <p>
            Voluptatibus commodi tenetur enim est aperiam quisquam molestias. Repellat ad perspiciatis adipisci aut qui. Qui placeat odit saepe saepe blanditiis. Ut magni explicabo et aut tempore debitis beatae deserunt. Recusandae qui quos vero aut eum labore. At ut qui maiores expedita.
        </p>
        <p>
            Voluptatibus commodi tenetur enim est aperiam quisquam molestias. Repellat ad perspiciatis adipisci aut qui. Qui placeat odit saepe saepe blanditiis. Ut magni explicabo et aut tempore debitis beatae deserunt. Recusandae qui quos vero aut eum labore. At ut qui maiores expedita.
        </p>
        <p>
            Voluptatibus commodi tenetur enim est aperiam quisquam molestias. Repellat ad perspiciatis adipisci aut qui. Qui placeat odit saepe saepe blanditiis. Ut magni explicabo et aut tempore debitis beatae deserunt. Recusandae qui quos vero aut eum labore. At ut qui maiores expedita.
        </p>
        <p>
            Voluptatibus commodi tenetur enim est aperiam quisquam molestias. Repellat ad perspiciatis adipisci aut qui. Qui placeat odit saepe saepe blanditiis. Ut magni explicabo et aut tempore debitis beatae deserunt. Recusandae qui quos vero aut eum labore. At ut qui maiores expedita.
        </p>
        <p>
            Voluptatibus commodi tenetur enim est aperiam quisquam molestias. Repellat ad perspiciatis adipisci aut qui. Qui placeat odit saepe saepe blanditiis. Ut magni explicabo et aut tempore debitis beatae deserunt. Recusandae qui quos vero aut eum labore. At ut qui maiores expedita.
        </p>
        <p>
            Voluptatibus commodi tenetur enim est aperiam quisquam molestias. Repellat ad perspiciatis adipisci aut qui. Qui placeat odit saepe saepe blanditiis. Ut magni explicabo et aut tempore debitis beatae deserunt. Recusandae qui quos vero aut eum labore. At ut qui maiores expedita.
        </p>
        <p>
            Voluptatibus commodi tenetur enim est aperiam quisquam molestias. Repellat ad perspiciatis adipisci aut qui. Qui placeat odit saepe saepe blanditiis. Ut magni explicabo et aut tempore debitis beatae deserunt. Recusandae qui quos vero aut eum labore. At ut qui maiores expedita.
        </p>
        <p>
            Voluptatibus commodi tenetur enim est aperiam quisquam molestias. Repellat ad perspiciatis adipisci aut qui. Qui placeat odit saepe saepe blanditiis. Ut magni explicabo et aut tempore debitis beatae deserunt. Recusandae qui quos vero aut eum labore. At ut qui maiores expedita.
        </p>
        <p>
            Voluptatibus commodi tenetur enim est aperiam quisquam molestias. Repellat ad perspiciatis adipisci aut qui. Qui placeat odit saepe saepe blanditiis. Ut magni explicabo et aut tempore debitis beatae deserunt. Recusandae qui quos vero aut eum labore. At ut qui maiores expedita.
        </p>
        <p>
            Voluptatibus commodi tenetur enim est aperiam quisquam molestias. Repellat ad perspiciatis adipisci aut qui. Qui placeat odit saepe saepe blanditiis. Ut magni explicabo et aut tempore debitis beatae deserunt. Recusandae qui quos vero aut eum labore. At ut qui maiores expedita.
        </p>
        <p>
            Voluptatibus commodi tenetur enim est aperiam quisquam molestias. Repellat ad perspiciatis adipisci aut qui. Qui placeat odit saepe saepe blanditiis. Ut magni explicabo et aut tempore debitis beatae deserunt. Recusandae qui quos vero aut eum labore. At ut qui maiores expedita.
        </p>
        <p>
            Voluptatibus commodi tenetur enim est aperiam quisquam molestias. Repellat ad perspiciatis adipisci aut qui. Qui placeat odit saepe saepe blanditiis. Ut magni explicabo et aut tempore debitis beatae deserunt. Recusandae qui quos vero aut eum labore. At ut qui maiores expedita.
        </p>
        <p>
            Voluptatibus commodi tenetur enim est aperiam quisquam molestias. Repellat ad perspiciatis adipisci aut qui. Qui placeat odit saepe saepe blanditiis. Ut magni explicabo et aut tempore debitis beatae deserunt. Recusandae qui quos vero aut eum labore. At ut qui maiores expedita.
        </p>
</div>
        

    </>
    )
}

export default ProductDetails