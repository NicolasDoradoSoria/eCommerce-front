import Link from "next/link";

const Dropdown = ({name, path}) => {
    return ( 
        <li className="dropdown_item">
            <Link href={`${path}`} className="dropdown_link">{name}</Link>
        </li>
     );
}
 
export default Dropdown;