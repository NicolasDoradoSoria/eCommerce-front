import useToggle from "@/hooks/useToggle";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export function useSearch() {
  const {handleValue: handleSearchToggle, setValue: setSearch, value: search} = useToggle(false);

  //controlar el search
  const [input, setInput] = useState("")

  const handleInput = (e) => {
    const {value} = e.target;

    setInput(value)
  }

  //enter to search
  const handleKeyDown = (e) => {
    if(e.keyCode == 13) {
      sendQuery()
    }
  }

  // Toggle or search
  const handleSearchClick = () => {
    if (input == "") {
      handleSearchToggle()
    } else {
      sendQuery()
    }
  }

  //TODO: send Query
  const router = useRouter();
  const sendQuery = () => {
    router.push(`/search/${input}`)
  }

  //make mobile responsive
  const isMobileSize = () => typeof window !== 'undefined' && window.innerWidth < 960

  const handleResize = () => {
    if (isMobileSize()) {
      setSearch(true)
    }
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize)
  
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return {handleInput, handleKeyDown, handleSearchClick, search, isMobileSize, input}
}