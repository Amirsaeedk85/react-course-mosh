interface Props {
  itemsLenght: number;
}

const Navbar = ({ itemsLenght }: Props) => {
  return <div>Number of items: {itemsLenght}</div>;
};

export default Navbar;
