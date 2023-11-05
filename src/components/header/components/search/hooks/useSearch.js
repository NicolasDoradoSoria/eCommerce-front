import useToggle from "@/hooks/useToggle";
import { useState } from "react";
import { useRouter } from "next/navigation";

export function useSearch() {
  const {handleValue: handleSearchToggle, value: search} = useToggle(false);

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

  return {handleInput, handleKeyDown, handleSearchClick, search, input}
}