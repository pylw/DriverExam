package com.pylw.driverexam.user.controller;

import java.util.List;
import java.util.Map;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;

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
	
	// 发送邮箱验证码
	@PostMapping("register/sendIdCode")
	public String sendIDCode(@RequestBody Map<String ,String> map) {
		SimpleMailMessage message = new SimpleMailMessage();

        message.setFrom("1152544623@qq.com");// 发送者.
        message.setTo(map.get("name"));// 接收者.
        message.setSubject("注册验证码——来自在线驾考答题网站");// 邮件主题.
        String text = String.valueOf((int)(Math.random()*1000000));
        message.setText("验证码为："+text);// 邮件内容.

        mailSender.send(message);// 发送邮件
        return text;
	}
	
	@PostMapping("admin/user")
	public List<UserInfo> findAll(){
		return userService.findAll();
	}
	
	
//	@GetMapping("test")
//	public List<User> Login() {
//		return userService.findAll();
//	}
	
}
