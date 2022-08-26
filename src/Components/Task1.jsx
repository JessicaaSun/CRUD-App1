import Task2 from './Task2'

const Task1 = ({takeTask, onDelete2, onToggle2, onUpdate2}) => {

return (
    <>
      {takeTask.map((value, index) => (
        <Task2 taskIn={value} onDelete1={onDelete2} key={index} onUpdate1={onUpdate2} onToggle1={onToggle2} />
      ))}
    </>
  )
}

export default Task1
