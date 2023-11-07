import '../Styles.css';
import Link from 'next/link';
import Dropdown from './Dropdown';
import ArrowDownIcon from './ArrowDownIcon';

const NavbarMenuItems  = ({ categories, click, dropdownCategory, onMouseEnterCategory, onMouseLeaveCategory, handleClick }) => {
    return (
        <div className='navbar_item icon' onMouseEnter={onMouseEnterCategory} onMouseLeave={onMouseLeaveCategory}>
          <Link href='/' className='navbar_link' onClick={handleClick}>Categoria</Link>
          <div className='navbar_icon'>
            <ArrowDownIcon />
          </div>
          {dropdownCategory &&
            <ul className={click ? 'navbar_dropdown dropdown_clicked' : "navbar_dropdown"}>
              {/* {categories.map((category, i) => <Dropdown name={category.name} path={category.path} key={i} />)} */}
            </ul>
          }
        </div>
      );
}
 
export default NavbarMenuItems ;