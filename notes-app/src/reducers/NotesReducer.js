import React from "react";
import { v4 as uuid } from "uuid";

export const NotesReducer = (state, { type, payload }) => {
  switch (type) {
    case "TITLE":
      return {
        ...state,
        title: payload,
      };
    case "TEXT":
      return {
        ...state,
        text: payload,
      };

    case "ADD_NOTE":
      return {
        ...state,
        notes: [
          ...state.notes,
          { title: state.title, text: state.text, id: uuid(), isPinned: false },
        ],
      };

    case "CLEAR_INPUT":
      return {
        ...state,
        title: "",
        text: "",
      };
    case "PIN":
     console.log("before click",state.notes);
     
   
      return{
        ...state,
        notes: state.notes.map(note=> note.id===payload.id ?  { ...note, isPinned:!note.isPinned }:note)
      }
    
      case 'UNPIN':
        console.log("after click",state.notes);
      
        return{
           ...state,
        notes: state.notes.map(note=> note.id===payload.id ?  { ...note, isPinned:!note.isPinned }:note)
        }

      case 'ADD_TO_ARCHIVE':
        return {
          ...state,
          archive: [...state.archive, state.notes.find(({id})=> id=== payload.id)],
          notes: state.notes.filter(({id})=> id!==payload.id)
        }

      case 'REMOVE_FROM_ARCHIVE':
        return {
          ...state,
          notes:[...state.notes, state.archive.find(({id})=> id===payload.id)],
          archive : state.archive.filter(({id})=> id!==payload.id)
          
        }

      case 'ADD_TO_BIN':
        return {
          ...state,
          bin: [...state.bin, state.notes.find(({id})=>id===payload.id)],
          notes: state.notes.filter(({id})=> id!==payload.id)
        }
      
      case "REMOVE_FROM_BIN":
        return{
          ...state,
          bin: state.bin.filter(({id})=>id!=payload.id)
        }

    default:
      return state;
  }
};
