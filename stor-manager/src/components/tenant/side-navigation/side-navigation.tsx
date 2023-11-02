import React, { useState } from "react";
import { CaretIcon } from "../../icons/caret-icon";
import classNames from "classnames";
import { sideNavigationItem } from '@/interfaces/side-navigation-item'
import SideNavigationItem from "./side-navigation-item";
import { MarkerIcon } from "../../icons/marker-icon";
import { HomeIcon } from "../../icons/home-icon";
import { UserIcon } from "../../icons/user-icon";
import { UnitIcon } from "../../icons/unit-icon";
import { StatsIcon } from "../../icons/stats-icon";
import { useSession } from "next-auth/react";

const navigationItems: sideNavigationItem[] = [
    {
        title: 'Home',
        link: '/',
        icon: <HomeIcon height={20} width={20} />
    },
    {
        title: 'Units',
        link: '/units/',
        icon: <UnitIcon height={20} width={20} />
    },
    {
        title: 'Tenants',
        link: '/tenants/',
        icon: <UserIcon height={20} width={20} />
    },
    {
        title: 'Reports',
        link: '/reports/',
        icon: <StatsIcon height={20} width={20} />
    },
    
]

function SideNav() {
    const [open, setOpen] = useState(true);
    function handleOpen() {
        setOpen(!open);
    }
    const { data, status } = useSession();
    const loading = status === 'loading';
    return (
        <>
        {
            data? 
            <div className={`max-w-fit transition-all duration-500 bg-red-500 flex flex-col justify-start`}>
            <button onClick={handleOpen} className='bg-green-400 p-2'>
                <div className={`rotate-90 w-fit bg-blue-300 `}>
                    <CaretIcon
                    height={20}
                    width={20}
                    className={open? '' : 'rotate-180'}/>
                </div>
            </button>
            <div className='flex flex-col'>
                {navigationItems.map((item, i) => (
                    <SideNavigationItem key={i} title={item.title} link={item.link} open={open} icon={item.icon} />
                ))}
            </div>
            </div>
            :
            <></>
        }
        </>

    );
  }
  
  export default SideNav;