package com.pylw.driverexam.user.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;

import com.pylw.driverexam.user.model.User;
import com.pylw.driverexam.user.service.UserService;


@Controller
public class UserController {
	
	@Autowired
	UserService userService;
	

	@PostMapping("login")
	@ResponseBody
	public boolean Login(@RequestBody Map<String ,String> map) {
		return userService.login(map.get("name") ,map.get("password"));
	}
	
	
	@PostMapping("register/name")
	@ResponseBody
	public boolean isNameExist(@RequestBody Map<String ,String> map) {
		return userService.haveName(map.get("name"));
	}
	
	@PostMapping("register")
	@ResponseBody
	public boolean register(@RequestBody Map<String ,String> map) {
		String account = map.get("name");
		User u = new User();
		if(account.contains("@"))
			u.setEmail(account);
		else u.setPhone(account);
		u.setPassword(map.get("password"));
		
		userService.add(u);
		return true;
	}
	
	@GetMapping("test")
	@ResponseBody
	public List<User> Login() {
		return userService.findAll();
	}
	
}
