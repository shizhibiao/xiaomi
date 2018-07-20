new Promise(function(resolve, reject){
	ajax("get", {}, "http://localhost/xiaomi/json/recommends.json", function(data){
		var reData = data.recommend;


		var obj = {
			reData:reData
		}

		resolve(obj)
	})
})
.then(function(obj){
	//推荐
	var recomConUl = document.querySelector(".recom-con>ul");
	var reStr = "";
	for(var i = 0;i<obj.reData.length;i++){
		reStr += `<li class="brick-item brick-item-m">
					<a href="##"><img src=${obj.reData[i].img} /></a>
					<h3>${obj.reData[i].title}</h3>
					<p class="price">
						<span>${obj.reData[i].price}&nbsp;元</span>
					</p>
					<div class="amount">${obj.reData[i].amount}</div>
				</li>`
	}
	recomConUl.innerHTML = reStr;
})

var recommend_a = document.querySelectorAll(".recommend>.box-hd>.more>a");
recommend_a[1].onclick = function(){
	var con_ul = this.parentNode.parentNode.nextElementSibling.firstElementChild;
	var mar = parseInt(getStyle(con_ul, "marginLeft"));
	
	if(mar>-3720){
		con_ul.style.marginLeft = mar+(-1226-15)+"px";
	}
	
}
recommend_a[0].onclick = function(){
	var con_ul = this.parentNode.parentNode.nextElementSibling.firstElementChild;
	var mar = parseInt(getStyle(con_ul, "marginLeft"));
	console.log(mar)
	
	if(mar<0){
		con_ul.style.marginLeft = mar+1226+15+"px";
	}
	
}

// 右侧菜单鼠标划入效果
var menuList = document.querySelectorAll(".menu-list");	
for(var i = 0;i<menuList.length;i++){
	menuList[i].onmouseover = function(){
		this.firstElementChild.firstElementChild.style.display = "none";
		this.firstElementChild.lastElementChild.style.display = "block";
		this.lastElementChild.style.color = "#ff6700";
		this.lastElementChild.previousElementSibling.style.display = "block";
	}
	menuList[i].onmouseout = function(){
		this.firstElementChild.firstElementChild.style.display = "block";
		this.firstElementChild.lastElementChild.style.display = "none";
		this.lastElementChild.style.color = "#757575";
		this.lastElementChild.previousElementSibling.style.display = "none";
	}
}
//回到顶部
var menuA = document.querySelector(".menu-a");
window.onscroll = function(){
	var srcoll = document.documentElement.scrollTop||document.body.scrollTop;
	if(srcoll>1000){
		menuA.style.display = "block"
	}else{
		menuA.style.display = "none"
	}

}


// window.onresize = function(){
// 	var menuRight = document.querySelector(".menu-right");
// 	var h = document.documentElement.clientHeight;
// 	if(h<menuRight.offsetHeight+80){
// 		menuRight.style.top = "40px";
// 	}
// }