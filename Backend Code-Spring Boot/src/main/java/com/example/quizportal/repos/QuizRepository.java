package com.example.quizportal.repos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.quizportal.entities.Quiz;


public interface QuizRepository extends JpaRepository<Quiz, Integer>{
	public Quiz findByName(String name);

}