package com.pylw.driverexam.exam.service.impl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.pylw.driverexam.exam.enums.SubjectQViewEnum;
import com.pylw.driverexam.exam.mapper.ExamMapper;
import com.pylw.driverexam.exam.model.Question;
import com.pylw.driverexam.exam.model.SubjectInfo;
import com.pylw.driverexam.exam.service.ExamService;

@Service
public class ExamServiceImpl implements ExamService {

	@Autowired
	ExamMapper examMapper;

	@Override
	public SubjectInfo getSubjectInfo(int subjectId, String licenseType) {
		return examMapper.getSubjectInfo(subjectId, licenseType);
	}
	
	@Override
	public List<Question> getQuestions(SubjectQViewEnum subject)  {
		return examMapper.getQuestions(subject);
	}

	@Override
	public void createExam() {
		// TODO Auto-generated method stub
		
	}




	
	
}
