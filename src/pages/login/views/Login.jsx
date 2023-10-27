import 'tailwindcss/tailwind.css';
import '../styles/login.css'
import ReusableLogin from "../components/ReusableLogin";
import Link from "next/link";

const Login = () => {
    return (
        <>
            <ReusableLogin title={"Login"}>
                <div className="user-box">
                    <input autoComplete="email" type="text" name="email" required autoFocus />
                    <label>Username</label>
                </div>
                <div className="user-box">
                    <input type="password" name="password" required autoComplete="current-password" />
                    <label>Password</label>
                </div>
                <div className='link-Container'>
                    <Link href={"/nueva-cuenta"} className="link">
                        <p>No tienes cuenta? Registrate</p>
                    </Link>
                </div>
            </ReusableLogin>
            {/* <Alert /> */}
        </>
    );
}

export default Login;