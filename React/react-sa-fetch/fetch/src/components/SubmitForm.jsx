import { useForm } from "react-hook-form";

const SubmitForm = () => {
  const { register, handleSubmit } = useForm();

  const onFormSubmit = () => {
    console.log("form was submitted");
  };

  return (
    <>
      <form onSubmit={handleSubmit(onFormSubmit)}>
        <input type="text" placeholder="name" {...register("name")}></input>
        <input type="text" placeholder="email" {...register("email")}></input>
        <input type="number" placeholder="age" {...register("age")}></input>
        <input
          type="text"
          placeholder="password"
          {...register("password")}
        ></input>
        <input
          type="text"
          placeholder="confirm password"
          {...register("confirm password")}
        ></input>
        <input type="submit"></input>
      </form>
    </>
  );
};

export default SubmitForm;
