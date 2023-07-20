import { useState, useEffect } from 'react'
import DataGrid from './components/DataGrid/DataGrid'
import Button from './components/common/Button/Button'
import Modal from './components/common/Modal/Modal'
import { v4 as uuidv4 } from 'uuid';
import './App.css'
import getDate from './utils/getDate';

const initData = []

function App() {
  const [isOpen, setOpen] = useState(false)
  const [mode, setMode] = useState("add")
  const [defaultData, setDefaultData] = useState({})
  const [rowData, setRowData] = useState(initData)

  useEffect(() => {
    fetch("https://www.ag-grid.com/example-assets/olympic-winners.json")
      .then(result => result.json())
      .then(data => data.map((el) => ({ id: uuidv4(), ...el })))
      .then(rowData => {
        setRowData(rowData)
      })
  }, []);

  const openEditModal = (data = {}) => {
    setMode("edit")
    const date = getDate(data?.date)
    setDefaultData({ ...data, date: date })
    setOpen(true)
  }

  const openAddModal = () => {
    setMode("add")
    setDefaultData({})
    setOpen(true)
  }

  const closeEditModal = () => setOpen(false)

  const addRecord = (values) => {
    setRowData(
      [
        { id: uuidv4(), ...values },
        ...rowData,
      ]
    )
  }

  const updateRow = (values) => {
    setRowData(rowData.map((record) => {
      if (record?.id === values?.id) {
        return {
          ...record,
          ...values
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
        mode={mode}
        defaultValues={defaultData}
        setDefaultData={setDefaultData}
      />}
    </>
  )
}

export default App
