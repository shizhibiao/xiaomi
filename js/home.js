//头部鼠标划入事件
function headOver(ele){
	for(var i = 0;i<ele.length;i++){
		ele[i].onmouseover = function(){
			for(var j =0;j<ele.length;j++){
				ele[j].style.color = "#b0b0b0";
			}
			this.style.color = "#fff"
		}
		ele[i].onmouseout = function(){
			this.style.color = "#b0b0b0"
		}
	}
}
var hLefts = document.querySelectorAll(".h-left>a");
headOver(hLefts);

var hRightLefts = document.querySelectorAll(".h-right-left>a");
headOver(hRightLefts)

var hRightRight = document.querySelector(".h-right-right>a");
var hLogo = document.querySelector(".h-logo");

hRightRight.onmouseover = function(){
	this.style.color = "#ff6700";
	this.style.background = "#fff";
	hLogo.style.display = "block"
}
hRightRight.onmouseout = function(){
	this.style.color = "#b0b0b0";
	this.style.background = "#424242";
	hLogo.style.display = "none"
}
//nav-导航栏
var nItem = document.querySelectorAll(".n-item");
for(var i = 0;i<nItem.length;i++){
	nItem[i].onmouseover = function(){
		this.firstElementChild.style.color = "#ff6700";
		this.lastElementChild.style.display = "block";
	}
	nItem[i].onmouseout = function(){
		this.firstElementChild.style.color = "#333";
		this.lastElementChild.style.display = "none";
	}
}
//nav-侧边栏
var searchForm = document.querySelector(".search-form");
var searchText = document.getElementById("search-text");
var searchBtn = document.getElementById("search-btn");
var fTitle = document.querySelector(".f-title");
var list = document.querySelector(".nf-list");
var nfList= document.querySelector(".nf-list");
var nfListUl= document.querySelectorAll(".nf-list>ul>li");

searchForm.addEventListener("click", function(e){
	var e = e||event;
	var target = e.target||e.srcElement;
	e.stopPropagation?e.stopPropagation():e.cancelBubble = true;
	e.preventDefault?e.preventDefault():e.returnValut = false;
	this.firstElementChild.className = "active";
	this.firstElementChild.nextElementSibling.className = "active";
	this.lastElementChild.previousElementSibling.style.display = "none";
	list.style.display = "block";
	if(target.tagName == "LI"&&target.className == "list-li"){
		alert(1)
	}
})

searchText.onblur = function(){
	searchText.className = "none";
	searchBtn.className = "none";
	fTitle.style.display = "block";
	list.style.display = "none";
	searchText.value = "";
}
searchForm.addEventListener("mouseover", function(e){
	var e = e||event;
	e.stopPropagation?e.stopPropagation():e.cancelBubble = true;
	var target = e.target||e.srcElement;
	this.firstElementChild.style.borderColor = "#b0b0b0";
	this.firstElementChild.nextElementSibling.style.borderColor = "#b0b0b0";
	if(target.className == "search-btn"&&target.tagName == "BUTTON"){
		target.style.background = "#ff6700";
		target.style.color = "#fff";
		target.style.borderColor = "#ff6700"
		target.style.cursor = "pointer"
	}
	if(target.className == "ft-a"&&target.tagName == "A"){
		target.style.background = "#f40";
		target.style.color = "#fff";
	}
	if(target.tagName == "A"&&target.className == "list-a"){
		target.style.background = "#fafafa"
	}

	
})
searchForm.addEventListener("mouseout", function(e){
	var e = e||event;
	e.stopPropagation?e.stopPropagation():e.cancelBubble = true;
	var target = e.target||e.srcElement;
	this.firstElementChild.style.borderColor = "#e0e0e0";
	this.firstElementChild.nextElementSibling.style.borderColor = "#e0e0e0";
	if(target.className == "ft-a"&&target.tagName == "A"){
		target.style.background = "#eee";
		target.style.color = "#757575";
	}
	if(target.className == "search-btn"&&target.tagName == "BUTTON"){
		target.style.background = "#fff";
		target.style.color = "#616161";
		target.style.borderColor = "#e0e0e0"
	}
	if(target.tagName == "A"&&target.className == "list-a"){
		target.style.background = "#fff";
	}
})


