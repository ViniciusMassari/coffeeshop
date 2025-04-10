import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
import { memo } from 'react';
interface TrashcanProps extends SvgProps {
  pathFill?: string;
}
const Trashcan = (props: TrashcanProps) => (
  <Svg width={24} height={24} fill='none' {...props}>
    <Path
      fill={props.pathFill ?? '#8047F8'}
      fillRule='evenodd'
      d='M2.5 4.375c0-.345.28-.625.625-.625h13.75a.625.625 0 1 1 0 1.25H3.125a.625.625 0 0 1-.625-.625ZM8.125 7.5c.345 0 .625.28.625.625v5a.625.625 0 1 1-1.25 0v-5c0-.345.28-.625.625-.625ZM11.875 7.5c.345 0 .625.28.625.625v5a.625.625 0 1 1-1.25 0v-5c0-.345.28-.625.625-.625Z'
      clipRule='evenodd'
    />
    <Path
      fill={props.pathFill ?? '#8047F8'}
      fillRule='evenodd'
      d='M4.375 3.75c.345 0 .625.28.625.625V16.25h10V4.375a.625.625 0 1 1 1.25 0V16.25A1.25 1.25 0 0 1 15 17.5H5a1.25 1.25 0 0 1-1.25-1.25V4.375c0-.345.28-.625.625-.625Z'
      clipRule='evenodd'
    />
    <Path
      fill={props.pathFill ?? '#8047F8'}
      fillRule='evenodd'
      d='M6.8 1.8c.35-.352.828-.55 1.325-.55h3.75a1.875 1.875 0 0 1 1.875 1.875v1.25a.625.625 0 1 1-1.25 0v-1.25a.625.625 0 0 0-.625-.625h-3.75a.625.625 0 0 0-.625.625v1.25a.625.625 0 1 1-1.25 0v-1.25c0-.497.198-.974.55-1.326Z'
      clipRule='evenodd'
    />
  </Svg>
);
const Memo = memo(Trashcan);
export default Memo;
