package com.pylw.driverexam.exam.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import com.pylw.driverexam.exam.enums.SubjectQViewEnum;
import com.pylw.driverexam.exam.model.Question;
import com.pylw.driverexam.exam.model.SubjectInfo;


/**
 * Exam Mapper.
 * @author Pty.Me
 *
 */
@Mapper
public interface ExamMapper {
	
	/** 查询科目信息 */
	@Select("select * from subject_info where subject_id=#{subjectId} and license_type=#{licenseType}")
	SubjectInfo getSubjectInfo(int subjectId, String licenseType);
	
	/** 查询获取相应模拟考试的题目 */
	@Select("select * from ${examView}")
	List<Question> getQuestions(SubjectQViewEnum subject);
	
}
