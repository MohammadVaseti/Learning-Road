import PropTypes from "prop-types";

const Person = (props) => {
  return (
    <>
      <h1>name : {props.name}</h1>
      <h1>age : {props.age}</h1>
      <h1>email</h1>
      <h1>isMarried</h1>
      <h1>courses</h1>
    </>
  );
};

Person.propTypes = {
  name: propTypes.string,
  age: propTypes.number,
};

export default Person;
