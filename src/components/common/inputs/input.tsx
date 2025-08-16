 import React from 'react'
import { LuAsterisk } from 'react-icons/lu';


interface IProps {
  label: string;
  id: string;
  placeholder?: string,
  type?: 'text' | 'number' | "password",
  required?: boolean, 
  name: string, 
  onChange?:(e:React.ChangeEvent<HTMLInputElement>) => void 

}

const Input: React.FC<IProps> = ({ label, id, placeholder = 'start typing here..', type = 'text', required = false, 
name,  onChange
 }) => {
  return(
      <div className="flex flex-col gap-1">
    <div className='flex'>
          <label htmlFor="id" className="text-lg font-normal text-gary-500">
            {label}
              </label> 
              
         {  required && <LuAsterisk  className='text-red-400'/>}
</div>
      <input 
        onChange={(onChange)} 
        
            className="text-gray-8000 placeholder-500: text-gray-600  border border-emerald-200 px-2 py-3  rounded-md focus:outline-emerald-200"
            placeholder={placeholder}
            id={id}
        type={type}
        name ={name}
          />
        </div>
  )
}
export default Input
