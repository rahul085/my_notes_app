package com.example.MyNotesApp.repository;

import com.example.MyNotesApp.model.Note;
import org.springframework.data.jpa.repository.JpaRepository;

public interface NotesRepository extends JpaRepository<Note,Long> {
}
