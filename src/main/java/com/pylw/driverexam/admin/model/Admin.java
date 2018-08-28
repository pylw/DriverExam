package com.pylw.driverexam.admin.model;

public class Admin {
	
	private Integer adminId;
	private String phone;
	private String email;
	private String password;
	
	public Admin() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Admin(String phone, String email, String password) {
		super();
		this.phone = phone;
		this.email = email;
		this.password = password;
	}

	public Admin(Integer adminId, String phone, String email, String password) {
		super();
		this.adminId = adminId;
		this.phone = phone;
		this.email = email;
		this.password = password;
	}

	public Integer getAdminId() {
		return adminId;
	}

	public void setAdminId(Integer adminId) {
		this.adminId = adminId;
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
