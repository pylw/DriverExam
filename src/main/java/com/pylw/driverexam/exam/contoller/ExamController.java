package com.pylw.driverexam.exam.contoller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.pylw.driverexam.exam.enums.SubjectQViewEnum;
import com.pylw.driverexam.exam.model.Done;
import com.pylw.driverexam.exam.model.Exam;
import com.pylw.driverexam.exam.model.ExamJSONResult;
import com.pylw.driverexam.exam.model.SubjectInfo;
import com.pylw.driverexam.exam.service.ExamService;

/**
 * ExamController.
 * 
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
	 * 
	 * @param subjectId
	 * @param licenseType
	 * @return
	 */
	@GetMapping("/subjectInfo")
	public ExamJSONResult getSubjectInfo(@RequestParam(name = "s", required = true) int subjectId,
			@RequestParam(name = "lt", defaultValue = "C1") String licenseType) {
		licenseType = licenseType.toUpperCase();
		SubjectInfo subjectInfo = service.getSubjectInfo(subjectId, licenseType);
		return ExamJSONResult.ok(subjectInfo);
	}

	/**
	 * 根据驾照类型和科目获取模拟考试题目.
	 * 
	 * @param subject
	 * @return
	 */
	@GetMapping("/questions")
	public ExamJSONResult getQuestions(@RequestParam(name = "ls", required = true) String subject) {
		subject = subject.toUpperCase();
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

	/**
	 * 更新做过的题对/错、收藏/屏蔽状态.
	 * 
	 * @param done
	 * @return
	 */
	@PostMapping("/updatedone")
	public ExamJSONResult updateDone(Done done) {
		if (done == null || done.getUserId() == null || done.getQuestionId() == null) {
			return ExamJSONResult.error("数据为空！");
		}
		int result = service.updateDone(done);
		if (result > 0) {
			return ExamJSONResult.ok();
		} else {
			return ExamJSONResult.error("" + result);
		}
	}

	/**
	 * 用户模拟考试后交卷提交的接口.
	 * 
	 * @param subjectId
	 * @param licenseType
	 * @param userId
	 * @return
	 */
	@PostMapping("/submit")
	public ExamJSONResult finishExam(Exam exam) {
		if(exam.getScore() == null) {
			return ExamJSONResult.error("数据为空！");
		}
		int result = service.submitExam(exam);
		return result > 0 ? ExamJSONResult.ok() : ExamJSONResult.error("" + result);
	}

	/**
	 * 获取指定用户的所有考试记录.
	 * 
	 * @param userId
	 * @return
	 */
	@GetMapping("/exams/{userId}")
	public ExamJSONResult getExams(@PathVariable int userId) {
		List<Exam> exams = service.getExams(userId);
		if (exams.isEmpty()) {
			return ExamJSONResult.error("未查询到相关记录！");
		}
		return ExamJSONResult.ok(exams);
	}

}
