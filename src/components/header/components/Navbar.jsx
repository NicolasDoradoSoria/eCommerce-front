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
        <header className='header'>
            {!loading ?
                <>
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
                            <NavbarGuestItems navigateToLogin={navigateToLogin} className="navbar_link"/>
                        }

                        <SearchBar></SearchBar>
                    </div>
                </> :
                <header className='header'><Skeleton className="w-full h-3" /></header>

            }
        </header>
    );
}

export default Navbar;