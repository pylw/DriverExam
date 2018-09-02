package com.pylw.driverexam.user.model;

import java.sql.Timestamp;

public class UserExams {

	private Integer userId;
	private Integer examId;
	private String username;
	private String sex;
	private String city;
	private String licenseType;
	private Integer subjectId;
	/** 开始日期和时间 */
	private Timestamp startTime;
	/** 结束日期和时间 */
	private Timestamp endTime;
	private Integer totalDone;
	private Integer totalError;
	private Integer score;

	public UserExams() {
		super();
		// TODO Auto-generated constructor stub
	}

	public UserExams(Integer userId, Integer examId, String username, String sex, String city, String licenseType,
			Integer subjectId, Timestamp startTime, Timestamp endTime, Integer totalDone, Integer totalError,
			Integer score) {
		super();
		this.userId = userId;
		this.examId = examId;
		this.username = username;
		this.sex = sex;
		this.city = city;
		this.licenseType = licenseType;
		this.subjectId = subjectId;
		this.startTime = startTime;
		this.endTime = endTime;
		this.totalDone = totalDone;
		this.totalError = totalError;
		this.score = score;
	}

	public Integer getUserId() {
		return userId;
	}

	public void setUserId(Integer userId) {
		this.userId = userId;
	}

	public Integer getExamId() {
		return examId;
	}

	public void setExamId(Integer examId) {
		this.examId = examId;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getSex() {
		return sex;
	}

	public void setSex(String sex) {
		this.sex = sex;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getLicenseType() {
		return licenseType;
	}

	public void setLicenseType(String licenseType) {
		this.licenseType = licenseType;
	}

	public Integer getSubjectId() {
		return subjectId;
	}

	public void setSubjectId(Integer subjectId) {
		this.subjectId = subjectId;
	}

	public Timestamp getStartTime() {
		return startTime;
	}

	public void setStartTime(Timestamp startTime) {
		this.startTime = startTime;
	}

	public Timestamp getEndTime() {
		return endTime;
	}

	public void setEndTime(Timestamp endTime) {
		this.endTime = endTime;
	}

	public Integer getTotalDone() {
		return totalDone;
	}

	public void setTotalDone(Integer totalDone) {
		this.totalDone = totalDone;
	}

	public Integer getTotalError() {
		return totalError;
	}

	public void setTotalError(Integer totalError) {
		this.totalError = totalError;
	}

	public Integer getScore() {
		return score;
	}

	public void setScore(Integer score) {
		this.score = score;
	}

}
