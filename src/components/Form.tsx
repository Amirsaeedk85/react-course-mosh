import { FormEvent, useRef, useState } from "react";
import { useForm, FieldValues } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { z } from "zod";

const schema = z.object({
  name: z.string().min(3, { message: "name must be at least characters" }),
  age: z
    .number({ invalid_type_error: "age field is required" })
    .min(18, { message: "age must be at least 18" }),
});
type FormData = z.infer<typeof schema>;

const Form = () => {
  const form = useForm<FormData>({ resolver: zodResolver(schema) });
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = form;

  const onSubmit = (data: FieldValues) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          {...register("name")}
          id="name"
          type="text"
          className="form-control"
        />
        {errors.name && <p className="text-danger">{errors.name.message}</p>}
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input
          {...register("age", { valueAsNumber: true })}
          id="age"
          type="number"
          className="form-control"
        />
        {errors.age && <p className="text-danger">{errors.age.message}</p>}
      </div>
      <button disabled={!isValid} className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default Form;
