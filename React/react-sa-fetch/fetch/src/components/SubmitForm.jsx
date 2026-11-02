import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
const SubmitForm = () => {
  const schema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email(),
    age: yup.number().positive().min(18).max(120),
    password: yup
      .string()
      .min(4)
      .max(15)
      .matches(/[a-z] + /)
      .required(),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")])
      .required(),
  });

  const { register, handleSubmit } = useForm({ resolver: yupResolver(schema) });

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
