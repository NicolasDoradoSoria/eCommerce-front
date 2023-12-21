import { useState } from "react";

export function useActive(initial = false) {
    //carousel
    const [active, setActive] = useState(initial)

    const handleActive = (index) => {
        setActive(index);
    }


    return {active, handleActive}
}