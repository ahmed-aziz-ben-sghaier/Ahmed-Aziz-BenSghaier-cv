import {FC, memo} from 'react';

export interface IconProps extends React.HTMLAttributes<SVGSVGElement> {
  svgRef?: React.Ref<SVGSVGElement>;
  transform?: string;
  viewBox?: string; // Allow viewBox to be passed as a prop
  width?: number; // Allow width to be passed as a prop
  height?: number; // Allow height to be passed as a prop
}

const Icon: FC<IconProps> = memo(
  ({children, className, svgRef, transform, viewBox = '0 0 128 128', width = 128, height = 128, ...props}) => (
    <svg
      className={className}
      fill="currentColor"
      height={height}
      ref={svgRef}
      transform={transform}
      viewBox={viewBox}
      width={width}
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      {children}
    </svg>
  ),
);

export default Icon;
