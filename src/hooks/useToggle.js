import { useState } from "react";

export default function useToggle (initialValue = false) {
  const [value, setValue] = useState(initialValue);

  const handleValue = () => setValue(!value);

  return {handleValue, setValue, value}
}