import { useState } from "react"
import Button from "../common/button"
import Input from "../common/inputs/input"

const Loginform = () => {


  const [formData, setFormData] = useState({ 
    email: '', 
    password:''
  }) 
  
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => { 
    console.log(`input changes`, e.target.name, e.target.value)
    const name = e.target.name 
    const value = e.target.value 

    setFormData({ ...formData, [name]: value})
  } 
  
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => { 
    e.preventDefault() 
     console.log("form Submitted")
 }
 

  
 
  return (
      <div>
      <form onSubmit={onSubmit }> 
              {/* Login form */}
              <div className="mt-6 flex flex-col gap-4">
                  
                  <Input 
                      label="Email"
                      id="email"
                      placeholder="{email@gmail.com}"
                      type="text"
                      key={'email_input'}
            required={true} 
            name = 'email'
            onChange={onChange}
                      
                  />
          

                  <Input 
                      label="Password"
                      id="Password"
                      placeholder="xxxxxxxxxxxxx"
            type="password"
            name = 'password'
                     required = {true}

                  />
   
            
       
        {/* button      */}
        <div className="w-full mt-6">
            <Button
              label="Sign In" 
              type ="submit"
            />
                  </div>
                  </div>
              
          </form>
</div>
  )
}

export default Loginform