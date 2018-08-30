package com.pylw.driverexam.question.service;

import java.awt.image.ImageFilter;
import java.io.File;
import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;

import com.pylw.driverexam.question.mapper.QuestionMapper;
import com.pylw.driverexam.question.model.Question;

@Service
public class AdminQuestionService {
	
	@Autowired
	private QuestionMapper questionMapper;
	
	public List<Question> findOnePage(Map<String,String> map){
		List<Question> imgs = questionMapper.findOnePage(map);
		for(Question i : imgs) {
			if(i.getImg()!=null && !i.getImg().equals(""))
			i.setImg("/img" + i.getImg());
		}
		return imgs;
	}
	
	public int getTotal(Map<String,String> map) {
		return questionMapper.getTotal(map);
	}
	
	public void delete(String questionId) {
		int id = Integer.parseInt(questionId);
		questionMapper.delete(id);
	}
	
	public void add(HttpServletRequest request) {
		questionMapper.add(request);
	}

	public void update(HttpServletRequest request) {
		questionMapper.update(request);
	}
}
