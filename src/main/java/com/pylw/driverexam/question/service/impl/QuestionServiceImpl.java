package com.pylw.driverexam.question.service.impl;

import java.util.ArrayList;
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
				//String[] img = question.getImg().split("/");
				question.setImg("http://localhost:8080/img"+question.getImg());
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

	@Override
	public List<Double> getErrorRate() {
		List<Double> ds = new ArrayList<>();

		// 单选
		Double c112 = questionMapper.getErrorRate("C1", 1, 2);
		// 多选
		Double c113 = questionMapper.getErrorRate("C1", 1, 3);
		// 判断
		Double c111 = questionMapper.getErrorRate("C1", 1, 1);
		ds.add(c112);
		ds.add(c113);
		ds.add(c111);
		
		Double a112 = questionMapper.getErrorRate("A1", 1, 2);
		Double a113 = questionMapper.getErrorRate("A1", 1, 3);
		Double a111 = questionMapper.getErrorRate("A1", 1, 1);
		ds.add(a112);
		ds.add(a113);
		ds.add(a111);
		
		Double a212 = questionMapper.getErrorRate("A2", 1, 2);
		Double a213 = questionMapper.getErrorRate("A2", 1, 3);
		Double a211 = questionMapper.getErrorRate("A2", 1, 1);
		ds.add(a212);
		ds.add(a213);
		ds.add(a211);
		
		Double d12 = questionMapper.getErrorRate("D", 1, 2);
		Double d13 = questionMapper.getErrorRate("D", 1, 3);
		Double d11 = questionMapper.getErrorRate("D", 1, 1);
		ds.add(d12);
		ds.add(d13);
		ds.add(d11);
		
		// 单选
		Double c142 = questionMapper.getErrorRate("C1", 4, 2);
		// 多选
		Double c143 = questionMapper.getErrorRate("C1", 4, 3);
		// 判断
		Double c141 = questionMapper.getErrorRate("C1", 4, 1);
		ds.add(c142);
		ds.add(c143);
		ds.add(c141);
		
		Double a142 = questionMapper.getErrorRate("A1", 4, 2);
		Double a143 = questionMapper.getErrorRate("A1", 4, 3);
		Double a141 = questionMapper.getErrorRate("A1", 4, 1);
		ds.add(a142);
		ds.add(a143);
		ds.add(a141);
		
		Double a242 = questionMapper.getErrorRate("A2", 4, 2);
		Double a243 = questionMapper.getErrorRate("A2", 4, 3);
		Double a241 = questionMapper.getErrorRate("A2", 4, 1);
		ds.add(a242);
		ds.add(a243);
		ds.add(a241);
	
		Double d42 = questionMapper.getErrorRate("D", 4, 2);
		Double d43 = questionMapper.getErrorRate("D", 4, 3);
		Double d41 = questionMapper.getErrorRate("D", 4, 1);
		ds.add(d42);
		ds.add(d43);
		ds.add(d41);
		return ds;
	}
}
