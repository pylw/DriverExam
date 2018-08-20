package com.pylw.driverexam.question.model;

public class Question {

	private Integer questionId;
	private String licenseType;
	private Integer subject;
	private Integer questionType;
	private String question;
	private String img;
	private String optiona;
	private String optionb;
	private String optionc;
	private String optiond;
	private String answer;
	private String explain;
	
	public Question() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Question(String licenseType, Integer subject, Integer questionType, String question, String img,
			String optiona, String optionb, String optionc, String optiond, String answer, String explain) {
		super();
		this.licenseType = licenseType;
		this.subject = subject;
		this.questionType = questionType;
		this.question = question;
		this.img = img;
		this.optiona = optiona;
		this.optionb = optionb;
		this.optionc = optionc;
		this.optiond = optiond;
		this.answer = answer;
		this.explain = explain;
	}

	public Question(Integer questionId, String licenseType, Integer subject, Integer questionType, String question,
			String img, String optiona, String optionb, String optionc, String optiond, String answer, String explain) {
		super();
		this.questionId = questionId;
		this.licenseType = licenseType;
		this.subject = subject;
		this.questionType = questionType;
		this.question = question;
		this.img = img;
		this.optiona = optiona;
		this.optionb = optionb;
		this.optionc = optionc;
		this.optiond = optiond;
		this.answer = answer;
		this.explain = explain;
	}

	public Integer getQuestionId() {
		return questionId;
	}
	public void setQuestionId(Integer questionId) {
		this.questionId = questionId;
	}
	public String getLicenseType() {
		return licenseType;
	}
	public void setLicenseType(String licenseType) {
		this.licenseType = licenseType;
	}
	public Integer getSubject() {
		return subject;
	}
	public void setSubject(Integer subject) {
		this.subject = subject;
	}
	public Integer getQuestionType() {
		return questionType;
	}
	public void setQuestionType(Integer questionType) {
		this.questionType = questionType;
	}
	public String getQuestion() {
		return question;
	}
	public void setQuestion(String question) {
		this.question = question;
	}
	public String getImg() {
		return img;
	}
	public void setImg(String img) {
		this.img = img;
	}
	public String getOptiona() {
		return optiona;
	}
	public void setOptiona(String optiona) {
		this.optiona = optiona;
	}
	public String getOptionb() {
		return optionb;
	}
	public void setOptionb(String optionb) {
		this.optionb = optionb;
	}
	public String getOptionc() {
		return optionc;
	}
	public void setOptionc(String optionc) {
		this.optionc = optionc;
	}
	public String getOptiond() {
		return optiond;
	}
	public void setOptiond(String optiond) {
		this.optiond = optiond;
	}
	public String getAnswer() {
		return answer;
	}
	public void setAnswer(String answer) {
		this.answer = answer;
	}
	public String getExplain() {
		return explain;
	}
	public void setExplain(String explain) {
		this.explain = explain;
	}
	
	
}
