package com.pylw.driverexam.exam.contoller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.pylw.driverexam.exam.model.Exam;
import com.pylw.driverexam.exam.model.ExamJSONResult;
import com.pylw.driverexam.exam.service.ExamService;

/**
 * ExamController.
 * @author Pty.Me
 *
 */
@RestController
@RequestMapping("/exam")
public class ExamController {

	@Autowired
	ExamService service;
	
	// 参数： user_id subject
	
	@GetMapping("/")
	public ExamJSONResult getExam() {
		Exam exam = new Exam();
		
		return ExamJSONResult.ok(null);
	}
	
	
}
