package com.pylw.driverexam.exam.model;

/**
 * 响应返回对象.
 * 状态对应
 * 	200: 表示成功
 * 	500: 表示错误，错误信息在msg字段
 * @author Pty.Me
 *
 */
public class ExamJSONResult {

	/** 响应业务状态 */
	private Integer status;
	
	/** 响应消息 */
	private String msg;
	
/*	/** 响应状态及消息 *
	private ReturnStatus returnStatus;*/
	
	private Object data;

	public ExamJSONResult() {
	}

	public ExamJSONResult(Integer status, String msg, Object data) {
		this.status = status;
		this.msg = msg;
		this.data = data;
	}

	public ExamJSONResult(Object data) {
		this.status = 200;
		this.msg = "OK";
		this.data = data;
	}

	public Integer getStatus() {
		return status;
	}

	public void setStatus(Integer status) {
		this.status = status;
	}

	public String getMsg() {
		return msg;
	}

	public void setMsg(String msg) {
		this.msg = msg;
	}

	public Object getData() {
		return data;
	}

	public void setData(Object data) {
		this.data = data;
	}
	
	public static ExamJSONResult ok(Object data) {
		return new ExamJSONResult(data);
	}
	
	public static ExamJSONResult ok() {
		return new ExamJSONResult(null);
	}
	
	public static ExamJSONResult error(String msg) {
		return new ExamJSONResult(500, msg, null);
	}
	
}
