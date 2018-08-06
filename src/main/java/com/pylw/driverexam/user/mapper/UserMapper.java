package com.pty.driverexam.user.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import com.pty.driverexam.user.model.User;

@Mapper
public interface UserMapper {
	@Select("select * from users")
	List<User> findAllUsers();
	
	@Select("select * from users where phone = #{phone}")
	User findUserbyPhone(String phone);
	
	@Insert("insert into users values(0,#{phone},#{email},#{password})")
	void creat(User user);
}
