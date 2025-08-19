
import type { IRegisterData } from "../../interface/auth.interface"
import Button from "../common/button"
import Input from "../common/inputs/input"
import{useForm} from "react-hook-form"

const RegisterForm = () => {
  const { register,handleSubmit} = useForm({ 
    defaultValues: { 
      phone: '',
      email: '',
      Gender:'',
      password: '',
      first_name: '',
      last_name: '', 
      confirm_password:'',
      
      
        }
  }) 
  
    

    const onSubmit =(data:IRegisterData) =>{
     
      console.log("form submitted",data)
      

        
    }


    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mt-6 flex flex-col gap-4">
                    <div className="grid grid-cols-2 gap-4">
                        <Input
                        label="First Name"
                        id="first_name"
                        placeholder={"John"}
                        type="text"
                        key={'first_name_input'}
                        required={true}
                        name='first_name'
                        register ={register}
                    
                    />
                     <Input
                        label="Last Name"
                        id="last_name"
                        placeholder={"Doe"}
                        type="text"
                        key={'last_name_input'}
                        required={true}
                        name='last_name'
                      register ={register}
                    
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
                        register ={register}
                    
                    />

                
                    {/* password */}
                    <Input
                        label="Password"
                        id="password"
                        placeholder="xxxxxxxxxxxxx"
                        type="password"
                        required={true}
                        name='password'
                        register ={register}

                    />


                    {/* confirm password */}
                    <Input
                        label="Confirm Password"
                        id="confirm_password"
                        placeholder="xxxxxxxxxxxxx"
                        type="password"
                        required={true}
                        name='confirm_password'
                      register ={register}

                    />


                    {/* phone */}
                    <Input
                        label="Phone"
                        id="phone"
                        placeholder="9865487678"
                        type="text"
                        name='phone'
                        register ={register}

                    />

                       {/* Gender*/}
                    <Input
                        label="Gender"
                        id="phone"
                        placeholder="Male"
                        type="text"
                        name='phone'
                        register ={register}

                    />

                    

                    {/* button */}
                    <div className="w-full mt-6">
                       <Button 
                        label="Sign Up"
                        type="submit"
                       />
                    </div>
                </div>
            </form>
        </div>
    )
}

export default RegisterForm