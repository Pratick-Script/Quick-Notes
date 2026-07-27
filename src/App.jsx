import React, { useState } from 'react'
import notesImg from './assets/image.png'
import notesBgImg from './assets/notesBg.png'
import { X } from 'lucide-react';


const App = () => {

  const [title, setTitle] = useState("")
  const [details, setDetails] = useState("")


  const [task, setTask] = useState([])

  const submitHandler = (e) => {
    e.preventDefault();

    const copyTask = [...task]
    copyTask.push({ title, details })

    setTask(copyTask)

    setTitle('')
    setDetails('')
  }

  const deleteNote = (idx) => {
    const copyTask = [...task]
    copyTask.splice(idx, 1)
    setTask(copyTask)
  }

  return (
    <div className='min-h-screen lg:h-screen bg-black text-white flex flex-col lg:flex-row overflow-y-auto lg:overflow-hidden'>
      <form onSubmit={(e) => {
        submitHandler(e)
      }}
        className='flex flex-col sm:flex-row items-center sm:items-start p-6 sm:p-10 w-full lg:w-1/2 gap-6 sm:gap-8'>
        <div className='flex w-full sm:w-1/2 items-start flex-col gap-4'>

          <h1 className='text-3xl font-bold'>Add Notes</h1>

          <input
            type="text"
            placeholder='Enter Notes Heading'
            required
            className='px-5 py-2 w-full border-2 rounded outline-none font-medium'
            value={title}
            onChange={(e) => {
              setTitle(e.target.value)
            }}
          />

          <textarea
            type="text"
            placeholder='Write Details'
            required
            className='px-5 py-2 h-32 w-full flex flex-row items-start border-2 rounded outline-none font-medium'
            value={details}
            onChange={(e) => {
              setDetails(e.target.value)
            }}
          />

          <button
            className='px-5 py-2 w-full bg-white-500 border-2 rounded cursor-pointer outline-none font-medium active:bg-gray-500 scale-100'
          >
            Add notes
          </button>
        </div>

        <img src={notesImg} alt="Notes Logo" className='h-40 sm:h-60 rotate-y-180 object-contain' />
      </form>

      <div className='w-full lg:w-1/2 border-t-2 lg:border-t-0 lg:border-l-2 p-6 sm:p-10 overflow-y-auto'>
        <h1 className='text-3xl font-bold'>Recent Notes</h1>
        <div className='flex flex-wrap items-start justify-start gap-5 mt-5 overflow-auto no-scrollbar'>
          {task.map((elem, idx) => {
            return (
              <div key={idx} className='relative h-52 w-38 rounded-2xl bg-white text-black pt-7 pb-14 px-4 bg-[url("./assets/notesBg.png")] bg-cover '>
                <div className='overflow-y-auto no-scrollbar pr-1 h-full'>
                  <h3 className='text-lg font-bold break-words'>{elem.title}</h3>
                  <p className='fit leading-light text-sm font-medium text-gray-600 break-words'>{elem.details}</p>
                </div>
                <button onClick={() => {
                  deleteNote(idx)
                }} className='absolute bottom-2 right-2 bg-amber-400 rounded-full p-2 text-xs font-medium cursor-pointer active:scale-95'>Delete Note</button>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default App