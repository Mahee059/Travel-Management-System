
import { useParams } from "react-router-dom";
import UpdatePackage from "../../components/admin/package/update-package";

const Update = () => {
  const { id } = useParams(); 

  return (
    <div>
      <UpdatePackage id={id ||'' } /> 
    </div>
  );
};

export default Update;
