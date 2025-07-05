import { useState } from "react";
interface Props {
  children: string;
  maxChars: number;
}

const expandibleText = ({ children, maxChars = 100 }: Props) => {
  const [expanded, setExpanded] = useState(true);

  if (children.length <= maxChars) return <p>{children}</p>;
  const text = expanded ? children : children.substring(0, maxChars);

  return (
    <>
      <p>{text}...</p>
      <button onClick={() => setExpanded(!expanded)}>
        {expanded ? "Less" : "More"}
      </button>
    </>
  );
};

export default expandibleText;
