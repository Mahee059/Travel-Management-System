import React from 'react' 


interface IProps { 
    label: string, 
    type?:"submit" | "reset" | "button"
 }
export const Button: React.FC <IProps> = ({label ='Button',type = 'button'}) => {
    return ( 
        <button  
            type = {type}
            
    className="cursor-pointer bg-emerald-500 w-full py-3 text-white rounded-md font-bold hover:bg-emerald-600 tarnsition-all duration-300">
            {label}
          </button>
  )
}
export default Button