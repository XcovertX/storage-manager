import { generalUnitInfo } from "@/interfaces/unit-info";
import Link from "next/link";
import classNames from "classnames";

// chan

export const storageUnit = ({ size, vacant, link, number }: generalUnitInfo) => {
    const styling = `text-sm border-2 border-black ${vacant? 'hover:bg-green-500' : 'hover:bg-red-500'}`;
    switch (size) {
        case '5x5':   return <Link className={classNames(styling, 'w-[5px]  h-[5px]')}  href={link}>{number}</Link>
        case '5x10':  return <Link className={classNames(styling, 'w-[5px]  h-[10px]')} href={link}>{number}</Link>
        case '10x5':  return <Link className={classNames(styling, 'w-[10px] h-[5px]')}  href={link}>{number}</Link>
        case '5x20':  return <Link className={classNames(styling, 'w-[5px]  h-[20px]')} href={link}>{number}</Link>
        case '10x10': return <Link className={classNames(styling, 'w-[10px] h-[10px]')} href={link}>{number}</Link>
        case '10x12': return <Link className={classNames(styling, 'w-[10px] h-[12px]')} href={link}>{number}</Link>
        case '10x15': return <Link className={classNames(styling, 'w-[10px] h-[15px]')} href={link}>{number}</Link>
        
    }
}
