type User = {
  name: string;
  age: number;
  hasChild: boolean;
  sum: (a: number, b: number) => number;
};

function User({ name, age, hasChild, sum }: User) {
  return (
    <>
      <p>
        your name is {name} your age is {age} with {`${hasChild}`} children
      </p>
      <h2>sum is {sum(2, 4)}</h2>
    </>
  );
}

export default User;
