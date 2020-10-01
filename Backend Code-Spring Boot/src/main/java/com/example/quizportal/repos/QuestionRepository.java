package com.example.quizportal.repos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.quizportal.entities.Question;

public interface QuestionRepository extends JpaRepository<Question, Integer>{

}