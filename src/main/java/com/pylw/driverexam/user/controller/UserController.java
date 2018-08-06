package com.pty.driverexam.user.controller;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Param;
import org.json.JSONException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.pty.driverexam.user.model.User;
import com.pty.driverexam.user.service.LoginService;


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
