import { useRef, useEffect } from "react";

export function useCarousel(time=0) {


    const carousel = useRef(null)

    const goNext = () => {
        if (carousel.current.scrollLeft == carousel.current.scrollLeftMax) {
            carousel.current.scrollTo(0, 0)
        } else {
            carousel.current.scrollBy(carousel.current.clientWidth, 0)
        }
    }
    const goPrev = () => {
        if (carousel.current.scrollLeft == 0) {
            carousel.current.scrollTo(carousel.current.scrollWidth, 0)
        } else {
            carousel.current.scrollBy(-carousel.current.clientWidth, 0)
        }
    }

    const handleActive = (i) => {
        carousel.current.scrollTo(carousel.current.clientWidth * i, 0)
    }


    useEffect(() => {
        if (time!=0){
            const interval = setInterval(() => {
                goNext();
            }, time);

            console.log("carousel:", carousel.current)
            return () => clearInterval(interval);
        }
        }, []);

    return { goNext, goPrev, handleActive, carousel}
}