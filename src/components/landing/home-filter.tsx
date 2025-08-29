import { LuSearch } from "react-icons/lu"


 const Filter = () => {
  return (
      <div className="flex min-w-[600px] bg-[#f8f8f8] roounded-md shadow-lg px-3 py-2">
          <input 
              className="Outline-none px-3 py-1 border-r border-gray-400" 
              placeholder="Pokhara"  
          />
          <input className="outline-none px-3 py-1border-r border-gray-400 " placeholder="date" type="date" />
          <input className="outline-none px-3  py-1 border-r border-gray-400 w-[150px] text-center" placeholder="Guest" type="number" min={1} />
          <div className="bg-white flex items-Center justify-center w-fit px-2 cursor-pointer"> 
              <LuSearch className="text-gray-700" size={24} />
</div>
      
      </div>
  )
} 

export default Filter  
//poular destinations
//->
//why choose us
//how it works
//special offer  Banner 
//CTA banner -
