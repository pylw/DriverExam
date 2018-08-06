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
	
	public List<User> findAll(){
		return userMapper.findAllUsers();
	}
	
	public boolean isExist(String account,String password) {
		List<User> l = userMapper.findUserbyPhone(account, password);
		List<User> l2= userMapper.findUserbyEmail(account, password);
		if(l.size() == 0 && l2.size() == 0) {
			return false;	
		}
//		System.out.println(l.size());
		return true;
	}
}
