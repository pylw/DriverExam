package com.pylw.driverexam.question.controller;

import java.io.File;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;

import com.pylw.driverexam.question.model.Question;
import com.pylw.driverexam.question.service.AdminQuestionService;

@RestController
@RequestMapping("/admin/question")
public class AdminQuestionController {
	
	@Autowired
	AdminQuestionService service;
	
	@PostMapping("/onepage")
	public List<Question> findOnePage(@RequestBody Map<String ,String> map){
		return service.findOnePage(map);
	}
	@PostMapping("questionSize")
	public int questionSize(@RequestBody Map<String ,String> map) {
		return service.getTotal(map);
	}
	@PostMapping("delete")
	public void delete(@RequestBody Map<String,String> map) {
		service.delete(map.get("questionId"));
	}
	@PostMapping("add")
	public void add(HttpServletRequest request) {
		service.add(request);
	}
	@PostMapping("update")
	public void update(HttpServletRequest request) {
		service.update(request);
	}

	@PostMapping("test")
	public String Tets() {
		return "test";
	}
}
