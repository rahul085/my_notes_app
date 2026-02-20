import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import { useNotes } from '../../context/notes-context'
import Sidebar from '../../components/sidebar/Sidebar'
import NotesCard from '../../components/notes-card/NotesCard'

const Bin = () => {
    const {bin}=useNotes();
  return (
    <>
    <Navbar/>
    <main className='flex gap-3'>
        <Sidebar/>
        <div>
            <div className='flex flex-wrap gap-6  w-screen mt-7'>
                {bin?.length > 0 &&
              bin.map(({ id, title, text, isPinned }) => (
                <NotesCard
                  key={id}
                  id={id}
                  title={title}
                  text={text}
                  isPinned={isPinned}
                />
              ))}

            </div>
        </div>

    </main>

    </>
  )
}

export default Bin