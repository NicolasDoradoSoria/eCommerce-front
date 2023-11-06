import '../Styles.css';
import { Badge, Button } from "@nextui-org/react";
import Link from "next/link";
import Dropdown from './Dropdown';

const NavbarUserItems = ({
    isAdmin,
    authenticated,
    signOff,
    productCount,
    handleClick,
    onMouseLeaveAdmin,
    onMouseEnterAdmin,
    dropdownAdmin,
    click,
    adminPath }) => {
    return (
        <>
            <div className='navbar_item'>
                <Link href='/' className='navbar_link' onClick={handleClick}>Perfil</Link>
            </div>
            <div className='navbar_item'>
                <Link href='/cart' className='navbar_link' onClick={handleClick}>Carrito</Link>
            </div>
            <div className='navbar_item'>
                <Link href='/favorites' className='navbar_link' onClick={handleClick}>Favoritos</Link>
            </div>
            {isAdmin && (
                <div className='navbar_item icon' onMouseEnter={onMouseEnterAdmin} onMouseLeave={onMouseLeaveAdmin}>
                    <Link href='/' className='navbar_link' onClick={handleClick}>Administrador</Link>
                    <div className='navbar_icon'>
                        {/* <ArrowDropDownIcon /> */}
                    </div>
                    {dropdownAdmin &&
                        <ul className={click ? 'navbar_dropdown.dropdown_clicked' : "navbar_dropdown"}>
                            {adminPath.map((path, i) => <Dropdown name={path.name} path={path.path} key={i} />)}
                        </ul>
                    }
                </div>
            )}
            <div className='navbar_item'>
                <div className='navbar_action'>
                    <Button color="primary" className="navbar" onClick={signOff}>cerrar Sesion</Button>
                </div>
            </div>
            <div className='navbar_item'>
                <Badge content={authenticated ? productCount : null} color="error" className='shopping'>
                    <div className="navbar_badge_icon">
                        {/* <ShoppingCartIcon /> */}
                    </div>
                </Badge>
            </div>
        </>
    );
}

export default NavbarUserItems;