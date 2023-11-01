import { SVGProps } from "react";


type Props = {
 height?: number;
 width?: number;
 "aria-label"?: string;
 className?: string;
} & SVGProps<SVGSVGElement>;


const UserIcon = ({
 height = 80,
 width = 80,
 "aria-label": ariaLabel,
 className,
 ...props
}: Props) => (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        id="Layer_1" 
        data-name="Layer 1" 
        viewBox="0 0 24 24" 
        width={width} 
        height={height}>
        <path d="M16.043,14H7.957A4.963,4.963,0,0,0,3,18.957V24H21V18.957A4.963,4.963,0,0,0,16.043,14Z"/>
        <circle cx="12" cy="6" r="6"/>
    </svg>

  
);
export { UserIcon };