import { useRef, useEffect, useState } from "react";

export function useCarousel(time=0, length=0) {


    const [active, setActive] = useState(0)
    const carousel = useRef(null)

    const goNext = () => {
        if (carousel.current.scrollLeft == carousel.current.scrollLeftMax) {
            carousel.current.scrollTo(0, 0)
            setActive(0)
        } else {
            carousel.current.scrollBy(carousel.current.clientWidth, 0)
            setActive(active+1)
        }
    }
    const goPrev = () => {
        if (carousel.current.scrollLeft == 0) {
            carousel.current.scrollTo(carousel.current.scrollWidth, 0)
            setActive(length-1)
        } else {
            carousel.current.scrollBy(-carousel.current.clientWidth, 0)
            setActive(active-1)
        }
    }

    const handleActive = (i) => {
        carousel.current.scrollTo(carousel.current.clientWidth * i, 0)
        setActive(i)
    }

    const handleScroll =() => {
        const newActive = Math.round(carousel.current.scrollLeft/carousel.current.clientWidth * 100)/100
        if (Number.isInteger(newActive)) {
            setActive(newActive)
        }

    }


    useEffect(() => {
        const carouselNode = carousel.current

        if (time!=0){
            const interval = setInterval(() => {
                goNext();
            }, time);
            return () => clearInterval(interval);
        }

        carouselNode.addEventListener("scroll", handleScroll)

        return () => {
            if (time != 0){
                clearInterval(interval)
            }
            carouselNode.removeEventListener("scroll", handleScroll)
        }
        }, []);

    return { goNext, goPrev, handleActive, carousel, active}
}