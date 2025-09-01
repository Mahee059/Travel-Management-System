import { IoChevronDown } from "react-icons/io5"
import { Link } from "react-router"

interface IProps { 
    title: string, 
    sub_title: string 
    link?: string, 
    
} 

 const ComponentTitle: React.FC <IProps> = ({title, sub_title,link}) => {
  return (
      <div> 
          <div className="flex justify-between items-center">
                  {/* heading */}
                  <div>
                    <h1 className="text-4xl font-bold text-emerald-700 ">
                {title}
                    </h1>
                    <p className="mt-2 text-md text-gray-600">
                {sub_title}
                    </p>
                  </div>
          
                  {/* explore all */}
                    {link && <Link to={link} className="flex gap-1 items-center text-gray-600">
                    <p className="text-sm">Explore all</p>
                 <IoChevronDown size={19} /> 
              </Link > 
              }

          </div> 
          </div>
           
      
  )
} 
export default ComponentTitle
