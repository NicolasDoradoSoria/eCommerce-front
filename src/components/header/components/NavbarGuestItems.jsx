import { Button } from '@nextui-org/react';
import '../Styles.css';

const NavbarGuestItems  = ({ navigateToLogin }) => {
    return (
        <div className='navbar_item'>
          <div className='navbar_action'>
            <Button color="primary" className="navbar" onClick={navigateToLogin}>Inciar Sesión</Button>
          </div>
        </div>
      );
}
 
export default NavbarGuestItems ;