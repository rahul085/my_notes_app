export const findNotesInImportant=(important,id)=>{
    return important.some(note=>note.id===id);
}