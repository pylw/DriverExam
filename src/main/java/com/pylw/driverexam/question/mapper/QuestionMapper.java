package com.pylw.driverexam.question.mapper;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.SelectProvider;

import com.pylw.driverexam.question.model.Question;

@Mapper
public interface QuestionMapper {

	@SelectProvider(method = "getTotal", type = QuestionProvider.class)
	Integer getTotal(Map<String, String> map);

	@SelectProvider(method = "find", type = QuestionProvider.class)
	List<Question> find(Map<String, String> map);

	@Select("select answer from questions where question_id = #{questionId}")
	String getAnswer(Map<String, Integer> map);

	@Select("select questions.* from questions,donelists where user_id=#{userId} and status_tf='F' and license_type=#{licenseType} and subject=#{subject} and questions.question_id = donelists.question_id order by questions.question_id")
	List<Question> getErrorQuestion(Map<String, String> map);
	
	@Select("select count(*) from questions,donelists where user_id=#{userId} and status_tf='F' and license_type=#{licenseType} and subject=#{subject} and questions.question_id = donelists.question_id order by questions.question_id")
	Integer getErrorTotal(Map<String, String> map);
}
