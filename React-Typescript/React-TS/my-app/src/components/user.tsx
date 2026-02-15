const User = (props: { name: string; age: number; hasChild: boolean }) => {
  return (
    <>
      <p>
        your name is {props.name} your age is {props.age} with{" "}
        {`${props.hasChild}`} children
      </p>
    </>
  );
};

export default User;
