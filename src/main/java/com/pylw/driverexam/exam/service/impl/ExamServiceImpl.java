package com.pylw.driverexam.exam.service.impl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.pylw.driverexam.exam.mapper.ExamMapper;
import com.pylw.driverexam.exam.model.Question;
import com.pylw.driverexam.exam.service.ExamService;

public class ExamServiceImpl implements ExamService {

	@Autowired
	ExamMapper examMapper;

	@Override
	public List<Question> getQuestions()  {
		List<Question> questions = new ArrayList<>();
		
		
		return questions;
	}
	
	
}
