package com.pylw.driverexam.exam.enums;

/**
 * 不同驾照类型不同科目对应名称及模拟考试题库视图信息.
 * 
 * @author Pty.Me
 *
 */
public enum SubjectQViewEnum {
	A1_1("v_exam_a1_1"),
	A1_4("v_exam_a1_4"),
	A2_1("v_exam_a2_1"),
	A2_4("v_exam_a2_4"),
	C1_1("v_exam_c1_1"),
	C1_4("v_exam_c1_4"),
	C2_1("v_exam_c1_1"),
	C2_4("v_exam_c1_4"),
	D_1("v_exam_d_1"),
	D_4("v_exam_d_4"),
	;
	private String examView;

	/**
	 * @param examView
	 */
	SubjectQViewEnum(String examView) {
		this.examView = examView;
	}

	/**
	 * @return the examView
	 */
	public String getExamView() {
		return examView;
	}

}
