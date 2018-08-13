package com.pylw.driverexam.exam.model;

/**
 * 题目对象实体.
 * 
 * @author Pty.Me
 *
 */
public class Question {

	/** 题目id */
	private Integer questionId;
	/** 驾照类型 */
	private String licenseType;
	/** 科目 */
	private String subject;
	/** 题型 */
	private String questionType;
	/** 题干 */
	private String question;
	/** 图片路径 */
	private String img;
	/** 选项A */
	private String optionA;
	/** 选项B */
	private String optionB;
	/** 选项C */
	private String optionC;
	/** 选项D */
	private String optionD;
	/** 答案 */
	private String answer;
	/** 解析 */
	private String explain;

	public Question() {
	}

	/**
	 * @param questionId
	 * @param licenseType
	 * @param subject
	 * @param questionType
	 * @param question
	 * @param img
	 * @param optionA
	 * @param optionB
	 * @param optionC
	 * @param optionD
	 * @param answer
	 * @param explain
	 */
	public Question(Integer questionId, String licenseType, String subject, String questionType, String question,
			String img, String optionA, String optionB, String optionC, String optionD, String answer, String explain) {
		this.questionId = questionId;
		this.licenseType = licenseType;
		this.subject = subject;
		this.questionType = questionType;
		this.question = question;
		this.img = img;
		this.optionA = optionA;
		this.optionB = optionB;
		this.optionC = optionC;
		this.optionD = optionD;
		this.answer = answer;
		this.explain = explain;
	}

	/**
	 * @return the questionId
	 */
	public Integer getQuestionId() {
		return questionId;
	}

	/**
	 * @param questionId the questionId to set
	 */
	public void setQuestionId(Integer questionId) {
		this.questionId = questionId;
	}

	/**
	 * @return the licenseType
	 */
	public String getLicenseType() {
		return licenseType;
	}

	/**
	 * @param licenseType the licenseType to set
	 */
	public void setLicenseType(String licenseType) {
		this.licenseType = licenseType;
	}

	/**
	 * @return the subject
	 */
	public String getSubject() {
		return subject;
	}

	/**
	 * @param subject the subject to set
	 */
	public void setSubject(String subject) {
		this.subject = subject;
	}

	/**
	 * @return the questionType
	 */
	public String getQuestionType() {
		return questionType;
	}

	/**
	 * @param questionType the questionType to set
	 */
	public void setQuestionType(String questionType) {
		this.questionType = questionType;
	}

	/**
	 * @return the question
	 */
	public String getQuestion() {
		return question;
	}

	/**
	 * @param question the question to set
	 */
	public void setQuestion(String question) {
		this.question = question;
	}

	/**
	 * @return the img
	 */
	public String getImg() {
		return img;
	}

	/**
	 * @param img the img to set
	 */
	public void setImg(String img) {
		this.img = img;
	}

	/**
	 * @return the optionA
	 */
	public String getOptionA() {
		return optionA;
	}

	/**
	 * @param optionA the optionA to set
	 */
	public void setOptionA(String optionA) {
		this.optionA = optionA;
	}

	/**
	 * @return the optionB
	 */
	public String getOptionB() {
		return optionB;
	}

	/**
	 * @param optionB the optionB to set
	 */
	public void setOptionB(String optionB) {
		this.optionB = optionB;
	}

	/**
	 * @return the optionC
	 */
	public String getOptionC() {
		return optionC;
	}

	/**
	 * @param optionC the optionC to set
	 */
	public void setOptionC(String optionC) {
		this.optionC = optionC;
	}

	/**
	 * @return the optionD
	 */
	public String getOptionD() {
		return optionD;
	}

	/**
	 * @param optionD the optionD to set
	 */
	public void setOptionD(String optionD) {
		this.optionD = optionD;
	}

	/**
	 * @return the answer
	 */
	public String getAnswer() {
		return answer;
	}

	/**
	 * @param answer the answer to set
	 */
	public void setAnswer(String answer) {
		this.answer = answer;
	}

	/**
	 * @return the explain
	 */
	public String getExplain() {
		return explain;
	}

	/**
	 * @param explain the explain to set
	 */
	public void setExplain(String explain) {
		this.explain = explain;
	}

}
