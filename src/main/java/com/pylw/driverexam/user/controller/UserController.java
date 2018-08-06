package com.pylw.driverexam.user.controller;

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

import com.pylw.driverexam.user.model.User;
import com.pylw.driverexam.user.service.LoginService;


@Controller
public class UserController {
	
	@Autowired
	LoginService loginService;
	
	@PostMapping("login")
	@ResponseBody
	public boolean Login(@RequestBody Map<String ,String> map) {
		String phone = map.get("name");
		String password = map.get("password");
		return loginService.isExist(phone ,password);
	}
	
	@GetMapping("test")
	@ResponseBody
	public List<User> Login() {
		return loginService.findAll();
	}
	
}
