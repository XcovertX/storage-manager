import { SVGProps } from "react";


type Props = {
 height?: number;
 width?: number;
 "aria-label"?: string;
 className?: string;
} & SVGProps<SVGSVGElement>;


const StatsIcon = ({
 height = 80,
 width = 80,
 "aria-label": ariaLabel,
 className,
 ...props
}: Props) => (
  <svg 
  xmlns="http://www.w3.org/2000/svg" 
  id="Bold" 
  viewBox="0 0 24 24" 
  width={width} 
  height={height}>
    <path d="M5.5,21A2.5,2.5,0,0,1,3,18.5V1.5A1.5,1.5,0,0,0,1.5,0h0A1.5,1.5,0,0,0,0,1.5v17A5.5,5.5,0,0,0,5.5,24h17A1.5,1.5,0,0,0,24,22.5h0A1.5,1.5,0,0,0,22.5,21Z"/>
    <path d="M19.5,18A1.5,1.5,0,0,0,21,16.5v-6a1.5,1.5,0,0,0-3,0v6A1.5,1.5,0,0,0,19.5,18Z"/>
    <path d="M7.5,18A1.5,1.5,0,0,0,9,16.5v-6a1.5,1.5,0,0,0-3,0v6A1.5,1.5,0,0,0,7.5,18Z"/>
    <path d="M13.5,18A1.5,1.5,0,0,0,15,16.5V5.5a1.5,1.5,0,0,0-3,0v11A1.5,1.5,0,0,0,13.5,18Z"/>
  </svg>

  
);
export { StatsIcon };