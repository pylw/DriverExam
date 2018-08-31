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
import com.pylw.driverexam.user.model.UserExams;
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
	
	@PostMapping("/user/login")
	public User userLogin(@RequestBody User user) {
		return userService.userLogin(user);
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
	@PostMapping("admin/havePhone")
	public boolean havePhone(@RequestBody Map<String,String> map) {
		String phone = map.get("phone");
		String userId = map.get("userId");
		return userService.clashPhone(phone, userId);
	}
	@PostMapping("admin/haveEmail")
	public boolean haveEmail(@RequestBody Map<String,String> map) {
		String email = map.get("email");
		String userId = map.get("userId");
		return userService.clashEmail(email, userId);
	}
	@PostMapping("admin/user/select")
	public List<UserInfo> findUsers(@RequestBody Map<String,String> map){
		return userService.findUsers(map);
	}
	@PostMapping("admin/user")
	public List<UserInfo> findAll(){
		return userService.findAll();
	}
	@PostMapping("admin/user/total")
	public int findUserSize(@RequestBody Map<String,String> map) {
		return userService.findUserSize(map);
	}
	@PostMapping("admin/user/onepage")
	public List<UserInfo> findOnePage(@RequestBody Map<String ,String> map){
		return userService.findOnePage(map);
	}
	@PostMapping("admin/user/update")
	public void update(@RequestBody Map<String,String> map) {
		userService.update(map);
	}

	
	@GetMapping("test")
	public List<UserInfo> Login() {
		return userService.findAll();
	}
	
	@GetMapping("/user/findAll")
	public List<UserInfo> findAllUserInfo(){
		return userService.findAllUserInfo();
	}
	
	@GetMapping("/user/byscore")
	public List<UserExams> findOrderScore(){
		return userService.findOrderScore();
	}
}
