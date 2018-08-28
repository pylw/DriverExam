package com.pylw.driverexam.admin.mapper;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import com.pylw.driverexam.admin.model.Admin;

@Mapper
public interface AdminMapper {

	@Select("select * from admins where (phone=#{phone} or email=#{email}) and password=#{password}")
	Admin login(Admin admin);
	
	
}
