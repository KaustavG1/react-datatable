export default function validateForm(name, age) {
  if (name === "" && age === "") {
    return "Fields cannot be empty!"
  }

  if (name === "") {
    return "Name cannot be empty!"
  }

  if (age === "") {
    return "Age cannot be empty!"
  }

  if (Number(age) < 1 || Number(age) > 110) {
    return "Age has to be between 1 and 110 years"
  }

  if (!name.match(/^[a-zA-Z\s]*$/)) {
    return "Name can only contain alphabets"
  }
}
