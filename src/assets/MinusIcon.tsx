import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
import { memo } from 'react';
const MinusIcons = (props: SvgProps) => (
  <Svg width={24} height={24} fill='none' {...props}>
    <Path
      fill='#8047F8'
      fillRule='evenodd'
      d='M2.188 10c0-.518.42-.938.937-.938h13.75a.937.937 0 1 1 0 1.876H3.125A.937.937 0 0 1 2.187 10Z'
      clipRule='evenodd'
    />
  </Svg>
);
const Memo = memo(MinusIcons);
export default Memo;