//主体内容、banner图
function Init(){
	this.bBanner = document.querySelector(".b-banner");
	this.bBannerAs = document.querySelectorAll(".b-banner>a");
	this.aItem = document.querySelectorAll(".page-item>a");
	this.aDir = document.querySelectorAll(".dir>a");
	this.len = this.bBannerAs.length;
	this.iNow = 0;
	this.Next = 0;
	this.timer = null;
	for(var i = 0;i<this.aItem.length;i++){
		var _this = this;
		this.aItem[i].index = i;
		this.aItem[i].onmouseover = function(){
			_this.fors(this)
		}
		
	}
}
Init.prototype.fors = function(that){
	for(var j = 0;j<this.aItem.length;j++){
		this.aItem[j].className = "";
	}
	that.className = "active";
	move(this.bBannerAs[this.iNow], {"opacity": 0})
	move(this.bBannerAs[that.index], {"opacity": 100})
	this.iNow = this.Next;
	this.Next = that.index;
}
Init.prototype.centre = function(){
	this.over();
	this.out();
	this.autoPlay();
	this.click()
}
Init.prototype.click = function(){
	var _this = this;
	this.aDir[0].onclick = function(){
		if(_this.Next == 0){
			_this.Next = _this.len-1
		}else{
			_this.Next--
		}
		_this.toImg();
	}
	this.aDir[1].onclick = function(){
		if(_this.Next == _this.len-1){
			_this.Next = 0
		}else{
			_this.Next++
		}
		_this.toImg()
	}
}
Init.prototype.over = function(){
	var _this = this;
	this.bBanner = onmouseover = function(){
		clearInterval(_this.timer)
	}
	
}
Init.prototype.out = function(){
	var _this = this;
	this.bBanner = onmouseout = function(){
		_this.autoPlay()
	}
	
}
Init.prototype.autoPlay = function(){
	var _this = this;
	this.timer = setInterval(function(){
		if(_this.Next == _this.len-1){
			_this.Next = 0
		}else{
			_this.Next++
		}
		
		_this.toImg()
	}, 3000)
}
Init.prototype.toImg = function(){
	move(this.bBannerAs[this.iNow], {"opacity": 0})
	move(this.bBannerAs[this.Next], {"opacity": 100})
	this.iNow = this.Next;
	for(var i = 0;i<this.aItem.length;i++){
		this.aItem[i].className = "";
	}
	this.aItem[this.Next].className = "active";
}

new Init().centre()



//左边导航

