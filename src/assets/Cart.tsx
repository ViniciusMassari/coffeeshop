import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
import { memo } from 'react';
interface CartProps extends SvgProps {
  pathFill?: string;
}
const CartSVG = (props: CartProps) => (
  <Svg width={40} height={40} fill='none' {...props}>
    <Path
      fill={props.pathFill ?? '#fff'}
      d='m25.492 13.11-.953 5.226a1.875 1.875 0 0 1-1.844 1.539h-9.062l.344 1.875h8.398A1.875 1.875 0 1 1 20.609 23h-4.593a1.875 1.875 0 1 1-3.188-.594L10.664 10.5H9.25a.625.625 0 1 1 0-1.25h1.414a1.25 1.25 0 0 1 1.227 1.023l.382 2.102h12.602a.617.617 0 0 1 .477.227.6.6 0 0 1 .14.507Z'
    />
  </Svg>
);
const Cart = memo(CartSVG);
export default Cart;
