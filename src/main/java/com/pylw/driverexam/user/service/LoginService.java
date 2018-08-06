package com.pylw.driverexam.user.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.pylw.driverexam.user.mapper.UserMapper;
import com.pylw.driverexam.user.model.User;

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
