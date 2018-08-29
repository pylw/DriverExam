package com.pylw.driverexam.exam.mapper;

import org.apache.ibatis.jdbc.SQL;

import com.pylw.driverexam.exam.model.Done;
import com.pylw.driverexam.exam.model.ExamJSONResult;

public class ExamDynamicSqlProvider {

	public String updateCountQ(Integer questionId, String tf) {
		tf = tf.toUpperCase();
		SQL sql = new SQL().INSERT_INTO("count_question");
		if(tf.equals("T")) {
			sql.VALUES("question_id", questionId.toString())
			.VALUES("total_error", "0")
			.VALUES("total_done", "1");
			return sql.toString()+"ON DUPLICATE KEY UPDATE total_done=total_done+1";
		}else if (tf.equals("F")) {
			sql.VALUES("question_id", questionId.toString())
			.VALUES("total_error", "1")
			.VALUES("total_done", "1");
			return sql.toString()
					+ "ON DUPLICATE KEY UPDATE total_error=total_error+1,"
					+ "total_done=total_done+1";
		}else return "Error";
		
	}
	
	public String updateDone(Done done) {
		
		SQL sql = new SQL().INSERT_INTO("donelists")
				.VALUES("user_id", done.getUserId().toString())
				.VALUES("question_id", done.getQuestionId().toString());
		if(done.getStatusCn() == null) {
			sql.VALUES("status_tf", "'" + done.getStatusTf().toUpperCase() + "'");
			if (!done.getStatusTf().equals("T") || !done.getStatusTf().equals("F")) {
				return "Error";
			}
			return sql.toString()
					+ "ON DUPLICATE KEY UPDATE status_tf=#{statusTf}";
		}else if(done.getStatusTf() == null) {
			sql.VALUES("status_cn", "'" + done.getStatusCn().toUpperCase() + "'");
			if (!done.getStatusCn().equals("T") || !done.getStatusCn().equals("F")) {
				return "Error";
			}
			return sql.toString()
					+ "ON DUPLICATE KEY UPDATE status_cn=#{statusCn}";
		}else {
			sql.VALUES("status_tf", "'" + done.getStatusTf().toUpperCase() + "'")
			.VALUES("status_cn", "'" + done.getStatusCn().toUpperCase() + "'");
			return sql.toString()
					+ "ON DUPLICATE KEY UPDATE status_tf=#{statusTf},status_cn=#{statusCn}";
		}
		
	}
}
