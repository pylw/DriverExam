package com.pylw.driverexam.exam.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.pylw.driverexam.exam.model.Question;
import com.pylw.driverexam.exam.model.SubjectInfo;

/**
 * ExamService.
 * 
 * @author Pty.Me
 *
 */
@Service
public interface ExamService {

	/**
	 * 根据科目id返回科目信息.
	 * @param subjectId
	 * @return
	 */
	public SubjectInfo getSubjectInfo(int subjectId);

	public List<Question> getQuestions();

}
