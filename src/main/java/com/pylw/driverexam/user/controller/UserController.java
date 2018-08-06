package com.pylw.driverexam.user.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.pylw.driverexam.user.model.User;
import com.pylw.driverexam.user.service.LoginService;


@Controller
public class UserController {
	
	@Autowired
	LoginService loginService;
	
	@PostMapping("login")
	@ResponseBody
	public User Login(User user) {
		
		return user;
	}
	
	@GetMapping("test")
	@ResponseBody
	public List<User> Login() {
		return loginService.findAll();
	}
	
}
