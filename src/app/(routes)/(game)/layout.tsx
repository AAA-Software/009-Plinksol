import DashboardNavbar from "@/components/dashboard/dashboard-navbar";
import Sidebar from "@/components/dashboard/sidebar";

const DashboardLayout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full relative items-center flex px-5 md:px-0">
      <div className=" h-full md:h-full w-full md:w-full">
        <div className="hidden h-full md:flex md:w-72 md:flex-col md:fixed md:insert-y-0">
          <div>
            <Sidebar />
          </div>
        </div>
        <main className="h-full rounded-[25px] md:ml-[270px] mr-5">
          <DashboardNavbar />
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
