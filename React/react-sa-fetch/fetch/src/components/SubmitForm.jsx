import { useForm } from "react-hook-form";
import * as yup from "react-hooks-yup-form";

const SubmitForm = () => {
  const schema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email(),
    age: yup.number().positive().min(18).max(120),
    password: yup.number().required(),
    confirmPassword: yup.number().required(),
  });

  const { register, handleSubmit } = useForm();

  const onFormSubmit = (data) => {
    console.log("form was submitted");
    console.log(data);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onFormSubmit)}>
        <input type="text" placeholder="name" {...register("name")}></input>
        <input type="text" placeholder="email" {...register("email")}></input>
        <input type="number" placeholder="age" {...register("age")}></input>
        <input
          type="password"
          placeholder="password"
          {...register("password")}
        ></input>
        <input
          type="password"
          placeholder="confirm password"
          {...register("confirmPassword")}
        ></input>
        <input type="submit"></input>
      </form>
    </>
  );
};

export default SubmitForm;
