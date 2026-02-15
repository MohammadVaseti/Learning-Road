const User = (props: {
  name: string;
  age: number;
  hasChild: boolean;
  sum: (a: number, b: number) => number;
}) => {
  return (
    <>
      <p>
        your name is {props.name} your age is {props.age} with{" "}
        {`${props.hasChild}`} children
      </p>
      <h2>sum is {props.sum(2, 4)}</h2>
    </>
  );
};

export default User;
