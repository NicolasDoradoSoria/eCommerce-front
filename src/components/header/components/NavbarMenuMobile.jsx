import '../Styles.css';


const NavbarMenuMobile = ({ click, handleClick }) => {
    return (
        <div className="menu-icon" onClick={handleClick}>
            {/* {click ? <CloseIcon /> : <MenuIcon />} */}
        </div>
    );
}

export default NavbarMenuMobile;