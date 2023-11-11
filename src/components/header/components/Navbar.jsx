"use client"

import React from 'react';
import '../Styles.css';
import useCategory from '../hooks/useCategory';
import useNavbar from '../hooks/useNavbar';
import useMobile from '../hooks/useMobile';
import { Skeleton } from '@nextui-org/react';
import Link from 'next/link';
import NavbarMenuMobile from './NavbarMenuMobile';
import NavbarMenuItems from './NavbarMenuItems';
import NavbarUserItems from './NavbarUserItems';
import useAuthentication from '../hooks/useAuthentication';
import SearchBar from "./search/SearchBar"
import NavbarGuestItems from "./NavbarGuestItems"
import AvatarIcon from './AvatarIcon';

const adminPath = [
    {
        name: "Lista de Productos",
        path: "todos-Productos",
    },
    {
        name: "Agregar Producto",
        path: "agregar-producto",
    },
    {
        name: "Administrador Carrousel Principal",
        path: "administrador-Carrusel-Principal",
    },
    {
        name: "Agregar categoria",
        path: "agregar-categoria",
    },
    {
        name: "Pedidos",
        path: "order",
    },
];

const Navbar = () => {
    const { navigateToLogin, click, handleClick, products } = useNavbar()
    const { categories } = useCategory()
    const { authenticated, loading, isAdmin, signOff } = useAuthentication()
    const { onMouseEnterAdmin, onMouseLeaveAdmin, onMouseEnterCategory, onMouseLeaveCategory, dropdownAdmin, dropdownCategory } = useMobile()

    // Verificar si products existe antes de acceder a su propiedad length
    const productCount = products ? products.length : 0;

    return (
        <header className='header max-w-screen'>
            {!loading ?
                <div className='flex items-center h-full'>
                    {/* si no esta despleglado en modo mobile muestra MenuIcon si esta desplegablo muesta el CloseIcon esto solo sirve para modo mobile */}
                    <NavbarMenuMobile click={click} handleClick={handleClick} />

                    
                    <div className={click ? "navbar_container active" : "navbar_container"} >
                        <div className='navbar_item'>
                            <Link href='/' className='navbar_link' onClick={handleClick}>Inicio</Link>
                        </div>
                        <NavbarMenuItems
                            categories={categories}
                            click={click}
                            dropdownCategory={dropdownCategory}
                            onMouseEnterCategory={onMouseEnterCategory}
                            onMouseLeaveCategory={onMouseLeaveCategory}
                            handleClick={handleClick}
                        />
                        {authenticated ?
                            <NavbarUserItems
                                isAdmin={isAdmin}
                                authenticated={authenticated}
                                signOff={signOff}
                                productCount={productCount}
                                handleClick={handleClick}
                                onMouseLeaveAdmin={onMouseLeaveAdmin}
                                onMouseEnterAdmin={onMouseEnterAdmin}
                                dropdownAdmin={dropdownAdmin}
                                click={click}
                                adminPath={adminPath}
                            />
                            :
                            <NavbarGuestItems navigateToLogin={navigateToLogin} className="navbar_link" />
                        }
                    </div>
                    <div className='avatar-icon shrink-0'>
                        <Link href='/login'>
                            <AvatarIcon size={50} />
                        </Link>
                    </div>
                    <div className='navbar_item search_mobile shrink max-w-full min-w-[100px]'>
                        <SearchBar />
                    </div>

                </div> :
                <div className='flex items-center h-full gap-5 ml-[2rem]'>
                    <Skeleton className="flex w-[100px] h-12 rounded-lg" />
                    <Skeleton className="flex w-[130px] h-12 rounded-lg" />
                    <Skeleton className="flex w-[100px] h-12 rounded-lg" />
                    <Skeleton className="flex w-[100px] h-12 rounded-lg" />
                    <Skeleton className="flex w-[100px] h-12 rounded-lg" />
                    <Skeleton className="flex w-[130px] h-12 rounded-lg" />
                    <Skeleton className="flex w-[100px] h-12 rounded-lg" />
                    <Skeleton className="flex w-[50px] h-12 rounded-lg" />
                </div>
            }
        </header>
    );
}

export default Navbar;