package com.pylw.driverexam.exam.contoller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.pylw.driverexam.exam.enums.SubjectQViewEnum;
import com.pylw.driverexam.exam.model.Exam;
import com.pylw.driverexam.exam.model.ExamJSONResult;
import com.pylw.driverexam.exam.model.Question;
import com.pylw.driverexam.exam.model.SubjectInfo;
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
	
	/**
	 * 获取科目信息.
	 * @param subjectId
	 * @param licenseType
	 * @return
	 */
	@GetMapping("/subjectInfo")
	public ExamJSONResult getSubjectInfo(
			@RequestParam(name="s", required=true) int subjectId,
			@RequestParam(name="lt", defaultValue="C1") String licenseType) {
		SubjectInfo subjectInfo = service.getSubjectInfo(subjectId, licenseType);
		return ExamJSONResult.ok(subjectInfo);
	}
	
	/**
	 * 根据驾照类型和科目获取模拟考试题目.
	 * @param subject
	 * @return
	 */
	@GetMapping("/questions")
	public ExamJSONResult getQuestions(
			@RequestParam(name="ls", required=true) String subject) {
		switch (subject) {
		case "A1_1":
		case "A1_4":
		case "A2_1":
		case "A2_4":
		case "C1_1":
		case "C1_4":
		case "C2_1":
		case "C2_4":
		case "D_1":
		case "D_4":
			return ExamJSONResult.ok(service.getQuestions(SubjectQViewEnum.valueOf(subject)));
		default:
			return ExamJSONResult.error("其他驾照类型暂未支持，正在进行中……");
		}
	}
	
	@PostMapping
	public ExamJSONResult createExam(
			@RequestParam(name="s", required=true) int subjectId,
			@RequestParam(name="lt", defaultValue="C1") String licenseType,
			@RequestParam(name="u", required=true) int userId) {
		
		return ExamJSONResult.ok();
	}
	
}
