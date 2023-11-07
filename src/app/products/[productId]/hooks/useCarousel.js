import { useState } from "react";

export function useCarousel() {
    //carousel
    const [active, setActive] = useState(0)

    const handleActive = (index) => {
        setActive(index);
    }

    return {active, handleActive}
}