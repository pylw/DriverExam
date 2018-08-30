package com.pylw.driverexam.exam.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.pylw.driverexam.exam.enums.SubjectQViewEnum;
import com.pylw.driverexam.exam.mapper.ExamMapper;
import com.pylw.driverexam.exam.model.Done;
import com.pylw.driverexam.exam.model.Exam;
import com.pylw.driverexam.exam.model.Question;
import com.pylw.driverexam.exam.model.SubjectInfo;
import com.pylw.driverexam.exam.service.ExamService;

@Service
public class ExamServiceImpl implements ExamService {

	@Autowired
	ExamMapper examMapper;

	@Override
	public SubjectInfo getSubjectInfo(Integer subjectId, String licenseType) {
		return examMapper.getSubjectInfo(subjectId, licenseType);
	}

	@Override
	public List<Question> getQuestions(SubjectQViewEnum subject) {
		return examMapper.getQuestions(subject);
	}

	@Override
	public Integer updateDone(Done done) {
		int result = examMapper.updateDone(done);
		if (done.getStatusTf() != null)
			examMapper.updateCountQ(done.getQuestionId(), done.getStatusTf());
		return result;
	}

	@Override
	public Integer submitExam(Exam exam) {
		return examMapper.submitExam(exam);
	}

	@Override
	public List<Exam> getExams(Integer userId) {
		return examMapper.getExams(userId);
	}

	@Override
	public Done getStatus(Integer userId, Integer questionId) {
		return examMapper.getStatus(userId, questionId);
	}
	

}
