import '../pages/login/styles/login.css';

const EmailInput = ({inputChange}) => {
    return (<div className="user-box">
        <input autoComplete="email" type="text" name="email" onChange={inputChange} required autoFocus />
        <label>Username</label>
    </div>);
}

export default EmailInput;