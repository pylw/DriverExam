package com.pylw.driverexam.user.mapper;

import java.util.Map;

import org.apache.ibatis.jdbc.SQL;

public class UserInfoProvider {
	public UserInfoProvider() {
		
	}
	
	 public String findUsers(final Map<String,String> map){

        StringBuffer sb=new StringBuffer("select * from v_user where 1=1");
        
        if(""!=map.get("username")&&map.get("username")!=null){
            sb.append(" and username like '"+map.get("username")+"%'");
        }if(map.get("email")!=null&& !"".equals(map.get("email"))){
            sb.append(" and email like '"+map.get("email")+"%'");
        }if(map.get("phone")!=null&& !"".equals(map.get("phone"))){
            sb.append(" and phone like '"+map.get("phone")+"%'");
        }if(map.get("city")!=null&& !"".equals(map.get("city"))){
            sb.append(" and city = '"+map.get("city")+"'");
        }if(map.get("sex")!=null&& !"".equals(map.get("sex"))){
            sb.append(" and sex = '"+map.get("sex")+"'");
        }if(map.get("licenseType")!=null&& !"".equals(map.get("licenseType"))){
            sb.append(" and licenseType = '"+map.get("licenseType")+"'");
        }
//        System.out.println(sb.toString());
        return sb.toString();
	 }
	 
	public String findOnePage(final Map<String,String> map) {
		StringBuffer sb=new StringBuffer();
		
		sb.append(findUsers(map));
		
		int size = Integer.parseInt(map.get("size"));
		sb.append(" limit "+size);
		
		if(map.get("current")!=null) {
			int current = Integer.parseInt(map.get("current"));
			sb.append(" offset "+(current-1)*size);
		}
//		System.out.println(sb.toString());
		return sb.toString();
	}
	
	public String findUserSize(final Map<String,String> map) {
		 StringBuffer sb=new StringBuffer("select count(*) from v_user where 1=1");
	        if(""!=map.get("username")&&map.get("username")!=null){
	            sb.append(" and username like '"+map.get("username")+"%'");
	        }if(map.get("email")!=null&& !"".equals(map.get("email"))){
	            sb.append(" and email like '"+map.get("email")+"%'");
	        }if(map.get("phone")!=null&& !"".equals(map.get("phone"))){
	            sb.append(" and phone like '"+map.get("phone")+"%'");
	        }if(map.get("city")!=null&& !"".equals(map.get("city"))){
	            sb.append(" and city = '"+map.get("city")+"'");
	        }if(map.get("sex")!=null&& !"".equals(map.get("sex"))){
	            sb.append(" and sex = '"+map.get("sex")+"'");
	        }if(map.get("licenseType")!=null&& !"".equals(map.get("licenseType"))){
	            sb.append(" and licenseType = '"+map.get("licenseType")+"'");
	        }
//	        System.out.println(sb.toString());
	        return sb.toString();
	}
	
	
	public String update(final Map<String,String> map) {
		SQL sql1= new SQL() {
			{
				UPDATE("users");

				if(map.get("phone")!=null)
					SET("phone = '"+map.get("phone")+"'");
				if(map.get("email")!=null)
					SET("email = '"+map.get("email")+"'");
				WHERE("user_id = "+map.get("userId"));
			}
		};
		SQL sql2  =new SQL() {
			{
				UPDATE("user_info");
				if(map.get("username")!=null)
					SET("username = '"+map.get("username")+"'");
				if(map.get("sex")!=null)
					SET("sex = '"+map.get("sex")+"'");
				if(map.get("city")!=null)
					SET("city = '"+map.get("city")+"'");
				if(map.get("licenseType")!=null)
					SET("license_type = '"+map.get("licenseType")+"'");
				WHERE("user_id = "+map.get("userId"));
			}
		};
		
		return sql1.toString() +";"+sql2.toString();
	}
	
}
