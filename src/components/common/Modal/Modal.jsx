import { useState } from "react"
import ReactDOM from "react-dom"
import ButtonGroup from "../ButtonGroup/ButtonGroup"
import validateForm from "../../../utils/validation"
import "./Modal.css"

/* TODO: Make modal generic to handle both edit and submit */

function Modal({
  close,
  header,
  defaultName,
  defaultAge,
  defaultId,
  addRecord,
  setNextID,
  mode,
  updateRow,
  setDefaultData
}) {
  const [name, setName] = useState(defaultName)
  const [age, setAge] = useState(defaultAge)
  const [errorField, setErrorField] = useState("")

  const getHeader = () => {
    if (mode === "add") {
      return "Add new record"
    }

    return "Edit record"
  }

  const handleSubmit = () => {
    /* Form Data Validation - Move validation code to utils */
    const error = validateForm(name, age)
    if (error) {
      setErrorField(error)
      return null
    }

    /* TODO: Add new record on submit to the datagrid */
    setNextID()
    if (mode === "add") {
      addRecord(name, Number(age))
    } else {
      updateRow(defaultId, name, Number(age))
    }

    setDefaultData({})

    close()
  }

  const handleNameChange = (event) => {
    setErrorField("")
    setName(event.target.value)
  }

  const handleAgeChange = (event) => {
    setErrorField("")
    setAge(event.target.value)
  }

  return ReactDOM.createPortal(
    <>
      <div className="modal-background"></div>
      <div className="modal-container">
        <div className="modal-content">
          <h2>{getHeader()}</h2>
          {errorField && <p>{errorField}</p>}
          <div className="modal-form">
            <label htmlFor="name">Name: </label>
            <input id="name" value={name} type="text" onChange={handleNameChange} required />
            <label htmlFor="age">Age: </label>
            <input id="age" value={age} type="number" onChange={handleAgeChange} min="1" max="110" required />
          </div>
          <ButtonGroup buttonOneLabel="Cancel" buttonTwoLabel="Submit" buttonOneHandler={close} buttonTwoHandler={handleSubmit} />
        </div>
      </div >
    </>,
    document.getElementById('modal-portal')
  )
}

Modal.defaultProps = {
  defaultId: "",
  defaultName: "",
  defaultAge: ""
}

export default Modal
