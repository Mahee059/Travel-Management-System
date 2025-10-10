import { useParams } from "react-router";
import UpdatePackage from "../../../components/admin/package/update-package";
import PageHeader from "../../../components/admin/header/page-header";

const UpdatePage = () => {
  const { id } = useParams();

  return (
    <main className="h-full w-full">
      <PageHeader title="Add New Packages" />
      {/* form */}
      <div className="h-full w-full">
        <UpdatePackage id={id ?? ""} />
      </div>
    </main>
  );
};

export default UpdatePage;
