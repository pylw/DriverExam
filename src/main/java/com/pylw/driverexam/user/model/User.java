package com.pylw.driverexam.user.model;

public class User {
	int userId;
	String phone;
	String email;
	String password;

	public User() {
	}

	public User(int userId, String phone, String email, String password) {
		this.userId = userId;
		this.phone = phone;
		this.email = email;
		this.password = password;
	}

	public int getUserId() {
		return userId;
	}

	public void setUserId(int userId) {
		this.userId = userId;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}
}
