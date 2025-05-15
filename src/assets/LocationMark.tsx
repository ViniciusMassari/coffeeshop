import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
import { memo } from 'react';
interface LocationMarkProps extends SvgProps {
  pathFill?: string;
}
const LocationMark = (props: LocationMarkProps) => (
  <Svg width={24} height={24} fill='none' {...props}>
    <Path
      fill={props.pathFill ?? '#8047F8'}
      d='M10 1.25a6.883 6.883 0 0 0-6.875 6.875c0 5.883 6.25 10.328 6.516 10.516a.648.648 0 0 0 .718 0c.266-.188 6.516-4.633 6.516-10.516A6.883 6.883 0 0 0 10 1.25Zm0 4.375a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z'
    />
  </Svg>
);
const LocationMarkIcon = memo(LocationMark);
export default LocationMarkIcon;
