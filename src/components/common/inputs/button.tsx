import React from 'react'

interface IProps {
    label:string;
    type?:"submit" | "reset" | "button",
    disabled?:boolean
}

const Button:React.FC<IProps> = ({label='Button',type='button',disabled=false}) => {
    return (
        <button 
            disabled={disabled}
            type={type}
            className="cursor-pointer bg-emerald-500  w-full py-3 text-white rounded-md font-bold hover:bg-emerald-600 transition-all duration-300 disabled:cursor-not-allowed disabled:bg-emerald-400"
        >
            {label}
        </button>
    )
}

export default Button