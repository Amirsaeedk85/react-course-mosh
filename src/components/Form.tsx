import { ChangeEvent } from "react";
import { useForm, FieldValues } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { z } from "zod";
import { useState } from "react";

interface Props {
  formUpdated: (data: any) => void;
  categories: string[];
}
//form business:

const schema = z.object({
  description: z
    .string()
    .min(3, { message: "description must be at least 3 characters" }),
  amount: z
    .number({ invalid_type_error: "Amount is required" })
    .min(1, "Amount is required"),
  category: z.string(),
});

type FormData = z.infer<typeof schema>;

const Form = ({ formUpdated, categories }: Props) => {
  const [category, setCategory] = useState("");

  const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    console.log(e.target.value);
    setCategory(e.target.value);
  };

  const form = useForm<FormData>({ resolver: zodResolver(schema) });
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = form;

  const onSubmit = (data: FieldValues) => formUpdated(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <input
          {...register("description")}
          id="name"
          type="text"
          className="form-control"
        />
        {errors.description && (
          <p className="text-danger">{errors.description.message}</p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Amount
        </label>
        <input
          {...register("amount", { valueAsNumber: true })}
          id="amount"
          type="number"
          className="form-control"
        />
        {errors.amount && (
          <p className="text-danger">{errors.amount.message}</p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="category" className="form-label"></label>
        <select
          {...register("category")}
          id="category"
          className="form-select"
          onChange={handleSelectChange}
        >
          {categories.map((item, index) => (
            <option value={item} key={index}>
              {item}
            </option>
          ))}
        </select>
      </div>
      <button disabled={!isValid} className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default Form;
