import ReusableLogin from "@/pages/login/components/ReusableLogin";
import Link from "next/link";

const SignUp = () => {
    return (
        <ReusableLogin title={"Registrase"}>
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
                    <p>tienes cuenta? Logeate</p>
                </Link>
            </div>
        </ReusableLogin>
    );
}

export default SignUp;