import Button from "../Button/Button"
import "./ButtonGroup.css"

function ButtonGroup({
  buttonOneLabel,
  buttonTwoLabel,
  buttonOneHandler,
  buttonTwoHandler,
}) {
  return (
    <div className="button-group">
      <Button onClick={buttonOneHandler}>{buttonOneLabel}</Button>
      <Button onClick={buttonTwoHandler}>{buttonTwoLabel}</Button>
    </div>
  )
}

ButtonGroup.defaultProps = {
  buttonOneLabel: "Cancel",
  buttonTwoLabel: "Submit"
}

export default ButtonGroup
