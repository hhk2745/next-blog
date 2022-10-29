import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
  .object()
  .shape({
    name: yup.string().required(),
    age: yup.number().required(),
  })
  .required();

const Yup = () => {
  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <>
      <h2>- Yup</h2>
      <div className="description">#yup</div>

      <div className="article">
        <form onSubmit={handleSubmit((d) => console.log(d))}>
          <input {...register("name")} />
          <input type="number" {...register("age")} />
          <input type="submit" />
        </form>
      </div>
    </>
  );
};

export default Yup;
