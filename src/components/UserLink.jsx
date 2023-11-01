import Link from 'next/link';
import '../app/login/styles/login.css';

const UserLink = () => {
    return ( <div className='link-Container'>
    <Link href={"/nueva-cuenta"} className="link">
        <p>No tienes cuenta? Registrate</p>
    </Link>
</div> );
}
 
export default UserLink;