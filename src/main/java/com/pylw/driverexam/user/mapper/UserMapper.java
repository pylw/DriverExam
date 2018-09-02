package com.pylw.driverexam.user.mapper;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;

import com.pylw.driverexam.user.model.User;
import com.pylw.driverexam.user.model.UserExams;
import com.pylw.driverexam.user.model.UserInfo;
import org.apache.ibatis.annotations.*;
@Mapper
public interface UserMapper {
	@Select("select * from v_user")
	List<UserInfo> findAllUsers();
	
	
	@SelectProvider(type=UserInfoProvider.class,method="findOnePage")
	List<UserInfo> findOnePage(Map<String,String> map);
	
	@SelectProvider(type=UserInfoProvider.class,method="findUserSize")
	public int findUserSize(Map<String,String> map);
	
	@Select("select * from users where phone = #{phone} and password = #{password}")
	List<User> findUserbyPhone(@Param("phone") String phone,@Param("password") String password);
	@Select("select * from users where phone = #{phone}")
	List<User> findbyPhone(@Param("phone") String phone);
	@Select("select * from users where phone = #{phone} and user_id <> #{userId}")
	List<User> clashPhone(@Param("phone") String phone,@Param("userId") String userId);
	
	@Select("select * from users where email = #{email} and password = #{password}")
	List<User> findUserbyEmail(@Param("email") String email,@Param("password") String password);
	@Select("select * from users where email = #{email}")
	List<User> findbyEmail(@Param("email") String email);
	@Select("select * from users where email = #{email} and user_id <> #{userId}")
	List<User> clashEmail(@Param("email") String email,@Param("userId") String userId);
	@SelectProvider(type=UserInfoProvider.class,method="findUsers")
    public List<UserInfo> findUsers(Map<String,String> map);
	
	
	@Insert("insert into users values(0,#{phone},#{email},#{password});"
		  + "insert into user_info(user_id,join_date,last_login) values(last_insert_id(),now(),now())")	
	void creat(User user);
	
	@UpdateProvider(type=UserInfoProvider.class,method="update")
	Integer update(Map<String,String> map);

	@Select("select * from users where (phone=#{phone} or email=#{email}) and password=#{password}")
	User userLogin(User user);

	@Select("select * from v_user where user_id = #{id}")
	UserInfo findByUserId(Integer id);

	@Update("update user_info set last_login=#{lastLogin},continuous_login=#{continuousLogin} where user_id=#{userId}")
	void updateUserInfo(UserInfo userInfo);
	
	@Select("select * from v_user order by continuous_login")
	List<UserInfo> findAll();


	@Select("select * from user_info,exams,users where user_info.user_id=exams.user_id and user_info.user_id=users.user_id order by score desc,end_time-start_time")
	List<UserExams> findOrderScore();
}
