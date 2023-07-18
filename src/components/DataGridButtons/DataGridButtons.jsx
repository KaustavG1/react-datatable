import ButtonGroup from "../common/ButtonGroup/ButtonGroup";

function DataGridButtons({ data, openEditModal, deleteRow }) {

  /* TODO: Add handler for edit and delete */
  const editRecord = () => {
    openEditModal(data)
  }

  const deleteRecord = () => {
    deleteRow(data?.id)
  }

  return (
    <ButtonGroup
      buttonOneLabel="Edit"
      buttonTwoLabel="Delete"
      buttonOneHandler={editRecord}
      buttonTwoHandler={deleteRecord}
    />
  )
}

export default DataGridButtons
