import { useRef, useCallback } from "react"
import { AgGridReact } from "ag-grid-react"
import DataGridButtons from "../DataGridButtons/DataGridButtons"
import "ag-grid-community/styles/ag-grid.css"
import "ag-grid-community/styles/ag-theme-alpine.css"
import "./DataGrid.css"

function DataGrid({ openEditModal, rowData, deleteRow }) {
  const gridRef = useRef(null)

  const columnDefs = [
    {
      field: "",
      cellRenderer: (props) => (
        <DataGridButtons
          openEditModal={openEditModal}
          deleteRow={deleteRow}
          {...props} />
      )
    },
    { field: "id", filter: true },
    { field: "name", filter: true },
    { field: "age", filter: true }
  ]

  const onFirstDataRendered = useCallback((params) => {
    gridRef.current.api.sizeColumnsToFit();
  }, []);

  return (
    <div className="ag-theme-alpine data-grid-wrapper">
      <AgGridReact
        ref={gridRef}
        rowData={rowData}
        columnDefs={columnDefs}
        onFirstDataRendered={onFirstDataRendered}
      />
    </div>
  )
}

export default DataGrid
