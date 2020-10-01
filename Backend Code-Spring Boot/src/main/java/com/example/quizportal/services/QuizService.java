package com.example.quizportal.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.quizportal.entities.Question;
import com.example.quizportal.entities.Quiz;
import com.example.quizportal.repos.QuestionRepository;
import com.example.quizportal.repos.QuizRepository;



@Service
public class QuizService {
	@Autowired
	QuestionRepository questionRepository;
	
	@Autowired
	QuizRepository quizRepository;
	
//	@Autowired
//	OptionsRepository optionsRepository;

	public Question addQuestions(Question question) {
		return questionRepository.save(question);
		
	}

	public List<Question> findAllQuestion() {
		List<Question> questions =  questionRepository.findAll();
		System.out.println(questions);
		return questions;
	}
	
	public Quiz addQuiz(Quiz quiz) {
		return quizRepository.save(quiz);
		
	}

	public List<Quiz> findAllQuiz() {
		List<Quiz> quizzes =  quizRepository.findAll();
		System.out.println(quizzes);
		return quizzes;
	}

	public Quiz findQuizByName(String name) {
		return quizRepository.findByName(name);
	}
}
