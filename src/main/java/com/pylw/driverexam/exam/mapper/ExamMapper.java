package com.pylw.driverexam.exam.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.InsertProvider;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import com.pylw.driverexam.exam.enums.SubjectQViewEnum;
import com.pylw.driverexam.exam.model.Done;
import com.pylw.driverexam.exam.model.Exam;
import com.pylw.driverexam.exam.model.Question;
import com.pylw.driverexam.exam.model.SubjectInfo;

/**
 * Exam Mapper.
 * 
 * @author Pty.Me
 *
 */
@Mapper
public interface ExamMapper {

	/** 查询科目信息. */
	@Select("select * from subject_info " + "where subject_id=#{subjectId} and license_type=#{licenseType}")
	SubjectInfo getSubjectInfo(Integer subjectId, String licenseType);

	/** 查询获取相应模拟考试的题目. */
	@Select("select * from ${examView}")
	List<Question> getQuestions(SubjectQViewEnum subject);

	/** 插入/更新donelists表单条记录. */
	@InsertProvider(type = ExamDynamicSqlProvider.class, method = "updateDone")
	Integer updateDone(Done done);

	/** 插入/更新count_question. */
	@InsertProvider(type = ExamDynamicSqlProvider.class, method = "updateCountQ")
	Integer updateCountQ(Integer questionId, String tf);

	/** 添加用户考试记录. */
	@Insert("insert into exams values(0,#{userId},#{subjectId},#{licenseType},"
			+ "#{startTime},#{endTime},#{totalDone},#{totalError},#{score})")
	Integer submitExam(Exam exam);

	/** 获取指定用户所有考试记录. */
	@Select("select * from exams where user_id=#{userId}")
	List<Exam> getExams(Integer userId);

	/** 删除考试记录. */
	@Delete("delete from exams where exam_id=#{examId}")
	Integer delExam(Integer examId);
}
