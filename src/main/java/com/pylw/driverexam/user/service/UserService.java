package com.pylw.driverexam.user.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.pylw.driverexam.user.mapper.UserMapper;
import com.pylw.driverexam.user.model.User;
import com.pylw.driverexam.user.model.UserInfo;

@Service
public class UserService {
	@Autowired
	UserMapper userMapper;
	
	public List<UserInfo> findAll(){
		return userMapper.findAllUsers();
	}
	
	//根据用户名和密码查询数据库
	public boolean login(String account,String password) {
		List<User> l = userMapper.findUserbyPhone(account, password);
		List<User> l2= userMapper.findUserbyEmail(account, password);
		if(l.size() == 0 && l2.size() == 0) {
			return false;	
		}
		return true;
	}
	
	//判断是否已经存在一个同名的账户
	public boolean haveName(String account) {
		List<User> l1 = userMapper.findbyPhone(account);
		List<User> l2= userMapper.findbyEmail(account);
		if(l1.size() == 0 && l2.size() == 0) {
			return false;	
		}
		return true;
	}
	
	//添加用户
	public void add(User u) {
		userMapper.creat(u);
		
	}
}
