import '../pages/login/styles/login.css';

const PasswordInput = ({inputChange}) => {
    return (<div className="user-box">
        <input type="password" name="password" required onChange={inputChange} autoComplete="current-password" />
        <label>Password</label>
    </div>);
}

export default PasswordInput;