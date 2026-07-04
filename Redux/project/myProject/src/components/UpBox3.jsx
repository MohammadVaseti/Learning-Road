import { useSelector } from "react-redux";

const UpBox3 = () => {
  const counter = useSelector((state) => state.counter.value);
  console.log(counter);

  return (
    <>
      <h5>UpBox3</h5>
      <p>counter : {counter}</p>
    </>
  );
};

export default UpBox3;
