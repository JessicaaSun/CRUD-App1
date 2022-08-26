import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faEdit } from '@fortawesome/free-solid-svg-icons'

const Task2 = ({taskIn, onDelete1, onToggle1, onUpdate1}) => {
  return (
    <div className='border border-transparent rounded-[3px] p-[5px] bg-pink-200 m-[7px]' 
    onDoubleClick={() => onToggle1(taskIn.id)}>
        <h3 className='text-[18px]'>
            <FontAwesomeIcon icon={faHeart} 
              className={` ${taskIn.reminder ? "text-pink-500" : "text-white"} text-[16px] pl-[5px] pr-[10px]`} />
            {taskIn.text}
            <div className="float-right text-[17px] pt-[10px] text-pink-500 cursor-pointer pr-[10px]">
              <FontAwesomeIcon icon={faEdit} className="pr-[10px]"
                onClick={() => onUpdate1(taskIn.id)}
              />
              <FontAwesomeIcon icon={faTrash} 
                onClick={() => onDelete1(taskIn.id)}
              />
            </div>
        </h3>
        <div className='text-[14px] pl-[35px] pt-[4px] pb-[5px]'>
        {taskIn.date}
        </div>
    </div>
  )
}

export default Task2
