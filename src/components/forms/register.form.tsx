
import type { IRegisterData } from "../../interface/auth.interface"
import Button from "../common/inputs/button";
import Input from "../common/inputs/input"
import { useForm } from "react-hook-form"
import GenderSelect from "../common/select-inputs/gender.select" 
import { useMutation } from "@tanstack/react-query"; 
import {  regsiterUser } from "../../api/auth.api" 
import toast from "react-hot-toast"; 
import { useNavigate } from "react-router";
import { Gender } from "../../interface/enum.types";

const RegisterForm = () => {
  const navigate= useNavigate ()
     const { register, handleSubmit,control } = useForm({
        defaultValues: {
            phone: '',
            email: '',
            gender: Gender.MALE,
            password: '',
            last_name: '',
            first_name: '',
            confirm_password: '',

        }
    })
     
  
  //mutation  
  const { mutate, isPending } = useMutation({
    mutationFn: regsiterUser,
    onSuccess: (response) => {
      console.log(response)
      toast.success(response.message ?? 'Account created.')
    
      navigate('/login')
    },
    onError: (error) => {
      console.log(error)
      toast.error(error.message ?? 'Something went wrong')
    
    }
  })
  

    const onSubmit = (data: IRegisterData) => {
        mutate(data)
    }


    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mt-6 flex flex-col gap-4">
                    <div className="grid md:grid-cols-2 gap-4">
                        <Input
                            label="First Name"
                            id="first_name"
                            placeholder={"John"}
                            type="text"
                            key={'first_name_input'}
                            required={true}
                            name='first_name'
                            register={register}

                        />
                        <Input
                            label="Last Name"
                            id="last_name"
                            placeholder={"Doe"}
                            type="text"
                            key={'last_name_input'}
                            required={true}
                            name='last_name'
                            register={register}

                        />
                    </div>

                    {/* email input */}
                    <Input
                        label="Email"
                        id="email"
                        placeholder={"example@gmail.com"}
                        type="text"
                        key={'email_input'}
                        required={true}
                        name='email'
                        register={register}

                    />


                    {/* password */}
                    <Input
                        label="Password"
                        id="password"
                        placeholder="xxxxxxxxxxxxx"
                        type="password"
                        required={true}
                        name='password'
                        register={register}

                    />


                    {/* confirm password */}
                    <Input
                        label="Confirm Password"
                        id="confirm_password"
                        placeholder="xxxxxxxxxxxxx"
                        type="password"
                        required={true}
                        name='confirm_password'
                        register={register}

                    />


                    {/* phone */}
                    <Input
                        label="Phone"
                        id="phone"
                        placeholder="9865487678"
                        type="text"
                        name='phone'
                        register={register}

                    />

                    {/* Gender*/}
                   <GenderSelect
              
                   control={control}
                   />



                    {/* button */}
                    <div className="w-full mt-6">
              <Button
                disabled={isPending}
                label={isPending? " Signing up" :"Sign Up" }
                            type="submit" 
                        />
                    </div>
                </div>
            </form>
        </div>
    )
}

export default RegisterForm