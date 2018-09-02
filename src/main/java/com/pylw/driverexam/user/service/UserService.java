package com.pylw.driverexam.user.service;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import com.pylw.driverexam.user.mapper.UserMapper;
import com.pylw.driverexam.user.model.User;
import com.pylw.driverexam.user.model.UserExams;
import com.pylw.driverexam.user.model.UserInfo;

@Service
public class UserService {
	@Autowired
	UserMapper userMapper;
	@Autowired
	private JavaMailSender mailSender;
	
	public class Code{
		String code;
		long startTime;
		public Code() {
			//生成随机的6位数验证码
			code = String.valueOf((int)(Math.random()*1000000));
			startTime = System.currentTimeMillis();
		}
		public boolean isEffective(String code, long time) {
			if(!this.code.equals(code))
				return false;
			if(time-this.startTime<=5*60*1000)
				return true;
			return false;
		}
	}


	//一个用户对应一个验证码
	Map<String ,Code> map = new HashMap<>();
	
	//发送验证码
	public void sendIDCode(String account) {
		SimpleMailMessage message = new SimpleMailMessage();
        message.setFrom("1152544623@qq.com");// 发送者.
        message.setTo(account);// 接收者.
        message.setSubject("注册验证码——来自在线驾考答题网站");// 邮件主题.
        map.put(account, new Code());
        message.setText("验证码为："+map.get(account).code+"\n有效期5分钟");// 邮件内容.
        mailSender.send(message);// 发送邮件
	}
	
	//判断验证码
	public boolean confirmCode(String account,String code) {
		
		return map.get(account).isEffective(code, System.currentTimeMillis());
	}
	
	public List<UserInfo> findAll(){
		return userMapper.findAllUsers();
	}
	//查找一页
	public List<UserInfo> findOnePage(Map<String,String> map){
		return userMapper.findOnePage(map);
	}
	public int findUserSize(Map<String,String> map) {
		return userMapper.findUserSize(map);
	}
	public List<UserInfo> findUsers(Map<String,String> map){
		return userMapper.findUsers(map);
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
		List<User> l2 = userMapper.findbyEmail(account);
		if(l1.size() == 0 && l2.size() == 0) {
			return false;	
		}
		return true;
	}
	public boolean clashPhone(String phone ,String userId) {
		List<User> l1 = userMapper.clashPhone(phone, userId);
		if(l1.size()==0)
			return false;
		return true;
	}
	public boolean clashEmail(String email, String userId) {
		List<User> l1 = userMapper.clashEmail(email, userId);
		if(l1.size()==0)
			return false;
		return true;
	}
	//添加用户
	public void add(User u) {
		userMapper.creat(u);
		
	}
	//更新用户信息
	public void update(Map<String,String> map) {
		userMapper.update(map);
	}

	public List<UserInfo> findAllUserInfo(){
		return userMapper.findAll();
	}
	
	public User userLogin(User user) {
		User u = userMapper.userLogin(user);
		if(u!=null) {
			UserInfo userInfo = userMapper.findByUserId(u.getUserId());
			String lastLogin = userInfo.getLastLogin();
			SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
			Date currentTime = new Date();
			String dateString = formatter.format(currentTime);
			if(lastLogin != null && userInfo.getContinuousLogin() != null){
				Date l=null;
				try {
					l = formatter.parse(lastLogin);
				} catch (ParseException e) {
					e.printStackTrace();
				}
		        Calendar cal1 = Calendar.getInstance();
		        cal1.setTime(l);
		        Calendar cal2 = Calendar.getInstance();
		        cal2.setTime(currentTime);
		        int day1= cal1.get(Calendar.DAY_OF_YEAR);
		        int day2 = cal2.get(Calendar.DAY_OF_YEAR);
		        int year1 = cal1.get(Calendar.YEAR);
		        int year2 = cal2.get(Calendar.YEAR);
		        int timeDistance = 0 ;
		        if(year1 != year2)   //不同一年
		        {
		            for(int i = year1 ; i < year2 ; i ++)
		            {
		                if(i%4==0 && i%100!=0 || i%400==0)    //闰年            
		                {
		                    timeDistance += 366;
		                }
		                else    //不是闰年
		                {
		                    timeDistance += 365;
		                }
		            }
		        }
		        if(timeDistance + day2-day1==1) {
		        	userInfo.setContinuousLogin(Integer.toString(Integer.parseInt(userInfo.getContinuousLogin())+1));
		        }
			}else {
	        	userInfo.setContinuousLogin("1");
			}
			userInfo.setLastLogin(dateString);
			userMapper.updateUserInfo(userInfo);
		}
		return userMapper.userLogin(user);
	}

	public List<UserExams> findOrderScore() {
		return userMapper.findOrderScore();
	}

	public UserInfo getUserInfo(Integer userId) {
		return userMapper.findByUserId(userId);
	}

	public Integer updateUserInfo(Map<String, String> map) {
		return userMapper.update(map);
	}
	
}

