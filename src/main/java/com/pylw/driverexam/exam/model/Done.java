package com.pylw.driverexam.exam.model;

/**
 * 已做的题相关信息实体类.
 * 
 * @author Pty.Me
 *
 */
public class Done {

	/** 用户id */
	private Integer userId;
	/** 问题id */
	private Integer questionId;
	/** 对错状态 */
	private String statusTf;
	/** 收藏/屏蔽状态 */
	private String statusCn;

	public Done() {
	}

	/**
	 * @param userId
	 * @param questionId
	 * @param statusTf
	 * @param statusCn
	 */
	public Done(Integer userId, Integer questionId, String statusTf, String statusCn) {
		this.userId = userId;
		this.questionId = questionId;
		this.statusTf = statusTf;
		this.statusCn = statusCn;
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
	 * @return the statusTf
	 */
	public String getStatusTf() {
		return statusTf;
	}

	/**
	 * @param statusTf the statusTf to set
	 */
	public void setStatusTf(String statusTf) {
		this.statusTf = statusTf;
	}

	/**
	 * @return the statusCn
	 */
	public String getStatusCn() {
		return statusCn;
	}

	/**
	 * @param statusCn the statusCn to set
	 */
	public void setStatusCn(String statusCn) {
		this.statusCn = statusCn;
	}

}
