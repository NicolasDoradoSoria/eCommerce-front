import '../pages/login/styles/login.css';

const EmailInput = () => {
    return (<div className="user-box">
        <input autoComplete="email" type="text" name="email" required autoFocus />
        <label>Username</label>
    </div>);
}

export default EmailInput;