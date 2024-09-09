import { useDispatch, useSelector } from '@/store';
import { addCart, removeCart, resetCart, updateCart } from '@/store/cart';

export default function () {
  const currentCart = useSelector(state => state.cart);
  const dispatch = useDispatch();
  const add = (
    productId: string,
    item: { isChecked: boolean; quantity: number },
    method: 'service&solution' | 'product' | 'course',
  ) => {
    const number = Object.keys(currentCart.items).length;
    if (!currentCart.items?.[productId]) {
      dispatch(
        addCart({
          id: productId,
          item: { ...item, no: number + 1 },
          method,
        }),
      );
    }
  };

  const update = (
    productId: string,
    item: { isChecked?: boolean; quantity?: number },
    method: 'service&solution' | 'product' | 'course',
  ) => {
    dispatch(updateCart({ id: productId, item: item, method }));
  };

  const remove = (
    productId: string,
    method: 'service&solution' | 'product' | 'course',
  ) => {
    dispatch(removeCart({ id: productId, method }));
  };

  const reset = () => {
    dispatch(resetCart());
  };

  return {
    currentCart,
    add,
    update,
    remove,
    reset,
  };
}
