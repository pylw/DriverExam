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
	private Integer examId;
	/** 该模拟考试的用户id */
	private Integer userId;
	/** 科目id */
	private Integer subjectId;
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
	 * @param examId
	 * @param userId
	 * @param subjectId
	 * @param startTime
	 * @param endTime
	 * @param totalDone
	 * @param totalError
	 * @param score
	 */
	public Exam(Integer examId, Integer userId, Integer subjectId, Timestamp startTime, Timestamp endTime,
			Integer totalDone, Integer totalError, Integer score) {
		super();
		this.examId = examId;
		this.userId = userId;
		this.subjectId = subjectId;
		this.startTime = startTime;
		this.endTime = endTime;
		this.totalDone = totalDone;
		this.totalError = totalError;
		this.score = score;
	}

	/**
	 * @return the examId
	 */
	public Integer getExamId() {
		return examId;
	}

	/**
	 * @param examId the examId to set
	 */
	public void setExamId(Integer examId) {
		this.examId = examId;
	}

	/**
	 * @return the userId
	 */
	public Integer getUserId() {
		return userId;
	}

	/**
	 * @param userId the userId to set
	 */
	public void setUserId(Integer userId) {
		this.userId = userId;
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
