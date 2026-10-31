import { useForm } from "react-hook-form";

const SubmitForm = () => {
  const { register, handleSubmit } = useForm();

  return (
    <>
      <form onSubmit={handleSubmit()}>
        <input type="text" placeholder="name"></input>
        <input type="text" placeholder="email"></input>
        <input type="number" placeholder="age"></input>
        <input type="text" placeholder="password"></input>
        <input type="text" placeholder="confirm password"></input>
        <input type="submit"></input>
      </form>
    </>
  );
};

export default SubmitForm;
