package com.pylw.driverexam.exam.contoller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.pylw.driverexam.exam.model.Exam;
import com.pylw.driverexam.exam.model.ExamJSONResult;
import com.pylw.driverexam.exam.model.SubjectInfo;
import com.pylw.driverexam.exam.service.impl.ExamServiceImpl;

/**
 * ExamController.
 * @author Pty.Me
 *
 */
@RestController
@RequestMapping("/exam")
public class ExamController {

	@Autowired
	ExamServiceImpl service;
	
	@GetMapping("/subjectInfo")
	public ExamJSONResult getSubjectInfo(@RequestParam() int subjectId) {
		SubjectInfo subjectInfo = service.getSubjectInfo(subjectId);
		
		return new ExamJSONResult(subjectInfo);
	}
	
	@GetMapping
	public ExamJSONResult getExam() {
		Exam exam = new Exam();
		
		return ExamJSONResult.ok(null);
	}
	
	
}
