import '../Styles.css';
import MenuIcon from './MenuIcon';
import CloseIcon from './closeIcon';


const NavbarMenuMobile = ({ click, handleClick }) => {
    return (
        <div className="menu-icon shrink-0" onClick={handleClick}>
            {click ? <CloseIcon size={40} /> : <MenuIcon size={40}/>}
        </div>
    );
}

export default NavbarMenuMobile;