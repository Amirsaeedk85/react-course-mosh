import React from "react";
import { MouseEventHandler } from "react";
interface Props {
  tableData: any[];
  deleteClicked: (index: number) => void;
}

const Table = ({ tableData, deleteClicked }: Props) => {
  const handleDelete = (e: any) => deleteClicked(e.target.value);

  return (
    <>
      <table className="table bordered text-center">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Description</th>
            <th scope="col">Amount</th>
            <th scope="col">Category</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((item, index) => (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td>{item.description}</td>
              <td>{item.amount}</td>
              <td>{item.category}</td>
              <td>
                <button
                  type="button"
                  className="btn  btn-danger"
                  value={index}
                  onClick={handleDelete}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Table;
