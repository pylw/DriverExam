package com.pylw.driverexam.user.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;

import com.pylw.driverexam.user.model.User;
import com.pylw.driverexam.user.model.UserInfo;
import org.apache.ibatis.annotations.*;
@Mapper
public interface UserMapper {
	@Select("select * from v_user")
	List<UserInfo> findAllUsers();
	
	
	@Select("select * from users where phone = #{phone} and password = #{password}")
	List<User> findUserbyPhone(@Param("phone") String phone,@Param("password") String password);
	@Select("select * from users where phone = #{phone}")
	List<User> findbyPhone(@Param("phone") String phone);
	
	@Select("select * from users where email = #{email} and password = #{password}")
	List<User> findUserbyEmail(@Param("email") String email,@Param("password") String password);
	@Select("select * from users where email = #{email}")
	List<User> findbyEmail(@Param("email") String email);
	
	@Insert("insert into users values(0,#{phone},#{email},#{password});"
		  + "insert into user_info(user_id,join_date,last_login) values(last_insert_id(),now(),now())")	
	void creat(User user);
	
}
