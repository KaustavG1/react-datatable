import { useRef } from "react"
import { AgGridReact } from "ag-grid-react"
import DataGridButtons from "../DataGridButtons/DataGridButtons"
import 'ag-grid-enterprise'
import "ag-grid-community/dist/styles/ag-grid.css"
import "ag-grid-community/dist/styles/ag-theme-alpine-dark.css"
import "./DataGrid.css"

function DataGrid({ openEditModal, rowData, deleteRow }) {
  const gridRef = useRef(null)

  const columnDefs = [
    {
      field: "",
      cellRendererFramework: (params) => (
        <DataGridButtons openEditModal={openEditModal}
          deleteRow={deleteRow}
          {...params}
        />
      )
    },
    { field: "country", filter: true, rowGroup: true, hide: true },
    { field: "athlete", filter: true, rowGroup: true, hide: true },
    { field: "age", filter: true },
    { field: "year", filter: true },
    { field: "date", filter: true },
    { field: "sport", filter: true },
    { field: "gold", filter: true },
    { field: "silver", filter: true },
    { field: "bronze", filter: true },
    { field: "total", filter: true }
  ]

  return (
    <div className="ag-theme-alpine-dark data-grid-wrapper">
      <AgGridReact
        ref={gridRef}
        rowData={rowData}
        paginationPageSize={50}
        columnDefs={columnDefs}
        pagination={true}
      />
    </div>
  )
}

export default DataGrid
