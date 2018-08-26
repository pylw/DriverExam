package com.pylw.driverexam.exam.service;

import java.util.List;

import com.pylw.driverexam.exam.enums.SubjectQViewEnum;
import com.pylw.driverexam.exam.model.Done;
import com.pylw.driverexam.exam.model.Exam;
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

	/**
	 * 根据驾照和科目类型获取考试题目.
	 * 
	 * @param subject 格式如"C1_1"，前面为驾照类型，后面为科目
	 * @return
	 */
	public List<Question> getQuestions(SubjectQViewEnum subject);

	/**
	 * 更新做过的题对/错、收藏/屏蔽状态.
	 * 
	 * @param done
	 * @return
	 */
	public Integer updateDone(Done done);

	/**
	 * 用户模拟考试后交卷信息提交.
	 * 
	 * @param done
	 * @return
	 */
	public Integer submitExam(Exam exam);

	/**
	 * 根据用户id查询所有考试记录.
	 * 
	 * @param userId
	 * @return
	 */
	public List<Exam> getExams(int userId);

}
