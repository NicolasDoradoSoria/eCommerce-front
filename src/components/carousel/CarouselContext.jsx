import React, { createContext } from "react";
import { useCarousel } from "./useCarousel";
export const CarouselContext = createContext();

const CarouselProvider = ({ children, time=0}) => {

    const {carousel, goNext, goPrev, handleActive, active} = useCarousel(time)


  return (
    <CarouselContext.Provider
      value={{
        carousel,
        goNext,
        goPrev,
        handleActive,
        active
      }}
    >
      {children}
    </CarouselContext.Provider>
  );
};

export default CarouselProvider;
