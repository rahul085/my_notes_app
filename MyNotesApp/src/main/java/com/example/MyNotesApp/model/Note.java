package com.example.MyNotesApp.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
@Table(name = "Notes")
public class Note {
    @Id
    @SequenceGenerator(name = "noteSeq")
    @GeneratedValue(strategy = GenerationType.SEQUENCE,generator = "notesSeq")
    private Long id;
    private String title;
    private String text;
    private boolean isPinned;
    private boolean isInBin;
}
