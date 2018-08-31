package com.pylw.driverexam.question.mapper;

import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.SelectProvider;
import org.apache.ibatis.annotations.UpdateProvider;

import com.pylw.driverexam.question.model.Question;

@Mapper
public interface QuestionMapper {

	@SelectProvider(method = "getTotal", type = QuestionProvider.class)
	Integer getTotal(Map<String, String> map);

	@SelectProvider(method = "find", type = QuestionProvider.class)
	List<Question> find(Map<String, String> map);
	
	@SelectProvider(method = "findOnePage", type = QuestionProvider.class)
	List<Question> findOnePage(Map<String, String> map);
	
	@Delete("delete from questions where question_id = #{questionId}")
	void delete(int questionId);
	
	@SelectProvider(method = "add", type = QuestionProvider.class)
	void add(HttpServletRequest request);
	
	@Select("select answer from questions where question_id = #{questionId}")
	String getAnswer(Map<String, Integer> map);

	@Select("select questions.* from questions,donelists where user_id=#{userId} and status_tf='F' and license_type=#{licenseType} and subject=#{subject} and questions.question_id = donelists.question_id order by questions.question_id")
	List<Question> getErrorQuestion(Map<String, String> map);
	
	@Select("select count(*) from questions,donelists where user_id=#{userId} and status_tf='F' and license_type=#{licenseType} and subject=#{subject} and questions.question_id = donelists.question_id order by questions.question_id")
	Integer getErrorTotal(Map<String, String> map);
	
	@UpdateProvider(method = "update", type = QuestionProvider.class)
	void update(HttpServletRequest request);

	@Select("select (select sum(total_error) from questions,count_question where count_question.question_id=questions.question_id and license_type=#{licenseType} and subject=#{subject} and question_type=#{questionType}) /"
			+ " (select sum(total_done) from questions,count_question where questions.question_id=count_question.question_id and license_type=#{licenseType} and subject=#{subject} and question_type=#{questionType})")
	//@Select("select sum(total_done) from questions,count_question where count_question.question_id=questions.question_id and license_type=#{licenseType} and subject=#{subject} and question_type=#{questionType}")
	Double getErrorRate(String licenseType,Integer subject,Integer questionType);
}
