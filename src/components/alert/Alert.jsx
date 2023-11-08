import './Alert.css'
import SnackBarContext from '../../context/snackbarContext/SnackbarContext';
import RepusableAlert from './reusableAlert';
import UseSnackbarContext from '@/context/hook/UseSnackbarCOntext';
import { Modal, ModalBody, ModalContent } from '@nextui-org/react';

/* 
********************************

PARA PODER ACTIVAR EL SNACKBAR TENEMOS QUE UTILIZAR EL CONTEXT 
SnacbarContext 

EN ESE TENEMOS QUE LLAMAR A LA FUNCION openSnackbar EN DONDE RESIBRA UN MJ Y LA CATEGORIA
 - openSnackbar(msg, category)

LA CATEGORIA ES UN STRING QUE PUEDE SER
- success 
PARA INDICAR AL SNACKBAR QUE FUE EXITOSO SI NO LE PASAMOS NADA TOMARA COMO QUE ES UN ERROR


*************************   
*/


const Alert = () => {

    const { open, msg, category, closeSnackbar } = UseSnackbarContext()

    return (
        <Modal isOpen={open} onClose={closeSnackbar} size="sm">
            <ModalContent>
                    <div id="container">
                        {category === "success" ?
                            <RepusableAlert msg={msg} closeSnackbar={closeSnackbar} /> :
                            <RepusableAlert id="error-box" face='face2' mouth='mouth sad' shadow='shadow move' msg={msg} button='try again' severity='Error!' closeSnackbar={closeSnackbar} />
                        }
                    </div>
            </ModalContent>
        </Modal>
    )

}

export default Alert;