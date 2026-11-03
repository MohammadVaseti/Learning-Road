import { useState } from "react";

const useToggle = (initialValue = false) => {
  const [state, setState] = useState(initialValue);
};

export default useToggle;
