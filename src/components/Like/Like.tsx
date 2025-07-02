import { useState } from "react";
import { AiFillHeart } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";

interface Props {
  onClick: () => void;
  size?: string;
  color?: string;
}

const Like = ({ onClick, size, color }: Props) => {
  const [state, setState] = useState(false);
  const toggle = () => {
    setState(!state);
    onClick();
  };

  if (state) return <AiFillHeart size={size} color={color} onClick={toggle} />;
  return <AiOutlineHeart size={size} color={color} onClick={toggle} />;
};

export default Like;
