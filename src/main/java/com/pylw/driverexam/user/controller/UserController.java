package com.pylw.driverexam.user.controller;

import java.util.Date;
import java.util.List;
import java.util.Map;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.pylw.driverexam.user.model.User;
import com.pylw.driverexam.user.model.UserInfo;
import com.pylw.driverexam.user.service.UserService;



@RestController
public class UserController {
	
	@Autowired
	UserService userService;
	@Autowired
	private JavaMailSender mailSender;
	

	@PostMapping("login")
	public boolean Login(@RequestBody Map<String ,String> map) {
		return userService.login(map.get("name") ,map.get("password"));
	}
	
	
	@PostMapping("register/name")
	public boolean isNameExist(@RequestBody Map<String ,String> map) {
		return userService.haveName(map.get("name"));
	}
	
	@PostMapping("register")
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
	

	@PostMapping("register/sendIdCode")
	public void sendIDCode(@RequestBody Map<String ,String> map) {
		String account = map.get("name");
        userService.sendIDCode(account);
	}
	@PostMapping("register/confirmCode")
	public boolean confirmCode(@RequestBody Map<String ,String> map) {
		String account = map.get("name");
		String code = map.get("code");
		
		return userService.confirmCode(account, code);
	}
	
	@PostMapping("admin/user")
	public List<UserInfo> findAll(){
		return userService.findAll();
	}
	
	
	@GetMapping("test")
	public List<UserInfo> Login() {
		return userService.findAll();
	}
	
}
