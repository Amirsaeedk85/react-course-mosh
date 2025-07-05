import { useState } from "react";
import ExpandibleText from "./components/ExpandibleText";
function App() {
  return (
    <>
      <ExpandibleText maxChars={10}>Lorem</ExpandibleText>
    </>
  );
}

export default App;
