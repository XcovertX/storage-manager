import { SVGProps } from "react";


type Props = {
 height?: number;
 width?: number;
 "aria-label"?: string;
 className?: string;
} & SVGProps<SVGSVGElement>;


const MarkerIcon = ({
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
      <path 
        d="M12,0A10.011,10.011,0,0,0,2,10c0,5.282,8.4,12.533,9.354,13.343l.646.546.646-.546C13.6,22.533,22,15.282,22,10A10.011,10.011,0,0,0,12,0Zm0,15a5,5,0,1,1,5-5A5.006,5.006,0,0,1,12,15Z"/>
      <circle
        cx="12" 
        cy="10" 
        r="3"/>
    </svg>
  
);
export { MarkerIcon };