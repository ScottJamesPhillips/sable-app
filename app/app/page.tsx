import CompliantBonds from "@/components/app/compliant_bonds";

function AppHome() {
  return (
    <div className="flex h-screen grid grid-cols-7 grid-rows-5 gap-0 max-h-screen overflow-hidden text-white">
      <div className="bg-sable-green-bg row-start-1 col-start-2 col-span-5 row-span-2 p-5 rounded-md m-5 flex items-stretch overflow-x-auto">
        <CompliantBonds />
      </div>

      {/* Table */}
      <div className="flex bg-red-200 col-start-2 row-start-3 col-span-5 row-span-2"></div>
    </div>
  );
}

export default AppHome;
