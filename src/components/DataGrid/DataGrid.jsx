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
          {...props}
        />
      )
    },
    { field: "country", filter: true },
    { field: "athlete", filter: true },
    { field: "age", filter: true },
    { field: "year", filter: true },
    { field: "date", filter: true },
    { field: "sport", filter: true },
    { field: "gold", filter: true },
    { field: "silver", filter: true },
    { field: "bronze", filter: true },
    { field: "total", filter: true }
  ]

  const onFirstDataRendered = useCallback(() => {
    gridRef.current.api.sizeColumnsToFit();
  }, []);

  return (
    <div className="ag-theme-alpine-dark data-grid-wrapper">
      <AgGridReact
        ref={gridRef}
        rowData={rowData}
        paginationPageSize={50}
        columnDefs={columnDefs}
        onFirstDataRendered={onFirstDataRendered}
        pagination={true}
      />
    </div>
  )
}

export default DataGrid
