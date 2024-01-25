import UseProductContext from "@/context/hook/UseProductContext";
import { useRef, useState } from "react";

export default function UseProductRow() {
    //hooks
    const [open, setOpen] = useState(false);
    // progres material ui
    const [success, setSuccess] = useState(false);
    const [loadingProgress, setLoadingProgress] = useState(false);
    const timer = useRef();
    const {getProduct} = UseProductContext

    const onClickEditProduct = (productId) => {
        setOpen(true)
        if (!loadingProgress) {
            setSuccess(false);
            setLoadingProgress(true);
            timer.current = window.setTimeout(() => {
                setSuccess(true);
                setLoadingProgress(false);
            }, 2000);
        }
        getProduct(productId)
    }

    const changeDialog = () => {
        setOpen(false)
        
    }

    return {
        onClickEditProduct,
        open,
        setOpen,
        changeDialog,
        success,
        loadingProgress
    }
}
