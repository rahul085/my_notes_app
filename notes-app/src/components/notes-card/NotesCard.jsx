import React from "react";
import { findNotesInArchive } from "../../utils/findNotesInArchive";
import { useNotes } from "../../context/notes-context";

const NotesCard = ({ id, title, text,isPinned }) => {
    const {notesDispatch,archive}=useNotes();


const isNotesInArchive=findNotesInArchive(archive,id);
    

    const onPinClick=(id)=>{
            console.log("before click isPinned:", isPinned);
        // Now comes the concept of Context......
   !isPinned ?notesDispatch({
            type:'PIN',
            payload: {id}

        }) :notesDispatch({
            type:'UNPIN',
            payload:{id}
        })

    }

    const onArchiveClick=(id)=>{
        !isNotesInArchive ? notesDispatch({
            type:"ADD_TO_ARCHIVE",
            payload:{id}
        }) : notesDispatch({
            type:"REMOVE_FROM_ARCHIVE",
            payload:{id}
        })
    }

    

  return (
    <div className="w-56 border border-neutral-800 p-2 rounded-md  w-75" key={id}>
      <div className="flex justify-between ">
        <p>{title}</p>
        {
            !isNotesInArchive ? <button onClick={()=>onPinClick(id)} className="cursor-pointer">
          <span className={isPinned ? 'material-icons':"material-icons-outlined"}>push_pin</span>
        </button> : <></>
        }
        
      </div>
      <hr />
      <div className="flex flex-col ">
        <p>{text}</p>

        <div className="ml-auto">
          <button onClick={()=>onArchiveClick(id)} className="cursor-pointer">
            <span className={isNotesInArchive? 'material-icons':'material-icons-outlined'}>archive</span>
          </button>
          <button className="cursor-pointer">
            <span className="material-icons-outlined">delete</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotesCard;
