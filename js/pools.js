//设置cookie
function setCookie(_name, _val, date){
	var d = new Date();
	d.setDate(d.getDate()+date);
	document.cookie = _name+"="+_val+";path=/;date="+d.toGMTString();
}

//获取cookie
function getCookie(_name){
	var cookie = document.cookie;
	var str = cookie.split("; ");
	for(var i = 0;i<str.length;i++){
		var newStr = str[i].split("=");
		if(newStr[0] == _name){
			return newStr[1]
		}
	}
}

//删除cookie
function removeCookie(_name, _val){
	setCookie(_name, _val, -1)
}

//随机数
function randomNum(n, m){
	return parseInt(n+Math.random()*(m-n+1))
}

//冒泡排序
function mpSort(arr){
	var temp;
	for(var i = 0;i<arr.length-1;i++){
		for(var j = 0;j<arr.length-1-i;j++){
			if(arr[j]>arr[j+1]){
				temp = arr[j+1];
				arr[j+1] = arr[j];
				arr[j] = temp;
			}
		}
	}
	return arr
}

//选择排序
function xzSort(arr){
	var temp;
	for(var i = 0;i<arr.length-1;i++){
		for(var j = i+1;j<arr.length;j++){
			if(arr[i]>arr[j]){
				temp = arr[j];
				arr[j] = arr[i];
				arr[i] = temp;
			}
		}
	}
	return arr
}

//获取数组最大的值
function maxNum(arr){
	var max = arr[0];
	for(var i = 0;i<arr.length;i++){
		if(arr[i]>max){
			max = arr[i]
		}
	}
	return max;
}

//获取数组最小的值
function minNum(arr){
	var min = arr[0];
	for(var i = 0;i<arr.length;i++){
		if(arr[i]<min){
			min = arr[i]
		}
	}
	return min;
}

//随机颜色
function randomColor(){
	var R = parseInt(Math.random()*256);
	var G = parseInt(Math.random()*256);
	var B = parseInt(Math.random()*256);
	var color = toStringNum(R, G, B);
	return color;
}
function toStringNum(r, g, b){
	r = r.toString(16).length<2?"0"+r.toString(16):r.toString(16);
	g = g.toString(16).length<2?"0"+g.toString(16):g.toString(16);
	b = b.toString(16).length<2?"0"+b.toString(16):b.toString(16);
	return "#"+r+g+b;
}

//获取最小值的下标
function minIndex(arr){
	var min = arr[0];
	var index = 0;
	for(var i = 0;i<arr.length;i++){
		if(arr[i]<min){
			index = i
		}
	}
	return index;
}

//判断数字是否存在
function has(arr, n){
	for(var i = 0;i<arr.length;i++){
		if(arr[i] == n){
			return true;
		}
	}
	return bStop;
}

//数组去重
function norepeart1(arr){
	var newArr = [];
	for(var i = 0;i<arr.length;i++){
		if(!has(newArr, arr[i])){
			newArr.push(arr[i])
		}
	}
	return newArr;
}
function onrepear2(arr){
	var newArr = [];
	for(var i = 0;i<arr.length;i++){
		if(newArr.indexOf(arr[i]) == -1){
			newArr.push(arr[i])
		}
	}
	return newArr;
}

//随机四位数验证码
function randomCode(){
	var str = "";
	for(var i = 0;i<6;i++){
		var num = parseInt(48+Math.random()*(122-48-1));
		if(num>=58&&num<=64||num>=91&&num<=96){
			num = parseInt(48+Math.random()*(122-48-1));
		}
		str+=String.fromCharCode(num)
	}
	return str;
}

//补零操作
function addZero(n){
	if(n>0&&n<10){
		n = "0"+n;
	}
	return n;
}

//事件对象转换成字符串
function newDate(d, sign){
	if(!sign){
		sign = "/";
	}else{
		sign;
	}
	return d.getFullYear()+sign+addZero(d.getMonth())+sign+addZero(d.getDate())+""+addZero(d.getHours())+":"+addZero(d.getMinutes())+":"+addZero(d.getSeconds())
}

//获取非行间样式
function getStyle(obj, attr){
	if(obj.currentStyle){
		return obj.currentStyle[attr]
	}else{
		return getComputedStyle(obj, false)[attr]
	}
}

//完美运动框架
function move(obj, json, fn){
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		var bStop = true;
		for(var attr in json){
			var iCur = 0;
			if(attr == "opacity"){
				iCur = parseInt(parseFloat(getStyle(obj, attr))*100);
			}else{
				iCur = parseInt(getStyle(obj, attr));
			}
			var speed = (json[attr]-iCur)/7;
			speed = speed>0?Math.ceil(speed):Math.floor(speed);
			//判断是否全部到达
			if(iCur!=json[attr]){
				bStop = false;
			}
			if(attr == "opacity"){
				obj.style.opacity = (speed+iCur)/100;
				obj.style.filter = "alpha(opacity: '+(iCur+speed)+')";
			}else{
				obj.style[attr] = speed+iCur+"px";
			}
		}
		if(bStop){
			clearInterval(obj.timer);
			fn&&fn();
		}
	}, 27)
}

//获取或设置自定义属性
function attr(){
	if(arguments == 2){
		return arguments[0].getAttribute(arguments[1]);
	}else if(arguments == 3){
		return arguments[0].setAttribute(arguments[1], arguments[2])
	}else{
		return;
	}
}

//隐藏
function hide(obj){
	obj.style.display = "none";
}

//显示
function show(obj){
	obj.style.display = "block";
}

//获取页面的偏移量
function offset(ele){
	var obj = {};
	var l = ele.offsetLeft;
	var t = ele.offsetTop;
	while(ele.offsetParent){
		ele = ele.offsetParent;
		obj.l += ele.offsetLeft;
		obj.t += ele.offsetTop;
	}
	return obj;
}

//事件监听
function attach(obj, type, fn){
	if(obj.addEventListener){
		return obj.addEventListener(type, fn);
	}else{
		return obj.attachEvent("on"+type, fn);
	}
}

//ajax
function ajax(method, json, url, success, error){
	var xml = new XMLHttpRequest()||new ActiveXObject("Microsoft, XMLHTTP");
	var str = "";
	for(var key in json){
		str += "&"+key+"="+json[key]
	}
	str = str.substr(1);
	if(method == "get"){
		url = url+"?"+str;
		xml.open("get", url, true);
		xml.send()
	}else{
		xml.open("post", url, true);
		xml.setRequestHeader("content-type", "application/x-www-from-urlencoded");
		xml.send(str)
	}
	xml.onreadystatechange = function(){
		if(xml.readyState == 4&&xml.status == 200){
			var data = xml.responseText;
			if(typeof data != "object"){
				data = JSON.parse(data);
				success&&success(data)
			}else{
				error&&error(xml.status);
			}
		}
	}
}
