import { useRef, useEffect } from "react";

export function useCarousel(time=0) {


    const carousel = useRef(null)

    const goNext = () => {
        if (carousel.current.scrollLeft == carousel.current.scrollLeftMax) {
            carousel.current.scrollTo(0, 0)
        } else {
            carousel.current.scrollBy(1, 0)
        }
    }
    const goPrev = () => {
        console.log("start",carousel.current.scrollLeft)

        if (carousel.current.scrollLeft == 0) {
            carousel.current.scrollTo(carousel.current.scrollLeftMax, 0)
        } else {
            carousel.current.scrollBy(-1, 0)
        }
    }


    useEffect(() => {
        if (time!=0){
            const interval = setInterval(() => {
                goNext();
            }, time);
            return () => clearInterval(interval);
        }
        }, []);

    return { goNext, goPrev, carousel}
}