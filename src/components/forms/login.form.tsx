import type { ILoginData } from "../../interface/auth.interface";
import Button from "../common/inputs/button";
import Input from "../common/inputs/input";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { login } from "../../api/auth.api";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { loginSchema } from "../../schema/auth.schema";
import { useNavigate } from "react-router";
import { Role } from "../../interface/enum.types";

const LoginForm = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(loginSchema),
  });

  //* login mutation
  const { mutate, isPending } = useMutation({
    mutationFn: login,
    mutationKey: ["login"],
    onSuccess: (response) => {
      console.log(response);
      toast.success(response.message ?? "Login Success");
      console.log(response);
      if (response?.data?.data?.role === Role.USER) {
        navigate("/");
      } else {
        navigate("/admin");
      }
    },
    onError: (error) => {
      console.log("on login failed");
      console.log(error);

      toast.error(error.message ?? "Login Failed");
    },
  });

  const onSubmit = (data: ILoginData) => {
    mutate(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mt-6 flex flex-col gap-4">
          {/* email input */}
          <Input
            label="Email"
            id="email"
            placeholder={"example@gmail.com"}
            type="text"
            key={"email_input"}
            required={true}
            name="email"
            register={register}
            error={errors.email?.message}
          />

          {/* password */}
          <Input
            label="Password"
            id="password"
            placeholder="xxxxxxxxxxxxx"
            type="password"
            required={true}
            name="password"
            register={register}
            error={errors.password?.message}
          />

          {/* button */}
          <div className="w-full mt-6">
            <Button
              disabled={isPending}
              label={isPending ? "Signing In...." : "Sign In"}
              type="submit"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
