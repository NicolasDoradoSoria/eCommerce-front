import Link from "next/link";

const SignUp = () => {
    return ( 
    <>
        <div className="user-box">
            <input autoComplete="email" type="text" name="email" required autoFocus />
            <label>Username</label>
        </div>
        <div className="user-box">
            <input type="password" name="password" required autoComplete="current-password" />
            <label>contraseña</label>
        </div>
        <div className="user-box">
            <input type="password" name="confirmPassword" required autoComplete="current-password" />
            <label>confirmar contraseña</label>
        </div>
        <div className='link-Container'>
            <Link href={"/nueva-cuenta"} className="link">
                <p>ya tienes cuenta? Logeate</p>
            </Link>
        </div>
</> );
}
 
export default SignUp;