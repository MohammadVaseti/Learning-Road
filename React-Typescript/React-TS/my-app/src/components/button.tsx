import { ComponentProps } from "react";

type Button = React.ComponentProps<"button"> & {
  title: string;
};

const handleChange = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
  e.target;
};

const Button = ({}: Button) => {
  return (
    <>
      <button onClick={handleChange}>click me</button>
    </>
  );
};

export default Button;
