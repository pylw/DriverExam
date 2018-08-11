package com.pylw.driverexam.exam.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.pylw.driverexam.exam.model.Question;

/**
 * ExamService.
 * 
 * @author Pty.Me
 *
 */
@Service
public interface ExamService {

	/**
	 * 根据科目id返回科目信息 返回考试试题信息（题库对象数组） 写入数据库相关考试信息
	 */

	public List<Question> getQuestions();

}
