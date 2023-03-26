import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import axios from "axios";
import { REGISTER_URL } from "../constants/api";

const schema = yup.object().shape({
  name: yup.string().required().matches(/^[a-zA-Z0-9_]*$/, "Name must not contain punctuation, underscore is allowed."),
  email: yup.string().email("Email must be in a valid format").matches(/(stud\.)?noroff\.no$/, "Email must be a noroff.no or stud.noroff.no email address").required("Email is required"),
  password: yup.string().required().min(6),
  confirmPassword: yup.string().oneOf([yup.ref("password"), null])
});

function RegistrationForm() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(REGISTER_URL, data);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Name</label>
        <input {...register("name")} />
        {errors.name && <span>{errors.name.message}</span>}
      </div>
      <div>
        <label>Email</label>
        <input {...register("email")} />
        {errors.email && <span>{errors.email.message}</span>}
      </div>
      <div>
        <label>Password</label>
        <input type="password" {...register("password")} />
        {errors.password && <span>{errors.password.message}</span>}
      </div>
      <div>
        <label>Confirm Password</label>
        <input type="password" {...register("confirmPassword")} />
        {errors.confirmPassword && <span>{errors.confirmPassword.message}</span>}
      </div>
      <button type="submit">Register</button>
    </form>
  );
}

export default RegistrationForm;