import User from "./components/user";
import Article from "./components/article";
type User2 = { name: string; age: number };
type Array3 = (string | number)[];

function App() {
  let fName: string = "mohammad";
  console.log(fName);

  let counter: number = 27;

  console.log(counter);

  let bool: boolean = false;
  console.log(bool);

  let array = [1, "ali", false];
  console.log(array);

  let array2: number[] = [1, 2, 3];
  console.log(array2);

  let array3: Array3 = [1, "ali"];
  console.log(array3);

  let user = {
    name: "raha",
    age: 25,
    color: "blonde",
  };
  console.log(user);

  let user2: User2 = {
    age: 24,
    name: "saadoun",
  };

  console.log(user2);

  // ////////////////////

  const sum = (a: number, b: number) => {
    return a + b;
  };

  return (
    <>
      <h1>Typescript</h1>
      <User age={27} name="mohammad" hasChild={false} sum={sum} />
      <Article></Article>
    </>
  );
}

export default App;
