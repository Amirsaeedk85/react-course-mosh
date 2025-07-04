interface Props {
  cartItems: string[];
  onClear: () => void;
}

const Cart = ({ cartItems, onClear }: Props) => {
  return (
    <>
      <p>cart Items:</p>
      <ul>
        {cartItems.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
      <button onClick={onClear}>clear cart</button>
    </>
  );
};

export default Cart;
