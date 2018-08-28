package com.pylw.driverexam.question.service.impl;

import java.util.Collections;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.pylw.driverexam.question.mapper.QuestionMapper;
import com.pylw.driverexam.question.model.Question;
import com.pylw.driverexam.question.service.QuestionService;

@Service
public class QuestionServiceImpl implements QuestionService{

	@Autowired
	private QuestionMapper questionMapper;
	
	@Override
	public Integer getToal(Map<String, String> map) {
		return questionMapper.getTotal(map);
	}

	@Override
	public List<Question> find(Map<String, String> map) {
		List<Question> questions = questionMapper.find(map);
		for(Question question:questions) {
			if(question.getImg()!=""&&question.getImg()!=null) {
				String[] img = question.getImg().split("/");
				question.setImg("http://file.open.jiakaobaodian.com/tiku/res/"+img[img.length-1]);
			}
			question.setAnswer("");
		}
		if(map.get("type")!=null&&!map.get("type").equals("1")) {
			Collections.shuffle(questions);
		}
		return questions;
	}

	@Override
	public String getAnswer(Map<String, Integer> map) {
		return questionMapper.getAnswer(map);
	}

	@Override
	public List<Question> getErrorQuestion(Map<String, String> map) {
		
		List<Question> questions = questionMapper.getErrorQuestion(map);
		for(Question question:questions) {
			if(question.getImg()!=""&&question.getImg()!=null) {
				String[] img = question.getImg().split("/");
				question.setImg("http://file.open.jiakaobaodian.com/tiku/res/"+img[img.length-1]);
			}
			question.setAnswer("");
		}
		if(map.get("type")!=null&&!map.get("type").equals("1")) {
			Collections.shuffle(questions);
		}
		return questions;
	}

	@Override
	public Integer getErrorTotal(Map<String, String> map) {
		return questionMapper.getErrorTotal(map);
	}
}
