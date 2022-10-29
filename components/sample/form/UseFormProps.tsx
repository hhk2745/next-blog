import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

interface IFormInputs {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const onSubmit: SubmitHandler<IFormInputs> = (data) => {
  console.log(data);
};

const UseFormProps = () => {
  const schema = yup.object().shape({
    firstName: yup.string().required("firstname is required."),
    lastName: yup.string().required("lastname is required"),
    email: yup.string().email().required("email is required"),
    password: yup
      .string()
      .min(8)
      .max(15)
      .required("password must be 8 - 15 characters."),
    confirmPassword: yup.string().oneOf([yup.ref("password"), null]),
  });

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
  });

  return (
    <>
      <h2>- UseFormProps</h2>
      <div className="description">#IFormInputs #yup</div>

      <div className="article">
        <form onSubmit={handleSubmit((d) => console.log(d))}>
          <label>First Name</label>
          <input {...register("firstName", { required: true })} />
          {errors.firstName && (
            <span className="error">First name is required</span>
          )}
          <label>Last Name</label>
          <input {...register("lastName", { required: false })} />
          {errors.lastName && (
            <span className="error">Last name is required</span>
          )}

          <label>Email</label>
          <input {...register("email", { required: true })} />
          {errors.email && <span className="error">Email plz</span>}

          <label>Password</label>
          <input
            type={"password"}
            {...register("password", { required: true })}
          />
          {errors.password && (
            <span className="error">required 8-15 characters</span>
          )}

          <label>Confirm Password</label>
          <input
            type={"password"}
            {...register("confirmPassword", { required: true })}
          />
          {errors.confirmPassword && <span className="error">not matched</span>}

          <input type="submit" />
        </form>
      </div>
    </>
  );
};

export default UseFormProps;
