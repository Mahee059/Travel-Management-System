import { BiSolidEdit } from "react-icons/bi"
import { BsTrash3 } from "react-icons/bs"
import { Link } from "react-router"

interface IActions {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    info: any
    onDlete?: () => void
    edit_link?: string
}

const ActionButtons: React.FC<IActions> = ({onDlete=()=>{},edit_link='#'}) => {
    return (
        <div className='flex items-center justify-center gap-3'>
            <Link to={edit_link}>
            <BiSolidEdit  size={22} className='text-emerald-700 cursor-pointer'/>
            </Link>
            <BsTrash3 onClick={onDlete} size={18} className='text-red-500 cursor-pointer '/>
        </div>
    )
}

export default ActionButtons