ajax("get", {}, "http://localhost/xiaomi/json/b-nav.json", function(data){
	//手机电话卡
	//ul1
	var str1_01 = "";
	var data1_01 = data.nav_01[0].ul_01;
	var children1 = document.querySelector(".children1");
	var list1_01 = children1.querySelector(".children-list-col-1");
	for(var i = 0;i<data1_01.length;i++){
		str1_01+=`<li>
			<a href="##">
				<img src=${data1_01[i].img} />
				<span>${data1_01[i].title}</span>
			</a>
		</li>`
	}
	list1_01.innerHTML = str1_01;
	//ul2
	var str1_02 = "";
	var data1_02 = data.nav_01[0].ul_02;
	var list1_02 = children1.querySelector(".children-list-col-2");
	for(var i = 0;i<data1_02.length;i++){
		str1_02+=`<li>
			<a href="##">
				<img src=${data1_02[i].img} />
				<span>${data1_02[i].title}</span>
			</a>
		</li>`
	}
	list1_02.innerHTML = str1_02;
	// ul3
	var str1_03 = "";
	var data1_03 = data.nav_01[0].ul_03;
	var list1_03 = children1.querySelector(".children-list-col-3");
	for(var i = 0;i<data1_03.length;i++){
		str1_03+=`<li>
			<a href="##">
				<img src=${data1_03[i].img} />
				<span>${data1_03[i].title}</span>
			</a>
		</li>`
	}
	list1_03.innerHTML = str1_03;


	//电视盒子
	//ul1
	var str2_01 = "";
	var data2_01 = data.nav_02[0].ul_01;
	var children2 = document.querySelector(".children2");
	var list2_01 = children2.querySelector(".children-list-col-1");
	for(var i = 0;i<data2_01.length;i++){
		str2_01+=`<li>
			<a href="##">
				<img src=${data2_01[i].img} />
				<span>${data2_01[i].title}</span>
			</a>
		</li>`
	}
	list2_01.innerHTML = str2_01;
	//ul2
	var str2_02 = "";
	var data2_02 = data.nav_02[0].ul_02;
	var children2 = document.querySelector(".children2");
	var list2_02 = children2.querySelector(".children-list-col-2");
	for(var i = 0;i<data2_02.length;i++){
		str2_02+=`<li>
			<a href="##">
				<img src=${data2_02[i].img} />
				<span>${data2_02[i].title}</span>
			</a>
		</li>`
	}
	list2_02.innerHTML = str2_02;
	//ul3
	var str2_03 = "";
	var data2_03 = data.nav_02[0].ul_03;
	var children2 = document.querySelector(".children2");
	var list2_03 = children2.querySelector(".children-list-col-3");
	for(var i = 0;i<data2_02.length;i++){
		str2_03+=`<li>
			<a href="##">
				<img src=${data2_03[i].img} />
				<span>${data2_03[i].title}</span>
			</a>
		</li>`
	}
	list2_03.innerHTML = str2_03;
	//ul4
	var str2_04 = "";
	var data2_04 = data.nav_02[0].ul_04;
	var children2 = document.querySelector(".children2");
	var list2_04 = children2.querySelector(".children-list-col-4");
	for(var i = 0;i<data2_04.length;i++){
		str2_04+=`<li>
			<a href="##">
				<img src=${data2_04[i].img} />
				<span>${data2_04[i].title}</span>
			</a>
		</li>`
	}
	list2_04.innerHTML = str2_04;


	//笔记本
	//ul1
	var str3_01 = "";
	var data3_01 = data.nav_03[0].ul_01;
	var children3 = document.querySelector(".children3");
	var list3_01 = children3.querySelector(".children-list-col-1");
	for(var i = 0;i<data3_01.length;i++){
		str3_01+=`<li>
			<a href="##">
				<img src=${data3_01[i].img} />
				<span>${data3_01[i].title}</span>
			</a>
		</li>`
	}
	list3_01.innerHTML = str3_01;
	//ul2
	var str3_02 = "";
	var data3_02 = data.nav_03[0].ul_02;
	var children3 = document.querySelector(".children3");
	var list3_02 = children3.querySelector(".children-list-col-2");
	for(var i = 0;i<data3_02.length;i++){
		str3_02+=`<li>
			<a href="##">
				<img src=${data3_02[i].img} />
				<span>${data3_02[i].title}</span>
			</a>
		</li>`
	}
	list3_02.innerHTML = str3_02;
	//ul3
	var str3_03 = "";
	var data3_03 = data.nav_03[0].ul_03;
	var children3 = document.querySelector(".children3");
	var list3_03 = children3.querySelector(".children-list-col-3");
	for(var i = 0;i<data3_03.length;i++){
		str3_03+=`<li>
			<a href="##">
				<img src=${data3_03[i].img} />
				<span>${data3_03[i].title}</span>
			</a>
		</li>`
	}
	list3_03.innerHTML = str3_03;

	//智能家电
	//ul1
	var str4_01 = "";
	var data4_01 = data.nav_04[0].ul_01;
	var children4 = document.querySelector(".children4");
	var list4_01 = children4.querySelector(".children-list-col-1");
	for(var i = 0;i<data4_01.length;i++){
		str4_01+=`<li>
			<a href="##">
				<img src=${data4_01[i].img} />
				<span>${data4_01[i].title}</span>
			</a>
		</li>`
	}
	list4_01.innerHTML = str2_01;
	//ul2
	var str4_02 = "";
	var data4_02 = data.nav_04[0].ul_02;
	var children4 = document.querySelector(".children4");
	var list4_02 = children4.querySelector(".children-list-col-2");
	for(var i = 0;i<data4_02.length;i++){
		str4_02+=`<li>
			<a href="##">
				<img src=${data4_02[i].img} />
				<span>${data4_02[i].title}</span>
			</a>
		</li>`
	}
	list4_02.innerHTML = str4_02;
	//ul3
	var str4_03 = "";
	var data4_03 = data.nav_04[0].ul_03;
	var children4 = document.querySelector(".children4");
	var list4_03 = children4.querySelector(".children-list-col-3");
	for(var i = 0;i<data4_02.length;i++){
		str4_03+=`<li>
			<a href="##">
				<img src=${data4_03[i].img} />
				<span>${data4_03[i].title}</span>
			</a>
		</li>`
	}
	list4_03.innerHTML = str4_03;
	//ul4
	var str4_04 = "";
	var data4_04 = data.nav_04[0].ul_04;
	var children4 = document.querySelector(".children4");
	var list4_04 = children4.querySelector(".children-list-col-4");
	for(var i = 0;i<data4_04.length;i++){
		str4_04+=`<li>
			<a href="##">
				<img src=${data4_04[i].img} />
				<span>${data4_04[i].title}</span>
			</a>
		</li>`
	}
	list4_04.innerHTML = str4_04;


	//健康家居
	//ul1
	var str5_01 = "";
	var data5_01 = data.nav_05[0].ul_01;
	var children5 = document.querySelector(".children5");
	var list5_01 = children5.querySelector(".children-list-col-1");
	for(var i = 0;i<data5_01.length;i++){
		str5_01+=`<li>
			<a href="##">
				<img src=${data5_01[i].img} />
				<span>${data5_01[i].title}</span>
			</a>
		</li>`
	}
	list5_01.innerHTML = str5_01;
	//ul2
	var str5_02 = "";
	var data5_02 = data.nav_04[0].ul_02;
	var children5 = document.querySelector(".children5");
	var list5_02 = children5.querySelector(".children-list-col-2");
	for(var i = 0;i<data5_02.length;i++){
		str5_02+=`<li>
			<a href="##">
				<img src=${data5_02[i].img} />
				<span>${data5_02[i].title}</span>
			</a>
		</li>`
	}
	list5_02.innerHTML = str5_02;
	//ul3
	var str5_03 = "";
	var data5_03 = data.nav_05[0].ul_03;
	var children5 = document.querySelector(".children5");
	var list5_03 = children5.querySelector(".children-list-col-3");
	for(var i = 0;i<data5_02.length;i++){
		str5_03+=`<li>
			<a href="##">
				<img src=${data5_03[i].img} />
				<span>${data5_03[i].title}</span>
			</a>
		</li>`
	}
	list5_03.innerHTML = str5_03;
	//ul4
	var str5_04 = "";
	var data5_04 = data.nav_05[0].ul_04;
	var children5 = document.querySelector(".children5");
	var list5_04 = children5.querySelector(".children-list-col-4");
	for(var i = 0;i<data5_04.length;i++){
		str5_04+=`<li>
			<a href="##">
				<img src=${data5_04[i].img} />
				<span>${data5_04[i].title}</span>
			</a>
		</li>`
	}
	list5_04.innerHTML = str5_04;
	

	//出行,儿童
	//ul1
	var str6_01 = "";
	var data6_01 = data.nav_06[0].ul_01;
	var children6 = document.querySelector(".children6");
	var list6_01 = children6.querySelector(".children-list-col-1");
	for(var i = 0;i<data6_01.length;i++){
		str6_01+=`<li>
			<a href="##">
				<img src=${data6_01[i].img} />
				<span>${data6_01[i].title}</span>
			</a>
		</li>`
	}
	list6_01.innerHTML = str6_01;
	//ul2
	var str6_02 = "";
	var data6_02 = data.nav_06[0].ul_02;
	var children6 = document.querySelector(".children6");
	var list6_02 = children6.querySelector(".children-list-col-2");
	for(var i = 0;i<data6_02.length;i++){
		str6_02+=`<li>
			<a href="##">
				<img src=${data6_02[i].img} />
				<span>${data6_02[i].title}</span>
			</a>
		</li>`
	}
	list6_02.innerHTML = str6_02;
	//ul3
	var str6_03 = "";
	var data6_03 = data.nav_06[0].ul_03;
	var children6 = document.querySelector(".children6");
	var list6_03 = children6.querySelector(".children-list-col-3");
	for(var i = 0;i<data6_02.length;i++){
		str6_03+=`<li>
			<a href="##">
				<img src=${data6_03[i].img} />
				<span>${data6_03[i].title}</span>
			</a>
		</li>`
	}
	list6_03.innerHTML = str6_03;
	//ul4
	var str6_04 = "";
	var data6_04 = data.nav_06[0].ul_04;
	var children6 = document.querySelector(".children6");
	var list6_04 = children6.querySelector(".children-list-col-4");
	for(var i = 0;i<data6_04.length;i++){
		str6_04+=`<li>
			<a href="##">
				<img src=${data6_04[i].img} />
				<span>${data6_04[i].title}</span>
			</a>
		</li>`
	}
	list6_04.innerHTML = str6_04;

	//路由器，手机配件
	//ul1
	var str7_01 = "";
	var data7_01 = data.nav_07[0].ul_01;
	var children7 = document.querySelector(".children7");
	var list7_01 = children7.querySelector(".children-list-col-1");
	for(var i = 0;i<data7_01.length;i++){
		str7_01+=`<li>
			<a href="##">
				<img src=${data7_01[i].img} />
				<span>${data7_01[i].title}</span>
			</a>
		</li>`
	}
	list7_01.innerHTML = str7_01;
	//ul2
	var str7_02 = "";
	var data7_02 = data.nav_07[0].ul_02;
	var children7 = document.querySelector(".children7");
	var list7_02 = children7.querySelector(".children-list-col-2");
	for(var i = 0;i<data7_02.length;i++){
		str7_02+=`<li>
			<a href="##">
				<img src=${data7_02[i].img} />
				<span>${data7_02[i].title}</span>
			</a>
		</li>`
	}
	list7_02.innerHTML = str7_02;
	//ul3
	var str7_03 = "";
	var data7_03 = data.nav_07[0].ul_03;
	var children7 = document.querySelector(".children7");
	var list7_03 = children7.querySelector(".children-list-col-3");
	for(var i = 0;i<data7_03.length;i++){
		str7_03+=`<li>
			<a href="##">
				<img src=${data7_03[i].img} />
				<span>${data7_03[i].title}</span>
			</a>
		</li>`
	}
	list7_03.innerHTML = str7_03;

	//移动电源，插线板
	//ul1
	var str8_01 = "";
	var data8_01 = data.nav_08[0].ul_01;
	var children8 = document.querySelector(".children8");
	var list8_01 = children8.querySelector(".children-list-col-1");
	for(var i = 0;i<data8_01.length;i++){
		str8_01+=`<li>
			<a href="##">
				<img src=${data8_01[i].img} />
				<span>${data8_01[i].title}</span>
			</a>
		</li>`
	}
	list8_01.innerHTML = str8_01;
	//ul2
	var str8_02 = "";
	var data8_02 = data.nav_08[0].ul_02;
	var children8 = document.querySelector(".children8");
	var list8_02 = children8.querySelector(".children-list-col-2");
	for(var i = 0;i<data8_02.length;i++){
		str8_02+=`<li>
			<a href="##">
				<img src=${data8_02[i].img} />
				<span>${data8_02[i].title}</span>
			</a>
		</li>`
	}
	list8_02.innerHTML = str8_02;
	//ul3
	var str8_03 = "";
	var data8_03 = data.nav_08[0].ul_03;
	var children8 = document.querySelector(".children8");
	var list8_03 = children8.querySelector(".children-list-col-3");
	for(var i = 0;i<data8_03.length;i++){
		str8_03+=`<li>
			<a href="##">
				<img src=${data8_03[i].img} />
				<span>${data8_03[i].title}</span>
			</a>
		</li>`
	}
	list8_03.innerHTML = str8_03;

	//耳机，音响
	//ul1
	var str9_01 = "";
	var data9_01 = data.nav_09[0].ul_01;
	var children9 = document.querySelector(".children9");
	var list9_01 = children9.querySelector(".children-list-col-1");
	for(var i = 0;i<data9_01.length;i++){
		str9_01+=`<li>
			<a href="##">
				<img src=${data9_01[i].img} />
				<span>${data9_01[i].title}</span>
			</a>
		</li>`
	}
	list9_01.innerHTML = str9_01;
	//ul2
	var str9_02 = "";
	var data9_02 = data.nav_09[0].ul_02;
	var children9 = document.querySelector(".children9");
	var list9_02 = children9.querySelector(".children-list-col-2");
	for(var i = 0;i<data9_02.length;i++){
		str9_02+=`<li>
			<a href="##">
				<img src=${data9_02[i].img} />
				<span>${data9_02[i].title}</span>
			</a>
		</li>`
	}
	list9_02.innerHTML = str9_02;
	//ul3
	var str9_03 = "";
	var data9_03 = data.nav_09[0].ul_03;
	var children9 = document.querySelector(".children9");
	var list9_03 = children9.querySelector(".children-list-col-3");
	for(var i = 0;i<data9_02.length;i++){
		str9_03+=`<li>
			<a href="##">
				<img src=${data9_03[i].img} />
				<span>${data9_03[i].title}</span>
			</a>
		</li>`
	}
	list9_03.innerHTML = str9_03;
	//ul4
	var str9_04 = "";
	var data9_04 = data.nav_09[0].ul_04;
	var children9 = document.querySelector(".children9");
	var list9_04 = children9.querySelector(".children-list-col-4");
	for(var i = 0;i<data9_04.length;i++){
		str9_04+=`<li>
			<a href="##">
				<img src=${data9_04[i].img} />
				<span>${data9_04[i].title}</span>
			</a>
		</li>`
	}
	list9_04.innerHTML = str9_04;


	//生活，米兔
	//ul1
	var str10_01 = "";
	var data10_01 = data.nav_010[0].ul_01;
	var children10 = document.querySelector(".children10");
	var list10_01 = children10.querySelector(".children-list-col-1");
	for(var i = 0;i<data10_01.length;i++){
		str10_01+=`<li>
			<a href="##">
				<img src=${data10_01[i].img} />
				<span>${data10_01[i].title}</span>
			</a>
		</li>`
	}
	list10_01.innerHTML = str10_01;
	//ul2
	var str10_02 = "";
	var data10_02 = data.nav_010[0].ul_02;
	var children10 = document.querySelector(".children10");
	var list10_02 = children10.querySelector(".children-list-col-2");
	for(var i = 0;i<data10_02.length;i++){
		str10_02+=`<li>
			<a href="##">
				<img src=${data10_02[i].img} />
				<span>${data10_02[i].title}</span>
			</a>
		</li>`
	}
	list10_02.innerHTML = str6_02;
	//ul3
	var str10_03 = "";
	var data10_03 = data.nav_010[0].ul_03;
	var children10 = document.querySelector(".children10");
	var list10_03 = children10.querySelector(".children-list-col-3");
	for(var i = 0;i<data10_02.length;i++){
		str10_03+=`<li>
			<a href="##">
				<img src=${data10_03[i].img} />
				<span>${data10_03[i].title}</span>
			</a>
		</li>`
	}
	list10_03.innerHTML = str10_03;
	//ul4
	var str10_04 = "";
	var data10_04 = data.nav_010[0].ul_04;
	var children10 = document.querySelector(".children10");
	var list10_04 = children10.querySelector(".children-list-col-4");
	for(var i = 0;i<data10_04.length;i++){
		str10_04+=`<li>
			<a href="##">
				<img src=${data10_04[i].img} />
				<span>${data10_04[i].title}</span>
			</a>
		</li>`
	}
	list10_04.innerHTML = str10_04;
})


