package com.pylw.driverexam.exam.model;

import java.sql.Timestamp;

/**
 * 保存考试相关信息.
 * 
 * @author Pty.Me
 *
 */
public class Exam {

	/** 模拟考试id */
	private Integer examID;
	/** 该模拟考试的用户id */
	private Integer userID;
	/** 科目id */
	private Integer subjectID;
	/** 开始日期和时间 */
	private Timestamp startTime;
	/** 结束日期和时间 */
	private Timestamp endTime;
	/** 本次模拟考试一共做了多少道题 */
	private Integer totalDone;
	/** 本次模拟考试错了多少道题 */
	private Integer totalError;
	/** 本次模拟考试分数 */
	private Integer score;

	public Exam() {
	}

	/**
	 * @param examID
	 * @param userID
	 * @param subjectID
	 * @param startTime
	 * @param endTime
	 * @param totalDone
	 * @param totalError
	 * @param score
	 */
	public Exam(Integer examID, Integer userID, Integer subjectID, Timestamp startTime, Timestamp endTime,
			Integer totalDone, Integer totalError, Integer score) {
		super();
		this.examID = examID;
		this.userID = userID;
		this.subjectID = subjectID;
		this.startTime = startTime;
		this.endTime = endTime;
		this.totalDone = totalDone;
		this.totalError = totalError;
		this.score = score;
	}

	/**
	 * @return the examID
	 */
	public Integer getExamID() {
		return examID;
	}

	/**
	 * @param examID the examID to set
	 */
	public void setExamID(Integer examID) {
		this.examID = examID;
	}

	/**
	 * @return the userID
	 */
	public Integer getUserID() {
		return userID;
	}

	/**
	 * @param userID the userID to set
	 */
	public void setUserID(Integer userID) {
		this.userID = userID;
	}

	/**
	 * @return the subjectID
	 */
	public Integer getSubjectID() {
		return subjectID;
	}

	/**
	 * @param subjectID the subjectID to set
	 */
	public void setSubjectID(Integer subjectID) {
		this.subjectID = subjectID;
	}

	/**
	 * @return the startTime
	 */
	public Timestamp getStartTime() {
		return startTime;
	}

	/**
	 * @param startTime the startTime to set
	 */
	public void setStartTime(Timestamp startTime) {
		this.startTime = startTime;
	}

	/**
	 * @return the endTime
	 */
	public Timestamp getEndTime() {
		return endTime;
	}

	/**
	 * @param endTime the endTime to set
	 */
	public void setEndTime(Timestamp endTime) {
		this.endTime = endTime;
	}

	/**
	 * @return the totalDone
	 */
	public Integer getTotalDone() {
		return totalDone;
	}

	/**
	 * @param totalDone the totalDone to set
	 */
	public void setTotalDone(Integer totalDone) {
		this.totalDone = totalDone;
	}

	/**
	 * @return the totalError
	 */
	public Integer getTotalError() {
		return totalError;
	}

	/**
	 * @param totalError the totalError to set
	 */
	public void setTotalError(Integer totalError) {
		this.totalError = totalError;
	}

	/**
	 * @return the score
	 */
	public Integer getScore() {
		return score;
	}

	/**
	 * @param score the score to set
	 */
	public void setScore(Integer score) {
		this.score = score;
	}

}
