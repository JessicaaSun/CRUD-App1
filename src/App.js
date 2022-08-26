import './App.css';
import { useState } from 'react';
import Header from './Components/Header';
import Task1 from './Components/Task1';


const App = () => {
    const [showAddTask, setShowAddTask] = useState(true)
    const [updateTask, setUpdateTask] = useState(null)
    const [toggleSave, setToggleSave] = useState(false)
    const [text, setText] = useState('')
    // const [date, setDate] = useState('')
    const [reminder, setReminder] = useState(false)

    const [Tasks, setTasks] = useState([
      {
        id: 1,
        text: 'Go shopping',
        date: 'Aug 27th at 3:00pm',
        reminder: true,
      },
      {
          id: 2,
          text: 'Taking the trashes out',
          date: 'Aug 28th at 6:30am',
          reminder: true,
      },
      {
          id: 3,
          text: 'Do laundry',
          date: 'Aug 26th at 7:45pm',
          reminder: false,
      },
  ])

  // Reminder
  const reminderHeart = (id) => {
    setTasks(Tasks.map((task) =>
      task.id === id? {...task, reminder:!task.reminder} 
      : task
    ))
  }
  
  // Delete Task
  const deleteTask = (id) => {
    setTasks(Tasks.filter((task) => task.id !== id))
  }
   
  
  // Add 
  const AddTask = () => {
    // const [text, setText] = useState('')
    // const [date, setDate] = useState('')
    // const [reminder, setReminder] = useState(false)
    // unfocus would be fixed if used hook inside component but wouldn't be able to use Update Task
    const onSubmit = (e) => {
      e.preventDefault() 

      if(!text) {
        alert('Please add a task')
        return;
      } 
      else if (text && toggleSave) {
        setTasks (
        Tasks.map((value) => {
            if(value.id === updateTask) {
              return{...value, text: text, reminder: reminder} //date:date
            }
            return value;
          })
        )
      }
      else {
        const newTask = {id: Math.floor(Math.random() * 10000) + 1, text: text, reminder: reminder}//date:date
        setTasks([...Tasks, newTask])
      }
      
      setText('')
      // setDate('')
      setReminder(false)
      setToggleSave(false)

    }
  return (
    <form className='mb-[40px]' onSubmit={onSubmit}>
        <div className='mt-[20px] mb-[10px]'>
          <label className="block text-[18px]">Task</label>
          <input className="w-full h-[40px] m-[5px] pt-[3px] pb-[3px] pl-[7px] pr-[7px] border border-transparent rounded-[3px] bg-pink-200 text-[17px] focus:border-[2px] focus:border-pink-400 focus:outline-none"
           type='text' placeholder="Add Task"
          autoFocus // use auto focus bit bang issue sen lol bcuz been trying to fix 4h ai hz fix ot kert dumb pej
          value={text} onChange={(e) => setText(e.target.value)}
         />
        </div>
        {/* <div className='mt-[10px] mb-[20px]'>
          <label className="block text-[18px]">Date</label>
          <input className="w-full h-[40px] m-[5px] pt-[3px] pb-[3px] pl-[7px] pr-[7px] border border-transparent rounded-[3px] bg-pink-200 text-[17px] focus:border-[2px] focus:border-pink-400 focus:outline-none"
           type='text' placeholder="Add Date" 
          value={date} onChange={(e) => setDate(e.target.value)} 
          />
        </div> */}
        <div className='flex items-center justify-between pb-[20px]'>
          <label className="flex-1 text-[18px]">Set Reminder</label>
          <input className="flex-2 h-[20px] w-[20px]" 
          type='checkbox'
          value={reminder} 
          checked={reminder}
          onChange={(e) => setReminder(e.currentTarget.checked)}
          />
        </div>
        
        {toggleSave ? <input className='block w-full bg-pink-400 text-white p-[7px] border border-transparent rounded-[3px]'
         type='submit' value='Update Task' onClick={onSubmit}/> : 
        <input className='block w-full bg-pink-400 text-white p-[7px] border border-transparent rounded-[3px]'
         type='submit' value='Save Task' onClick={onSubmit}/>
        }
    </form>
  )
  
}

  // const addTask = (tasks) => {
    
  //   const id = Math.floor(Math.random() * 10000) + 1 
  //   const newTask = { id, ...tasks }
  //   setTasks([...Tasks, newTask])
  // }
  

  // Update Task
  const UpTask = (id) => {
    let newUpdate = Tasks.find((task) => {
      return task.id === id
    });
    setToggleSave(true);
    setText(newUpdate.text);
    // setDate(newUpdate.date);
    setReminder(newUpdate.reminder);
    setUpdateTask(id);
  }

  return(

    <div className='mt-[30px] flex justify-center mb-[30px]'>
      <div className="w-[500px] min-h-[300px] overflow-auto border-[3px] border-pink-300 rounded-[15px] p-[30px]">
        <Header showTask={() => setShowAddTask(!showAddTask)} 
        showAdd={showAddTask}/>
        {showAddTask && <AddTask/>}
        <Task1 takeTask={Tasks} onDelete2={deleteTask} onToggle2={reminderHeart} onUpdate2={UpTask}/>
      </div>
    </div>
  );
}

export default App;
