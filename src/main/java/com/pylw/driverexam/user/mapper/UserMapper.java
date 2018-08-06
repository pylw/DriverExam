package com.pylw.driverexam.user.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;

import com.pylw.driverexam.user.model.User;

@Mapper
public interface UserMapper {
	@Select("select * from users")
	List<User> findAllUsers();
	
	
	@Select("select * from users where phone = #{phone} and password = #{password}")
	List<User> findUserbyPhone(@Param("phone") String phone,@Param("password") String password);
	
	@Select("select * from users where email = #{email} and password = #{password}")
	List<User> findUserbyEmail(@Param("email") String email,@Param("password") String password);
	
	@Insert("insert into users values(0,#{phone},#{email},#{password})")
	void creat(User user);
}
