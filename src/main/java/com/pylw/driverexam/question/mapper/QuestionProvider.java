package com.pylw.driverexam.question.mapper;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.OutputStream;
import java.util.Base64;
import java.util.HashMap;
import java.util.List;
import java.util.Base64.Decoder;

import javax.servlet.http.HttpServletRequest;

import java.util.Map;

import org.apache.ibatis.jdbc.SQL;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;



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
	
	
	public String findOnePage(Map<String,String> map) {
		StringBuffer sb = new StringBuffer();
		sb.append(find(map));
		int size = Integer.parseInt(map.get("size"));
		sb.append(" limit "+size);
		int current = Integer.parseInt(map.get("current"));
		sb.append(" offset "+(current-1)*size);
		return sb.toString();
	}
	
	public String add(HttpServletRequest request) {
		MultipartHttpServletRequest params = ((MultipartHttpServletRequest) request);  
        List<MultipartFile> files = ((MultipartHttpServletRequest) request)    
                .getFiles("imgFile");
        MultipartFile imageFile = files.get(0);
		File imgPath = new File("./src/main/resources/static/img/v2/"+imageFile.getOriginalFilename());
		System.out.println(imgPath.getAbsolutePath());
		try {
			imageFile.transferTo(imgPath.getAbsoluteFile());
		} catch (IllegalStateException | IOException e) {
			e.printStackTrace();
		}

		SQL sql = new SQL(){
			{
				INSERT_INTO("questions");
				VALUES("`question_id`", "0");
				if(params.getParameter("question") != null)
					VALUES("`question`", "'"+params.getParameter("question")+"'");
				if(params.getParameter("licenseType") != null)
					VALUES("`license_type`", "'"+params.getParameter("licenseType")+"'");
				if(params.getParameter("answer")!=null)
					VALUES("`answer`", "'"+params.getParameter("answer")+"'");
				if(params.getParameter("explain")!=null)
					VALUES("`explain`", "'"+params.getParameter("explain")+"'");
				if(params.getParameter("img")!=null)
					VALUES("`img`", "'/v2/"+imgPath.getName()+"'");
				if(params.getParameter("optiona")!=null)
					VALUES("`optiona`", "'"+params.getParameter("optiona")+"'");
				if(params.getParameter("optionb")!=null)
					VALUES("`optionb`", "'"+params.getParameter("optionb")+"'");
				if(params.getParameter("optionc")!=null)
					VALUES("`optionc`", "'"+params.getParameter("optionc")+"'");
				if(params.getParameter("optiond")!=null)
					VALUES("`optiond`", "'"+params.getParameter("optiond")+"'");
				if(params.getParameter("questionType")!=null)
					VALUES("`question_type`", "'"+params.getParameter("questionType")+"'");
				if(params.getParameter("subject")!=null)
					VALUES("`subject`", "'"+params.getParameter("subject")+"'");
				
			}
		};
		

		return sql.toString();
	}
	
	public String update(HttpServletRequest request) {
		MultipartHttpServletRequest params = ((MultipartHttpServletRequest) request);  
        List<MultipartFile> files = ((MultipartHttpServletRequest) request).getFiles("imgFile");
        if(!files.isEmpty()) {
        	MultipartFile imageFile = files.get(0);
    		File imgPath = new File("./src/main/resources/static"+params.getParameter("img"));
    		System.out.println(imgPath.getAbsolutePath());
    		try {
    			imageFile.transferTo(imgPath.getAbsoluteFile());
    		} catch (IllegalStateException | IOException e) {
    			e.printStackTrace();
    		}
        }

		SQL sql = new SQL(){
			{
				UPDATE("questions");
				if(params.getParameter("question") != null)
					SET("`question`= '"+params.getParameter("question")+"'");
				if(params.getParameter("licenseType") != null)
					SET("`license_type`= '"+params.getParameter("licenseType")+"'");
				if(params.getParameter("answer")!=null)
					SET("`answer`='"+params.getParameter("answer")+"'");
				if(params.getParameter("explain")!=null)
					SET("`explain`= '"+params.getParameter("explain")+"'");
//				if(params.getParameter("img")!=null)
//					VALUES("`img`", "'"+params.getParameter("img")+"'");
				if(params.getParameter("optiona")!=null)
					SET("`optiona`= '"+params.getParameter("optiona")+"'");
				if(params.getParameter("optionb")!=null)
					SET("`optionb`= '"+params.getParameter("optionb")+"'");
				if(params.getParameter("optionc")!=null)
					SET("`optionc`= '"+params.getParameter("optionc")+"'");
				if(params.getParameter("optiond")!=null)
					SET("`optiond`= '"+params.getParameter("optiond")+"'");
				if(params.getParameter("questionType")!=null)
					SET("`question_type`= '"+params.getParameter("questionType")+"'");
				if(params.getParameter("subject")!=null)
					SET("`subject`= '"+params.getParameter("subject")+"'");
				WHERE("`question_id` = " + params.getParameter("questionId"));
			}
		};
		
//		System.out.println(GenerateImage(map.get("img"), f));
//		System.out.println(sql.toString());
		return sql.toString();
	}
	
	public String img(MultipartFile file) {
		if (!file.isEmpty()) {
            try {
                // 文件存放服务端的位置
                String rootPath = "./src/main/resources/static/img/";
//                File dir = new File(rootPath + File.separator + "tmpFiles");
//                if (!dir.exists())
//                    dir.mkdirs();
                // 写文件到服务器
                File serverFile = new File(rootPath + file.getOriginalFilename());
                file.transferTo(serverFile);
                return "You successfully uploaded file=" +  file.getOriginalFilename();
            } catch (Exception e) {
                return "You failed to upload " +  file.getOriginalFilename() + " => " + e.getMessage();
            }
        } else {
            return "You failed to upload " +  file.getOriginalFilename() + " because the file was empty.";
        }
	}
	
	 public static boolean GenerateImage(String imgStr,File dir)
	    {//对字节数组字符串进行Base64解码并生成图片
	        if (imgStr == null) //图像数据为空
	            return false;
	        Decoder decoder = Base64.getDecoder();
	        try {
	            //Base64解码
	            byte[] b = decoder.decode(imgStr);
	            for(int i=0;i<b.length;++i)
	            {
	                if(b[i]<0)
	                {//调整异常数据
	                    b[i]+=256;
	                }
	            }
	            //生成jpeg图片
	            OutputStream out = new FileOutputStream(dir);    
	            out.write(b);
	            out.flush();
	            out.close();
	            return true;
	        } catch (Exception e) {
	            return false;
	        }
	    }
}
