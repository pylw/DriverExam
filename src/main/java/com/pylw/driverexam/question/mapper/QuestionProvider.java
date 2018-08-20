package com.pylw.driverexam.question.mapper;

import java.util.Map;

public class QuestionProvider {

	public String getTotal(Map<String,String> map) {
		StringBuffer sb = new StringBuffer("select count(*) from questions where 1=1");
		if(map == null ||map.isEmpty()) {
			return sb.toString();
		}else {
			if(map.get("question")!=null&&""!=map.get("question")) {
				sb.append(" and question like '%"+map.get("question")+"%' ");
			}
			if(map.get("licenseType")!=null && ""!=map.get("licenseType")) {
				sb.append(" and license_type = '"+map.get("licenseType")+"' ");
			}
			if(map.get("subject")!=null && ""!=map.get("subject")) {
				sb.append(" and subject = '"+map.get("subject")+"' ");
			}
			if(map.get("questionType")!=null && ""!=map.get("questionType")) {
				sb.append(" and question_type = '"+map.get("questionType")+"' ");
			}
		}
		return sb.toString();
	}
	
	public String find(Map<String,String> map) {
		StringBuffer sb = new StringBuffer("select * from questions where 1=1");
		if(map == null ||map.isEmpty()) {
			sb.append(" order by question_id");
			System.out.println(sb.toString());
			return sb.toString();
		}else {
			if(map.get("question")!=null&&""!=map.get("question")) {
				sb.append(" and question like '%"+map.get("question")+"%' ");
			}
			if(map.get("licenseType")!=null && ""!=map.get("licenseType")) {
				sb.append(" and license_type = '"+map.get("licenseType")+"' ");
			}
			if(map.get("subject")!=null && ""!=map.get("subject")) {
				sb.append(" and subject = '"+map.get("subject")+"' ");
			}
			if(map.get("questionType")!=null && ""!=map.get("questionType")) {
				sb.append(" and question_type = '"+map.get("questionType")+"' ");
			}
		}
		sb.append(" order by question_id");
		return sb.toString();

	}
}
