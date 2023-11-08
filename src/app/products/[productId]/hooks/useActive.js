import { useState } from "react";

export function useActive() {
    //carousel
    const [active, setActive] = useState(0)

    const handleActive = (index) => {
        setActive(index);
    }


    return {active, handleActive}
}