//banner左侧的鼠标移出事件
var bNavList = document.querySelectorAll(".b-nav>ul>li");
for(var i = 0;i<bNavList.length;i++){
	bNavList[i].onmouseover = function(){
		for(var j = 0;j<bNavList.length;j++){
			bNavList[j].lastElementChild.style.display = "none";
		}
		this.lastElementChild.style.display = "block"
	}
	bNavList[i].onmouseout = function(){
		this.lastElementChild.style.display = "none";
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

var aMore = document.querySelectorAll(".more>a");
var bdRightUl = document.querySelector(".box-bd-right>ul");
aMore[1].onclick = function(e){
	this.className = "active";
	aMore[0].className = "";
	bdRightUl.className = "actives";
}
aMore[0].onclick = function(e){
	this.className = "active";
	aMore[1].className = "";
	bdRightUl.className = "";
}

//倒计时
var boxBdLeft = document.querySelector(".box-bd-left");
//获取给定的时间
var data = boxBdLeft.firstElementChild.firstElementChild.innerHTML.split(":");
// //倒计时的时分秒
// var hours = boxBdLeft.lastElementChild.firstElementChild.innerHTML;
// var minutes = boxBdLeft.lastElementChild.lastElementChild.previousElementSibling.previousElementSibling.innerHTML;
// var seconds = boxBdLeft.lastElementChild.lastElementChild.innerHTML;
//获取当前的时分秒


setInterval(function(){
	var d = new Date();
	var h = d.getHours();
	var m = d.getMinutes();
	var s = d.getSeconds();
	var num = (data[0]*60*60+data[1]*60)-(h*60*60+m*60+s);
	num = num>0?num:0;
	boxBdLeft.lastElementChild.firstElementChild.innerHTML = zero(parseInt(num/3600));
	boxBdLeft.lastElementChild.lastElementChild.previousElementSibling.previousElementSibling.innerHTML = zero(parseInt(num%3600/60));
	boxBdLeft.lastElementChild.lastElementChild.innerHTML = zero(parseInt(num%3600%60));
}, 1000)
	
function zero(n){
	if(n<10){
		n = "0"+n
	}
	return n
}
