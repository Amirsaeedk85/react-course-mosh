import ListGroup from "./components/ListGroup";
function App() {
  const items = ["Newyork", "Sanfrancisco", "London"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <ListGroup
        items={items}
        heading="ListGroup"
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}

export default App;
