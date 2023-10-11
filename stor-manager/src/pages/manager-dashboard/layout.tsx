import SideNav from "@/components/side-navigation/side-navigation";

type Props = {
  children: React.ReactNode
}

function ManagerDashboardLayout({ children }: Props) {
    return (
      <div className="flex flex-col h-full grow justify-start bg-blue-500">
        <div className="flex flex-row justify-start h-full grow">
          <SideNav />
          <div className="w-full">
            {children}
          </div>
        </div>
      </div>
    );
  }
  
  export default ManagerDashboardLayout;