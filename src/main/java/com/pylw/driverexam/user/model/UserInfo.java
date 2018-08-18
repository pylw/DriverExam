package com.pylw.driverexam.user.model;

public class UserInfo {
	int userId;
	String username;
	String phone;
	String email;
	String sex;
	String licenseType;
	String city;
	String lastLogin;
	String joinDate;
	String continuousLogin;
	public UserInfo() {
	}
	



	public int getUserId() {
		return userId;
	}




	public void setUserId(int userId) {
		this.userId = userId;
	}




	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
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




	public String getLastLogin() {
		return lastLogin;
	}




	public void setLastLogin(String lastLogin) {
		this.lastLogin = lastLogin;
	}




	public String getJoinDate() {
		return joinDate;
	}




	public void setJoinDate(String joinDate) {
		this.joinDate = joinDate;
	}




	public String getContinuousLogin() {
		return continuousLogin;
	}




	public void setContinuousLogin(String continuousLogin) {
		this.continuousLogin = continuousLogin;
	}
	
	
}
