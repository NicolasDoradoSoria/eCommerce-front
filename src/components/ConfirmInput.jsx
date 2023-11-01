import '../app/login/styles/login.css';

const ConfirmInput = ({inputChange}) => {
    return ( <div className="user-box">
    <input type="password" name="confirmPassword" required onChange={inputChange} autoComplete="current-password" />
    <label>confirmar contraseña</label>
</div> );
}
 
export default ConfirmInput;