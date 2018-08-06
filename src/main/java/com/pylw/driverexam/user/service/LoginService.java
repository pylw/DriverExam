package com.pty.driverexam.user.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.pty.driverexam.user.mapper.UserMapper;
import com.pty.driverexam.user.model.User;

@Service
public class LoginService {
	@Autowired
	UserMapper userMapper;
	
	public User find(String phone) {
		return userMapper.findUserbyPhone(phone);
	}
	
	public List<User> findAll(){
		return userMapper.findAllUsers();
	}
}
