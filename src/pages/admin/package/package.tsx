
import PageHeader from "../header/page-header";
import PackageList from "./list";


const PackagePage = () => {
  return (
    <main className="h-full w-full ">
      <PageHeader
        title="All Posted Packages"
        button_text="Create Package"
        link={"/admin/packages/create"}
      />

      {/* list */}
      <div className="">
        <PackageList />
      </div>
    </main>
  );
};

export default PackagePage;
