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

}
