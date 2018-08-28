package com.pylw.driverexam.question.service;

import java.util.List;
import java.util.Map;

import com.pylw.driverexam.question.model.Question;

public interface QuestionService {

	Integer getToal(Map<String, String> map);

	List<Question> find(Map<String, String> map);

	String getAnswer(Map<String, Integer> map);

	List<Question> getErrorQuestion(Map<String, String> map);
	
	Integer getErrorTotal(Map<String, String> map);
}
