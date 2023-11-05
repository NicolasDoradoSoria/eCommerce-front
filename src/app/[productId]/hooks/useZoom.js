import { useState } from "react";

export function useZoom() {
    //zoom active
    const [zoom, setZoom] = useState(false)

    const handleZoom = () => {
        setZoom(!zoom);
    }

    const handleQuitZoom = () => {
        setZoom(false);
    }

    //zoom origin
    const [origin, setOrigin] = useState("50% 50%")
    const handleOrigin = (e) => {
        const x = e.clientX - e.target.x
        const y = e.clientY - e.target.y

        setOrigin(`${x}px ${y}px`);

    }

    return {handleZoom, handleQuitZoom, origin, handleOrigin, zoom}
}