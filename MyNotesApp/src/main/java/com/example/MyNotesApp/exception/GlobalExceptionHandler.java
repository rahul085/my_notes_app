package com.example.MyNotesApp.exception;

import com.example.MyNotesApp.dto.ErrorResponseDto;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class GlobalExceptionHandler {
    @ExceptionHandler(ResourceNotFoundException.class)
    public ResponseEntity<ErrorResponseDto> handleResourceNotFound(ResourceNotFoundException ex){
        return new ResponseEntity<>(new ErrorResponseDto(
                "NOT_FOUND",
                ex.getMessage(),
                HttpStatus.NOT_FOUND.value()
        ),HttpStatus.NOT_FOUND);
    }
}
