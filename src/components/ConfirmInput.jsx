import '../pages/login/styles/login.css';

const ConfirmInput = () => {
    return ( <div className="user-box">
    <input type="password" name="confirmPassword" required autoComplete="current-password" />
    <label>confirmar contraseña</label>
</div> );
}
 
export default ConfirmInput;