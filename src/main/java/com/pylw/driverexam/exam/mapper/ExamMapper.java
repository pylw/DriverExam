package com.pylw.driverexam.exam.mapper;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import com.pylw.driverexam.exam.model.SubjectInfo;


/**
 * Exam Mapper.
 * @author Pty.Me
 *
 */
@Mapper
public interface ExamMapper {
	
	@Select("select * from subject_info where subject_id=#{subjectId}")
	SubjectInfo getSubjectInfo(int subjectId);
}
