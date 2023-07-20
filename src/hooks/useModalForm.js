import { useState } from "react"

function useModalForm(defaultValues = {}) {
  const [values, setValues] = useState(defaultValues)
  const [errorField, setErrorField] = useState("")

  const handleChange = (type, event) => {
    setErrorField("")

    switch (type) {
      case "athlete":
        setValues(val => ({ ...val, athlete: event.target.value }))
        break;
      case "age":
        setValues(val => ({ ...val, age: Number(event.target.value) }))
        break;
      case "country":
        setValues(val => ({ ...val, country: event.target.value }))
        break;
      case "year":
        setValues(val => ({ ...val, year: Number(event.target.value) }))
        break;
      case "date":
        setValues(val => ({ ...val, date: new Date(event.target.value).toISOString().split('T')[0] }))
        break;
      case "sport":
        setValues(val => ({ ...val, sport: event.target.value }))
        break;
      case "gold":
        setValues(val => ({ ...val, gold: Number(event.target.value) }))
        break;
      case "silver":
        setValues(val => ({ ...val, silver: Number(event.target.value) }))
        break;
      case "bronze":
        setValues(val => ({ ...val, bronze: Number(event.target.value) }))
        break;
      case "total":
        setValues(val => ({ ...val, total: Number(event.target.value) }))
        break;
    }
  }

  return [values, handleChange, errorField, setErrorField]
}

export default useModalForm
