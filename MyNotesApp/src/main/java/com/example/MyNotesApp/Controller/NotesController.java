package com.example.MyNotesApp.Controller;

import com.example.MyNotesApp.Service.NoteService;
import com.example.MyNotesApp.model.Note;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping("/api/notes")
@CrossOrigin(origins = "http://localhost:5173")
public class NotesController {
   private final NoteService noteService;
   @GetMapping
   public ResponseEntity<List<Note>> getAllNotes(){
       return new ResponseEntity<>(noteService.getAllNotes(), HttpStatus.OK);
   }

   @PostMapping
    public ResponseEntity<Note> createNote(@RequestBody Note note){
       return new ResponseEntity<>(noteService.createNote(note),HttpStatus.CREATED);
   }
   @PutMapping("/{id}")
    public ResponseEntity<Note> updateNote(@PathVariable Long id,@RequestBody Note note){
       return new ResponseEntity<>(noteService.updateNote(id,note),HttpStatus.CREATED);
   }

   @DeleteMapping("/{id}")
    public ResponseEntity<Void> moveToBin(@PathVariable Long id){
       noteService.deleteNote(id);
       return new ResponseEntity<>(HttpStatus.OK);
   }

   @PatchMapping("/{id}/toggle-bin")
       public ResponseEntity<Note> toggleBinStatus(@PathVariable Long id){
       return new ResponseEntity<>(noteService.toggleBinStatus(id),HttpStatus.OK);


   }
}
