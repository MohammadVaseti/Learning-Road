import { useSelector } from "react-redux";

const UpBox3 = () => {
  const counter = useSelector((state) => state);
  console.log(counter);

  return (
    <>
      <h5>UpBox3</h5>
      <p>counter : 0</p>
    </>
  );
};

export default UpBox3;
