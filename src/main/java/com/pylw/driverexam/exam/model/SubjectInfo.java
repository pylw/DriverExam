package com.pylw.driverexam.exam.model;

public class SubjectInfo {

	private Integer subjectId;
	private String licenseType;
	private Integer singleScore;
	private Integer totalTime;
	private Integer totalQuestion;
	private Integer totalScore;

	public SubjectInfo() {
	}

	/**
	 * @param subjectId
	 * @param licenseType
	 * @param singleScore
	 * @param totalTime
	 * @param totalQuestion
	 * @param totalScore
	 */
	public SubjectInfo(Integer subjectId, String licenseType, Integer singleScore, Integer totalTime,
			Integer totalQuestion, Integer totalScore) {
		super();
		this.subjectId = subjectId;
		this.licenseType = licenseType;
		this.singleScore = singleScore;
		this.totalTime = totalTime;
		this.totalQuestion = totalQuestion;
		this.totalScore = totalScore;
	}

	/**
	 * @return the subjectId
	 */
	public Integer getSubjectId() {
		return subjectId;
	}

	/**
	 * @param subjectId the subjectId to set
	 */
	public void setSubjectId(Integer subjectId) {
		this.subjectId = subjectId;
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
	 * @return the singleScore
	 */
	public Integer getSingleScore() {
		return singleScore;
	}

	/**
	 * @param singleScore the singleScore to set
	 */
	public void setSingleScore(Integer singleScore) {
		this.singleScore = singleScore;
	}

	/**
	 * @return the totalTime
	 */
	public Integer getTotalTime() {
		return totalTime;
	}

	/**
	 * @param totalTime the totalTime to set
	 */
	public void setTotalTime(Integer totalTime) {
		this.totalTime = totalTime;
	}

	/**
	 * @return the totalQuestion
	 */
	public Integer getTotalQuestion() {
		return totalQuestion;
	}

	/**
	 * @param totalQuestion the totalQuestion to set
	 */
	public void setTotalQuestion(Integer totalQuestion) {
		this.totalQuestion = totalQuestion;
	}

	/**
	 * @return the totalScore
	 */
	public Integer getTotalScore() {
		return totalScore;
	}

	/**
	 * @param totalScore the totalScore to set
	 */
	public void setTotalScore(Integer totalScore) {
		this.totalScore = totalScore;
	}

}
