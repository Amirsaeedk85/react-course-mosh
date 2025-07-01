import { useState } from "react";
import ListGroup from "./components/ListGroup";
function App() {
  const items = ["Newyork", "Sanfrancisco", "London"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  const [alertVisible, setAlertVisilbe] = useState(false);
  return (
    <>
      <ListGroup
        items={items}
        heading="ListGroup"
        onSelectItem={handleSelectItem}
      />
    </>
  );
}

export default App;
screenLeft;
