<?php
	//设置编码格式
	header("content-type:text/html;charset=utf8");
	//连接数据库
	$db_hostname = "localhost";
	$db_username = "root";
	$db_password = "root";
	$db_name = "xiaomi_enter";

	$conn = new mysqli($db_hostname, $db_username, $db_password, $db_name);

	//判断是否连接成功
	if($conn->connect_error){
		die("连接失败".$conn->connect_error)
	}

	//设置数据库编码格式
	$conn->query("set names utf8");
?>