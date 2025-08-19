
import { yupResolver } from "@hookform/resolvers/yup"
import type { ILoginData } from "../../interface/auth.interface"
import Button from "../common/button"
import Input from "../common/inputs/input"
import {useForm} from "react-hook-form"
import * as yup from 'yup'


const loginSchema = yup.object({
  email: yup.string().required(`email is required`).email(`ivalid email format`), 
  password:yup.string().required(`password is requred`)
}) 



const LoginForm = ()=> {

  const { register, handleSubmit, formState:{errors}} = useForm({ 
    defaultValues: { 
      email:'',
      password:''
    },
    resolver:yupResolver(loginSchema)

  }) 
      console.log(errors)


    const onSubmit = (data: ILoginData) => {
    
        console.log("form submitted", data)
    }


    return (
        <div>
            <form onSubmit={handleSubmit (onSubmit)}>
                <div className="mt-6 flex flex-col gap-4">
                    {/* email input */}
                    <Input
                        label="Email"
                        id="email"
                        placeholder={"example@gmail.com"}
                        type="text"
                        key={'email_input'}
                        required ={true}
                        name='email'
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
                        name='password'
              register={register}
               error={errors.email?.message}

                    />

                    

                    {/* button */}
                    <div className="w-full mt-6">
                       <Button 
                        label="Sign In"
                        type="submit"
                       />
                    </div>
                </div>
            </form>
        </div>
    )
}

export default LoginForm