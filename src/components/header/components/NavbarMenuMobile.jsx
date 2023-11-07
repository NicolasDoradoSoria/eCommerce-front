import '../Styles.css';
import MenuIcon from './MenuIcon';
import CloseIcon from './closeIcon';


const NavbarMenuMobile = ({ click, handleClick }) => {
    return (
        <div className="menu-icon" onClick={handleClick}>
            {click ? <CloseIcon size={50} /> : <MenuIcon size={50}/>}
        </div>
    );
}

export default NavbarMenuMobile;