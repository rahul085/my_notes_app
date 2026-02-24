package com.example.MyNotesApp.Service;

import com.example.MyNotesApp.exception.ResourceNotFoundException;
import com.example.MyNotesApp.model.Note;
import com.example.MyNotesApp.repository.NotesRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;

@Service
@AllArgsConstructor
public class NoteService {
    private final NotesRepository notesRepository;

    public List<Note> getAllNotes(){
        return notesRepository.findAll();
    }

    public Note createNote(Note note){
        return notesRepository.save(note);
    }

    public Note updateNote(Long id, Note newnNote){
        Note note = notesRepository.findById(id).orElseThrow(() ->
                new ResourceNotFoundException("Note with id " + id + " not found"));
        note.setTitle(newnNote.getTitle());
        note.setText(newnNote.getText());
        note.setPinned(newnNote.isPinned());
        return notesRepository.save(note);
    }

    public Note  toggleBinStatus( Long id){
        Note note=notesRepository.findById(id).orElseThrow(()->
                new ResourceNotFoundException("Note with id "+id+" not found!"));
        note.setInBin(!note.isInBin());
        return notesRepository.save(note);
    }

    public void deleteNote(Long id){
        Note note = notesRepository.findById(id).orElseThrow(
                () -> new ResourceNotFoundException("Note with id " + id + " not found  ")
        );

        notesRepository.deleteById(id);
    }
}
