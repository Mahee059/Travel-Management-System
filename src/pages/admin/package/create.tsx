import PageHeader from "../header/page-header"
import CreatePackage from "./create-Package"


const CreatePage = () => {
  return (
      <main className="h-full w-full">
          <PageHeader title="Add New Pacakges" /> 
          
          {/* form */} 
          <div className="h-full w-full">
              <CreatePackage/>
              
          </div>
          


      </main>
  )
}

export default CreatePage