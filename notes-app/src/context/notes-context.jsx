import { createContext,useContext,useEffect,useReducer } from "react";
import { NotesReducer } from "../reducers/NotesReducer";

const NotesContext=createContext();

const NotesProvider=({children})=>{
  const getInitialState=()=>{
    const savedData=localStorage.getItem("my_notes_app");
    if(savedData){
      return JSON.parse(savedData);
    }
    return{
      title: "",
      text: "",
      notes: [],
      archive: [],
      bin: [],
      important: [],
      isEditing: false,
      editNoteId: null,

    };
  };
  //    const initialState = {
  //   title: "",
  //   text: "",
  //   notes: [],
  //   archive:[],
  //   bin:[],
  //   important:[],
  //   isEditing:false,
  //   editNoteId: null,
   
  // };

  // const [{ title, text, notes,archive,bin,important,isEditing,editNoteId}, notesDispatch] = useReducer(
  //   NotesReducer,
  //   getInitialState()
  // );

  const [state,notesDispatch]=useReducer(NotesReducer,getInitialState());

  //Whenever  'state' changes, save it to Local storage 
  useEffect(()=>{
    localStorage.setItem("my_notes_app",JSON.stringify(state));
  },[state])

  const { title, text, notes,archive,bin,important,isEditing,editNoteId}=state;




    return(
        <NotesContext.Provider value={{ title, text, notes,archive,bin,important,isEditing,editNoteId,notesDispatch }}>
            {children}
        </NotesContext.Provider>
    )
}

const useNotes=()=>useContext(NotesContext);
export {NotesProvider,useNotes};