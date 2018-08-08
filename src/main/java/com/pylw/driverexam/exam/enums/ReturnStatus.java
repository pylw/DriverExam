package com.pylw.driverexam.exam.enums;

/**
 * 返回状态及消息枚举.
 * @author Pty.Me
 *
 */
public enum ReturnStatus {
	UNKNOWN_ERROR(-1,"未知错误"),
	SUCCESS(0,"成功"),
	;
	private Integer code;
	private String msg;
	
	ReturnStatus(Integer code, String msg) {
		this.code = code;
		this.msg = msg;
	}

	public Integer getCode() {
		return code;
	}

	public String getMsg() {
		return msg;
	}
	
	
}
