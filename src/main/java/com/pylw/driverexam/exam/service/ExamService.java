package com.pylw.driverexam.exam.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.pylw.driverexam.exam.enums.SubjectQViewEnum;
import com.pylw.driverexam.exam.model.Question;
import com.pylw.driverexam.exam.model.SubjectInfo;

/**
 * ExamService.
 * 
 * @author Pty.Me
 *
 */
public interface ExamService {

	/**
	 * 根据科目id返回科目信息.
	 * 
	 * @param subjectId
	 * @return
	 */
	public SubjectInfo getSubjectInfo(int subjectId, String licenseType);

	public void createExam();

	/**
	 * 根据驾照和科目类型获取考试题目.
	 * 
	 * @param subject 格式如"C1_1"，前面为驾照类型，后面为科目
	 * @return
	 */
	public List<Question> getQuestions(SubjectQViewEnum subject);

}
