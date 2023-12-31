import { SVGProps } from "react";


type Props = {
 height?: number;
 width?: number;
 "aria-label"?: string;
 className?: string;
} & SVGProps<SVGSVGElement>;


const UnitIcon = ({
 height = 80,
 width = 80,
 "aria-label": ariaLabel,
 className,
 ...props
}: Props) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    id="Filled" 
    viewBox="0 0 24 24" 
    width={width} 
    height={height}>
      <path d="M7,12a4.969,4.969,0,0,1,.833-2.753L2.845,4.259a11.954,11.954,0,0,0,0,15.482l4.988-4.988A4.969,4.969,0,0,1,7,12Z"/><path d="M21.155,4.259,16.167,9.247a4.966,4.966,0,0,1,0,5.506l4.988,4.988a11.954,11.954,0,0,0,0-15.482Z"/><path d="M12,17a4.969,4.969,0,0,1-2.753-.833L4.259,21.155a11.954,11.954,0,0,0,15.482,0l-4.988-4.988A4.969,4.969,0,0,1,12,17Z"/><path d="M12,7a4.969,4.969,0,0,1,2.753.833l4.988-4.988a11.954,11.954,0,0,0-15.482,0L9.247,7.833A4.969,4.969,0,0,1,12,7Z"/>
  </svg>
);
export { UnitIcon };