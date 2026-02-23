import { createContext,useContext,useReducer } from "react";
import { NotesReducer } from "../reducers/NotesReducer";

const NotesContext=createContext();

const NotesProvider=({children})=>{
     const initialState = {
    title: "",
    text: "",
    notes: [],
    archive:[],
    bin:[],
    important:[],
    isEditing:false,
    editNoteId: null,
   
  };
  const [{ title, text, notes,archive,bin,important,isEditing,editNoteId}, notesDispatch] = useReducer(
    NotesReducer,
    initialState,
  );

    return(
        <NotesContext.Provider value={{ title, text, notes,archive,bin,important,isEditing,editNoteId,notesDispatch }}>
            {children}
        </NotesContext.Provider>
    )
}

const useNotes=()=>useContext(NotesContext);
export {NotesProvider,useNotes};