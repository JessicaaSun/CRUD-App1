import { useState } from "react"

const AddTask = ({onAdd}) => {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)

    const onSubmit = (e) => {
      e.preventDefault() 

      if(!text) {
        alert('Please add a task')
        return;
      }

      onAdd({ text, day, reminder})

      setText('')
      setDay('')
      setReminder(false)

    }
  return (
    <form className='mb-[40px]' onSubmit={onSubmit}>
        <div className='mt-[20px] mb-[10px]'>
          <label className="block text-[18px]">Task</label>
          <input className="w-full h-[40px] m-[5px] pt-[3px] pb-[3px] pl-[7px] pr-[7px] border border-transparent rounded-[3px] bg-pink-200 text-[17px] focus:border-[2px] focus:border-pink-400 focus:outline-none"
           type='text' placeholder="Add Task"
          value={text} onChange={(e) => setText(e.target.value)}
         />
        </div>
        <div className='mt-[10px] mb-[20px]'>
          <label className="block text-[18px]">Date</label>
          <input className="w-full h-[40px] m-[5px] pt-[3px] pb-[3px] pl-[7px] pr-[7px] border border-transparent rounded-[3px] bg-pink-200 text-[17px] focus:border-[2px] focus:border-pink-400 focus:outline-none"
           type='text' placeholder="Add Date" 
          value={day} onChange={(e) => setDay(e.target.value)} 
          />
        </div>
        <div className='flex items-center justify-between pb-[20px]'>
          <label className="flex-1 text-[18px]">Set Reminder</label>
          <input className="flex-2 h-[20px] w-[20px]" 
          type='checkbox'
          value={reminder} 
          checked={reminder}
          onChange={(e) => setReminder(e.currentTarget.checked)}
          />
        </div>

        <input className='block w-full bg-pink-400 text-white p-[7px] border border-transparent rounded-[3px]'
         type='submit' value='Save Task' onClick={onSubmit}/>
    </form>
  )
}

export default AddTask

