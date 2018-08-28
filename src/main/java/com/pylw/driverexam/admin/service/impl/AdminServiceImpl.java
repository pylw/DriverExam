package com.pylw.driverexam.admin.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.pylw.driverexam.admin.mapper.AdminMapper;
import com.pylw.driverexam.admin.model.Admin;
import com.pylw.driverexam.admin.service.AdminService;

@Service
public class AdminServiceImpl implements AdminService{

	@Autowired
	private AdminMapper adminMapper;
	
	@Override
	public Admin login(Admin admin) {
		return adminMapper.login(admin);
	}

	
}
