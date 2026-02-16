import { ComponentProps } from "react";

type Button = React.ComponentProps<"button"> & {
  title: string;
};

const Button = ({}: Button) => {
  return (
    <>
      <button>click me</button>
    </>
  );
};

export default Button;
