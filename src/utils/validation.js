function validateForm({
  athlete = "",
  age = "",
  country = "",
  year = "",
  date = "",
  sport = "",
  gold = "",
  silver = "",
  bronze = "",
  total = ""
}) {
  if (athlete === "" || age === "" || country === "" || year === "" || sport === "" || gold === "" || silver === "" || bronze === "" || total === "") {
    return "Fields cannot be empty!"
  }

  if (Number(age) < 1 || Number(age) > 110) {
    return "Age has to be between 1 and 110 years"
  }

  if (Number(year) < 1900 || Number(year) > 2100) {
    return "Years between 1900 and 2100 is supported only"
  }

  if (!athlete.match(/^[a-zA-Z\s]*$/)) {
    return "Athlete can only contain alphabets"
  }

  if (!country.match(/^[a-zA-Z\s]*$/)) {
    return "Country can only contain alphabets"
  }

  if (!sport.match(/^[a-zA-Z\s]*$/)) {
    return "Sport can only contain alphabets"
  }
}

export default validateForm
