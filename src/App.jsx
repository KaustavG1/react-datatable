import { useState } from 'react'
import DataGrid from './components/DataGrid/DataGrid'
import Button from './components/common/Button/Button'
import Modal from './components/common/Modal/Modal'
import './App.css'

const initData = [
  { id: 1, name: "John Doe", age: 25 },
  { id: 2, name: "Jane Smith", age: 30 },
  { id: 3, name: "Mike Johnson", age: 35 }
]

function App() {
  const [isOpen, setOpen] = useState(false)
  const [mode, setMode] = useState("add")
  const [currId, setCurrId] = useState(initData.length + 1)
  const [defaultData, setDefaultData] = useState({})

  const [rowData, setRowData] = useState(initData)

  const setNextId = () => setCurrId(id => id + 1)

  const openEditModal = (data = {}) => {
    setMode("edit")
    setDefaultData(data)
    setOpen(true)
  }

  const openAddModal = () => {
    setMode("add")
    setOpen(true)
  }

  const closeEditModal = () => setOpen(false)

  // Move add and edit and delete functions to utils

  const addRecord = (name, age) => {
    setRowData(
      [
        ...rowData,
        { id: currId, name, age }
      ]
    )
  }

  const updateRow = (id, name, age) => {
    setRowData(rowData.map((record) => {
      if (record?.id === id) {
        return {
          ...record,
          name,
          age
        }
      }

      return record
    }))
  }

  const deleteRow = (id) => {
    setRowData(rowData.filter((record) => record?.id !== id))
  }

  return (
    <>
      <h1>React Data Grid</h1>
      <div className="container">
        <Button onClick={openAddModal}>Add new record</Button>
        <div className="grid-container">
          <DataGrid openEditModal={openEditModal} rowData={rowData} setRowData={setRowData} deleteRow={deleteRow} />
        </div>
      </div>
      {isOpen && <Modal
        close={closeEditModal}
        addRecord={addRecord}
        updateRow={updateRow}
        setNextID={setNextId}
        mode={mode}
        defaultId={defaultData?.id}
        defaultName={defaultData?.name}
        defaultAge={defaultData?.age}
        setDefaultData={setDefaultData}
      />}
    </>
  )
}

export default App
