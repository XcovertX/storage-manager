import Link from "next/link";
import { sideNavigationItem } from "@/interfaces/side-navigation-item";

type Props = sideNavigationItem & {
    open: boolean
}
  const SideNavigationItem = ({ title, link, open, icon }: Props) => {
    return (
        <Link className="flex flex-row justify-start items-center bg-yellow-300 hover:bg-green-300 p-2" href={link}>
            {icon} 
            <div className={`transition-all duration-500 h-6 ${open? 'ml-2': ''}`}>
                {open? title : ''}
            </div> 
        </Link>
    )
  }
  
  export default SideNavigationItem