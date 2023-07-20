export default function getDate(dateString) {
  const [date, month, year] = dateString?.split("/")
  const tempDate = new Date()
  tempDate.setDate(date)
  tempDate.setMonth(month)
  tempDate.setFullYear(year)

  return tempDate.toISOString().substring(0, 10)
}
