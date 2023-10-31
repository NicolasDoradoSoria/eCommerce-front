import '../pages/login/styles/login.css';

const PasswordInput = () => {
    return (<div className="user-box">
        <input type="password" name="password" required autoComplete="current-password" />
        <label>Password</label>
    </div>);
}

export default PasswordInput;