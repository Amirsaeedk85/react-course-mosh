import { useState } from "react";
import Table from "./components/Table";
import Form from "./components/Form";

//constant
const categories: string[] = ["Groceries", "Utilities", "Entertainment"];

function App() {
  const [tableData, setTableData] = useState<string[]>([]);

  //form update
  const formUpdated = (data: any) => {
    setTableData([...tableData, data]);
  };

  //delete a row
  const deleteClicked = (deleteIndex: number) => {
    console.log(deleteIndex);
    setTableData(tableData.filter((z) => z !== tableData[deleteIndex]));
  };

  return (
    <>
      <Form formUpdated={formUpdated} categories={categories}></Form>
      {tableData.length && (
        <Table deleteClicked={deleteClicked} tableData={tableData}></Table>
      )}
    </>
  );
}

export default App;
