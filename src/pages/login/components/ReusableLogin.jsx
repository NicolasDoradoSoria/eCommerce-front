import { Card } from '@nextui-org/react';
import '../styles/login.css'

const ReusableLogin = ({ children, title, onSubmit }) => {
    return (
        <div className='login-container'>
            <Card className="login-box" id="card">
                <div className='content'>
                    <h2>{title}</h2>
                    <form onSubmit={onSubmit}>
                        {children}
                        <button type="submit">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            Submit
                        </button>
                    </form>
                </div>
            </Card>
        </div>
    );
}

export default ReusableLogin;