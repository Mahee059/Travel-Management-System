import { MdAdd } from "react-icons/md"
import { Link } from "react-router"
 



interface Iprops { 
    title: string, 
    link?: string, 
    button_text?:string

}
 const PageHeader: React.FC<Iprops> = ({title,button_text,link='#'}) => {
     return ( 
   
         <div>
             <div  className=" flex justify-between"> 
                 <h1 className="text-lg font-semibold text-gray-600"> {title }</h1>
             </div>
             {button_text && <Link to={link}>
                 <button className=" cursor-pointer flex items-center justify-between gap-2 border border-gray-400 py- px-3 rounded-md">
                     <MdAdd size={26} />
                     <span className="font-semibold text-lg"> {button_text}</span>

                 </button>
             </Link>}
    </div>
  )
}
export default PageHeader