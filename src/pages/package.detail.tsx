import { useParams } from "react-router"
import PackageDetail from "../components/package/detail"
import { useQuery } from "@tanstack/react-query"
import { get_by_id } from "../api/package.api"
import ComponentTitle from "../components/common/component-title"

const PackgaeDetailPage = () => {
  const { id } = useParams()
  const {data,isLoading } = useQuery({
    queryFn: () => { return get_by_id(id ?? '') },
    queryKey:['get_package_by_id']
  })

  if (isLoading) {
    return <div className="h-screen w-screen flex items-center justify-center">
      <p className="text-xl text-emerald-700 tracking-widest ">Loading....</p>
    </div>
  }
  return (
      <main className="px-32 mt-6"> 
          <ComponentTitle
        title={data?.data?.title}
        sub_title={data?.data?.description}
          />
          
      <PackageDetail tour_package={data?.data ?? {}} />
              
    </main>
  )
}

export default PackgaeDetailPage