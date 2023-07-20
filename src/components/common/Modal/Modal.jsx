import ReactDOM from "react-dom"
import ButtonGroup from "../ButtonGroup/ButtonGroup"
import validateForm from "../../../utils/validation"
import useModalForm from "../../../hooks/useModalForm"
import "./Modal.css"

/* Generic modal to handle both edit and submit */

function Modal({
  close,
  defaultValues,
  addRecord,
  mode,
  updateRow,
  setDefaultData
}) {
  const [
    values,
    handleChange,
    errorField,
    setErrorField
  ] = useModalForm(defaultValues)

  const {
    athlete,
    age,
    country,
    year,
    date,
    sport,
    gold,
    silver,
    bronze,
    total,
  } = values

  const getHeader = () => {
    if (mode === "add") {
      return "Add new record"
    }

    return "Edit record"
  }

  const handleSubmit = () => {
    /* Form Data Validation - Add date validation */
    const error = validateForm(values)
    if (error) {
      setErrorField(error)
      return null
    }

    /* Change date format to dd/mm/yyyy */
    const newValues = { ...values, date: new Date(values?.date).toLocaleString().split(',')[0] }

    /* Add new record on submit to the datagrid */
    if (mode === "add") {
      addRecord(newValues)
    } else {
      updateRow(newValues)
    }

    setDefaultData({})
    close()
  }

  return ReactDOM.createPortal(
    <>
      <div className="modal-background"></div>
      <div className="modal-container">
        <div className="modal-content">
          <h2>{getHeader()}</h2>
          {errorField && <p>{errorField}</p>}
          <div className="modal-form">
            <label htmlFor="athlete">Athlete: </label>
            <input id="athlete" value={athlete} type="text" onChange={(e) => handleChange("athlete", e)} required />

            <label htmlFor="age">Age: </label>
            <input id="age" value={age} type="number" onChange={(e) => handleChange("age", e)} min="1" max="110" required />

            <label htmlFor="country">Country: </label>
            <input id="country" value={country} type="text" onChange={(e) => handleChange("country", e)} required />

            <label htmlFor="year">Year: </label>
            <input id="year" value={year} type="number" onChange={(e) => handleChange("year", e)} min="1900" max="2100" required />

            <label htmlFor="date">Date: </label>
            <input id="date" value={date} type="date" onChange={(e) => handleChange("date", e)} required />

            <label htmlFor="sport">Sport: </label>
            <input id="sport" value={sport} type="text" onChange={(e) => handleChange("sport", e)} required />

            <label htmlFor="gold">Gold: </label>
            <input id="gold" value={gold} type="number" onChange={(e) => handleChange("gold", e)} required />

            <label htmlFor="silver">Silver: </label>
            <input id="silver" value={silver} type="number" onChange={(e) => handleChange("silver", e)} required />

            <label htmlFor="bronze">Bronze: </label>
            <input id="bronze" value={bronze} type="number" onChange={(e) => handleChange("bronze", e)} required />

            <label htmlFor="total">Total: </label>
            <input id="total" value={total} type="number" onChange={(e) => handleChange("total", e)} required />
          </div>
          <ButtonGroup buttonOneLabel="Cancel" buttonTwoLabel="Submit" buttonOneHandler={close} buttonTwoHandler={handleSubmit} />
        </div>
      </div >
    </>,
    document.getElementById('modal-portal')
  )
}

Modal.defaultProps = {
  defaultValues: {}
}

export default Modal
