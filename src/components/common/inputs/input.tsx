 import React from 'react'
import { LuAsterisk } from 'react-icons/lu';


interface IProps {
  label: string;
  id: string;
  placeholder?: string,
  type?: 'text' | 'number' | "password",
  required?: boolean, 
  name: string, 
  register?: any 
  error?:string 

}

const Input: React.FC<IProps> = ({ label, id, placeholder = 'start typing here..', type = 'text', required = false, 
name, register, error

 }) => {
  return(
      <div className="flex flex-col gap-1">
    <div className='flex'>
          <label htmlFor="id" className="text-lg font-normal text-gray-500">
            {label}
              </label> 
              
         {  required && <LuAsterisk  className='text-red-400'/>}
</div>
      <input 
        {...register(name)}
        className={`text-gray-900 placeholder:text-gray-400   px-2 py-3.5 rounded-md border ${error ? 'focus:outline-red-500 border-red-500' : 'focus:outline-emerald-400 border-emerald-200'}`}
        id={id}
        type={type}
        name={name}
        placeholder={placeholder}
      />
      <p className='h-1 text-xs text-red-500'> {error ?  error:''} </p>
        </div>
  )
}
export default Input
