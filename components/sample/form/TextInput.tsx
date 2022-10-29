import { useForm, SubmitHandler } from "react-hook-form";
interface IFormInputs {
  firstName: string;
  lastName: string;
}

const onSubmit: SubmitHandler<IFormInputs> = (data) => console.log(data);

const TextInput = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IFormInputs>();
  return (
    <>
      <h2>- Text Input1</h2>
      <div className="description">#필수 값 체크 #에러 메시지</div>

      <div className="article">
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>First Name</label>
          <input {...register("firstName", { required: true })} />
          {errors.firstName && (
            <span className="error">First name is required</span>
          )}
          <label>Last Name</label>
          <input {...register("lastName", { required: true })} />
          {errors.lastName && (
            <span className="error">Last name is required</span>
          )}
          <input type="submit" />
        </form>
      </div>
    </>
  );
};

export default TextInput;
