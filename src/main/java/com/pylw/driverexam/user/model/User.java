package com.pylw.driverexam.user.model;

public class User {
	int user_id;
	String phone;
	String email;
	String password;

	public User() {
	}
	public User(int user_id, String phone, String email, String password) {
		this.user_id = user_id;
		this.phone = phone;
		this.email = email;
		this.password = password;
	}

	public int getUser_id() {
		return user_id;
	}

	public void setUser_id(int user_id) {
		this.user_id = user_id;
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

