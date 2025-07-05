import { FormEvent, useRef, useState } from "react";
import { useForm, FieldValues } from "react-hook-form";
interface FormData {
  name: string;
  age: number;
}
const Form = () => {
  const form = useForm<FormData>();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = form;
  console.log("formState.errors :", errors);
  const onSubmit = (data: FieldValues) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          {...register("name", { required: true, minLength: 3 })}
          id="name"
          type="text"
          className="form-control"
        />
        {errors.name?.type === "required" && (
          <p className="text-danger">name is required</p>
        )}
        {errors.name?.type === "minLength" && (
          <p className="text-danger">min length is 3 chars</p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input
          {...register("age", { required: true })}
          id="age"
          type="number"
          className="form-control"
        />
        {errors.age?.type === "required" && (
          <p className="text-danger">age is required</p>
        )}
      </div>
      <button className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default Form;
