package com.pylw.driverexam.question.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.pylw.driverexam.question.model.Question;
import com.pylw.driverexam.question.service.QuestionService;

@RestController
@RequestMapping("/question")
public class QuestionController {

	@Autowired
	private QuestionService questionService;
	
	@PostMapping("/total")
	public Integer getTotal(@RequestBody(required=false) Map<String,String> map) {
		
		return questionService.getToal(map); 
	}
	
	@PostMapping("/answer")
	public String getAnswer(@RequestBody Map<String,Integer> map) {
		return questionService.getAnswer(map); 
	}
	
	@PostMapping
	public List<Question> find(@RequestBody(required=false) Map<String,String> map){
		return questionService.find(map);
	}
}
