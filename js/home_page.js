new Promise(function(resolve, reject){
	ajax("post", {}, "http://localhost/xiaomi/json/page.json", function(data){
		//手机--phone
		var pData = data.phone;

		//家电、热门
		var rData = data.appliance[0].remen;
		//家电、电视影音
		var dData = data.appliance[0].video;
		//家电、电脑
		var dnData = data.appliance[0].computer;
		//家电、家居
		var jData = data.appliance[0].house;


		//搭配、热门
		var m_rData = data.match[0].remen;
		//搭配、耳机音响
		var m_hData = data.match[0].headset;
		//搭配、电源
		var m_pData = data.match[0].power;
		//搭配、电池存储卡
		var m_bData = data.match[0].battery;


		//配件、热门
		var f_rData = data.fittings[0].remen;
		//配件、保护套
		var f_prData = data.fittings[0].protective;
		//配件、贴膜
		var f_paData = data.fittings[0].pasting;
		//配件、其他配件
		var f_bData = data.fittings[0].else;


		//周边、热门
		var r_rData = data.rim[0].remen;
		//周边、出行
		var r_tData = data.rim[0].trip;
		//周边、居家
		var r_lData = data.rim[0].living;
		//周边、周边生活
		var r_aData = data.rim[0].ambitus;
		//周边、箱包
		var r_bData = data.rim[0].box;


		var obj = {
			pData:pData,
			rData:rData,
			dData:dData,
			dnData:dnData,
			jData:jData,
			m_rData:m_rData,
			m_hData:m_hData,
			m_pData:m_pData,
			m_bData:m_bData,
			f_rData:f_rData,
			f_prData:f_prData,
			f_paData:f_paData,
			f_bData:f_bData,
			r_rData:r_rData,
			r_tData:r_tData,
			r_lData:r_lData,
			r_aData:r_aData,
			r_bData:r_bData
		}
		resolve(obj)
	})
})
.then(function(obj){
	//手机--phone
	var rowListUl = document.querySelector(".row-list>ul");
	var str = "";
	for(var i = 0;i<obj.pData.length;i++){
		str += `<li class="brick-item">
					<a href="##"><img src=${obj.pData[i].img} /></a>
					<h3>${obj.pData[i].title}</h3>
					<p class="desc">${obj.pData[i].desc}</p>
					<p class="price">
						<span>${obj.pData[i].price}&nbsp;元</span>&nbsp;
						<del>${obj.pData[i].del||""}</del>
					</p>
					<div class="flog">${obj.pData[i].flog||""}</div>
				</li>`
	}
	rowListUl.innerHTML = str;
	

	//家电、热门
	var brickListUl1 = document.querySelector(".jiadian>.brick-list-ul1");
	var rStr = "";
	for(var i = 0;i<obj.rData.length;i++){
		rStr += `<li class="brick-item brick-item-m">
					<a href="##"><img class="imgs" src=${obj.rData[i].img} /></a>
					<h3>${obj.rData[i].title}</h3>
					<div class="desc">${obj.rData[i].desc||""}</div>
					<p class="price">
						<span>${obj.rData[i].price}</span>&nbsp;元&nbsp;
						<del>${obj.rData[i].del||""}</del>
					</p>
					<div class="flog flag-new">${obj.rData[i].flog||""}</div>
					<div class="comment">
						<a href="##">
							<span class="review">${obj.rData[i].pingji}</span>
							<span class="author">${obj.rData[i].author}</span>
						</a>
					</div>
				</li>`
	}
	brickListUl1.innerHTML = rStr;

	var rLi9 = `<li class="brick-item brick-item-m li9">
					<div><a href="##"><i class="iconfont icon-youjiantou"></i></a></div>
					<a href="##">浏览更多<span>热门</span></a>
				</li>`
	brickListUl1.innerHTML+=(rLi9);

	//家电、电视影音
	var brickListUl2 = document.querySelector(".jiadian>.brick-list-ul2");
	var dStr = "";
	for(var i = 0;i<obj.dData.length;i++){
		dStr += `<li class="brick-item brick-item-m">
					<a href="##"><img class="imgs" src=${obj.dData[i].img} /></a>
					<h3>${obj.dData[i].title}</h3>
					<div class="desc">${obj.dData[i].desc||""}</div>
					<p class="price">
						<span>${obj.dData[i].price}</span>&nbsp;元&nbsp;
						<del>${obj.dData[i].del||""}</del>
					</p>
					<div class="flog flag-new">${obj.dData[i].flog||""}</div>
					<div class="comment">
						<a href="##">
							<span class="review">${obj.dData[i].pingji}</span>
							<span class="author">${obj.dData[i].author}</span>
						</a>
					</div>
				</li>`
	}
	brickListUl2.innerHTML = dStr;

	var dLi9 = `<li class="brick-item brick-item-m li9">
					<div><a href="##"><i class="iconfont icon-youjiantou"></i></a></div>
					<a href="##">浏览更多<span>电视影音</span></a>
				</li>`
	brickListUl2.innerHTML+=(dLi9);

	//家电、电脑
	var brickListUl3 = document.querySelector(".jiadian>.brick-list-ul3");
	var dnStr = "";
	for(var i = 0;i<obj.dnData.length;i++){
		dnStr += `<li class="brick-item brick-item-m">
					<a href="##"><img class="imgs" src=${obj.dnData[i].img} /></a>
					<h3>${obj.dnData[i].title}</h3>
					<div class="desc">${obj.dnData[i].desc||""}</div>
					<p class="price">
						<span>${obj.dnData[i].price}</span>&nbsp;元&nbsp;
						<del>${obj.dnData[i].del||""}</del>
					</p>
					<div class="flog flag-new">${obj.dnData[i].flog||""}</div>
					<div class="comment">
						<a href="##">
							<span class="review">${obj.dnData[i].pingji}</span>
							<span class="author">${obj.dnData[i].author}</span>
						</a>
					</div>
				</li>`
	}
	brickListUl3.innerHTML = dnStr;

	var dnLi9 = `<li class="brick-item brick-item-m li9">
					<div><a href="##"><i class="iconfont icon-youjiantou"></i></a></div>
					<a href="##">浏览更多<span>电脑</span></a>
				</li>`
	brickListUl3.innerHTML+=(dnLi9);

	//家电、家居
	var brickListUl4 = document.querySelector(".jiadian>.brick-list-ul4");
	var jnStr = "";
	for(var i = 0;i<obj.jData.length;i++){
		jnStr += `<li class="brick-item brick-item-m">
					<a href="##"><img class="imgs" src=${obj.jData[i].img} /></a>
					<h3>${obj.jData[i].title}</h3>
					<div class="desc">${obj.jData[i].desc||""}</div>
					<p class="price">
						<span>${obj.jData[i].price}</span>&nbsp;元&nbsp;
						<del>${obj.jData[i].del||""}</del>
					</p>
					<div class="flog flag-new">${obj.jData[i].flog||""}</div>
					<div class="comment">
						<a href="##">
							<span class="review">${obj.jData[i].pingji||""}</span>
							<span class="author">${obj.jData[i].author||""}</span>
						</a>
					</div>
				</li>`
	}
	brickListUl4.innerHTML = jnStr;

	var jnLi9 = `<li class="brick-item brick-item-m li9">
					<div><a href="##"><i class="iconfont icon-youjiantou"></i></a></div>
					<a href="##">浏览更多<span>家居</span></a>
				</li>`
	brickListUl4.innerHTML+=(jnLi9);


	//搭配、热门
	var matchListUl1 = document.querySelector(".match>.brick-list-ul1");
	var m_rStr = "";
	for(var i = 0;i<obj.m_rData.length;i++){
		m_rStr += `<li class="brick-item brick-item-m">
					<a href="##"><img class="imgs" src=${obj.m_rData[i].img} /></a>
					<h3>${obj.m_rData[i].title}</h3>
					<p class="price">
						<span>${obj.m_rData[i].price}</span>&nbsp;元&nbsp;
						<del>${obj.m_rData[i].del||""}</del>
					</p>
					<div class="amount">${obj.m_rData[i].amount||""}</div>
					<div class="flog flag-new">${obj.m_rData[i].flog||""}</div>
					<div class="comment">
						<a href="##">
							<span class="review">${obj.m_rData[i].pingji}</span>
							<span class="author">${obj.m_rData[i].author}</span>
						</a>
					</div>
				</li>`
	}
	matchListUl1.innerHTML = m_rStr;

	var m_rLi9 = `<li class="brick-item brick-item-m li9">
					<div><a href="##"><i class="iconfont icon-youjiantou"></i></a></div>
					<a href="##">浏览更多<span>热门</span></a>
				</li>`
	matchListUl1.innerHTML+=(m_rLi9);


	//搭配、耳机音响
	var matchListUl2 = document.querySelector(".match>.brick-list-ul2");
	var m_hStr = "";
	for(var i = 0;i<obj.m_hData.length;i++){
		m_hStr += `<li class="brick-item brick-item-m">
					<a href="##"><img class="imgs" src=${obj.m_hData[i].img} /></a>
					<h3>${obj.m_hData[i].title}</h3>
					<p class="price">
						<span>${obj.m_hData[i].price}</span>&nbsp;元&nbsp;
						<del>${obj.m_hData[i].del||""}</del>
					</p>
					<div class="amount">${obj.m_hData[i].amount||""}</div>
					<div class="flog flag-new">${obj.m_hData[i].flog||""}</div>
					<div class="comment">
						<a href="##">
							<span class="review">${obj.m_hData[i].pingji}</span>
							<span class="author">${obj.m_hData[i].author}</span>
						</a>
					</div>
				</li>`
	}
	matchListUl2.innerHTML = m_hStr;

	var m_hLi9 = `<li class="brick-item brick-item-m li9">
					<div><a href="##"><i class="iconfont icon-youjiantou"></i></a></div>
					<a href="##">浏览更多<span>耳机音响</span></a>
				</li>`
	matchListUl2.innerHTML+=(m_hLi9);


	//搭配、电源
	var matchListUl3 = document.querySelector(".match>.brick-list-ul3");
	var m_pStr = "";
	for(var i = 0;i<obj.m_pData.length;i++){
		m_pStr += `<li class="brick-item brick-item-m">
					<a href="##"><img class="imgs" src=${obj.m_pData[i].img} /></a>
					<h3>${obj.m_pData[i].title}</h3>
					<p class="price">
						<span>${obj.m_pData[i].price}</span>&nbsp;元&nbsp;
						<del>${obj.m_pData[i].del||""}</del>
					</p>
					<div class="amount">${obj.m_pData[i].amount||""}</div>
					<div class="flog flag-new">${obj.m_pData[i].flog||""}</div>
					<div class="comment">
						<a href="##">
							<span class="review">${obj.m_pData[i].pingji}</span>
							<span class="author">${obj.m_pData[i].author}</span>
						</a>
					</div>
				</li>`
	}
	matchListUl3.innerHTML = m_pStr;

	var m_pLi9 = `<li class="brick-item brick-item-m li9">
					<div><a href="##"><i class="iconfont icon-youjiantou"></i></a></div>
					<a href="##">浏览更多<span>电源</span></a>
				</li>`
	matchListUl3.innerHTML+=(m_pLi9);


	//搭配、电源
	var matchListUl4 = document.querySelector(".match>.brick-list-ul4");
	var m_bStr = "";
	for(var i = 0;i<obj.m_bData.length;i++){
		m_bStr += `<li class="brick-item brick-item-m">
					<a href="##"><img class="imgs" src=${obj.m_bData[i].img} /></a>
					<h3>${obj.m_bData[i].title}</h3>
					<p class="price">
						<span>${obj.m_bData[i].price}</span>&nbsp;元&nbsp;
						<del>${obj.m_bData[i].del||""}</del>
					</p>
					<div class="amount">${obj.m_bData[i].amount||""}</div>
					<div class="flog flag-new">${obj.m_bData[i].flog||""}</div>
					<div class="comment">
						<a href="##">
							<span class="review">${obj.m_bData[i].pingji}</span>
							<span class="author">${obj.m_bData[i].author}</span>
						</a>
					</div>
				</li>`
	}
	matchListUl4.innerHTML = m_bStr;

	var m_bLi9 = `<li class="brick-item brick-item-m li9">
					<div><a href="##"><i class="iconfont icon-youjiantou"></i></a></div>
					<a href="##">浏览更多<span>电源</span></a>
				</li>`
	matchListUl4.innerHTML+=(m_bLi9);



	//配件、热门
	var fittingsListUl1 = document.querySelector(".fittings>.brick-list-ul1");
	var f_rStr = "";
	for(var i = 0;i<obj.f_rData.length;i++){
		f_rStr += `<li class="brick-item brick-item-m">
					<a href="##"><img class="imgs" src=${obj.f_rData[i].img} /></a>
					<h3>${obj.f_rData[i].title}</h3>
					<p class="price">
						<span>${obj.f_rData[i].price}</span>&nbsp;元&nbsp;
						<del>${obj.f_rData[i].del||""}</del>
					</p>
					<div class="amount">${obj.f_rData[i].amount||""}</div>
					<div class="flog flag-new">${obj.f_rData[i].flog||""}</div>
					<div class="comment">
						<a href="##">
							<span class="review">${obj.f_rData[i].pingji}</span>
							<span class="author">${obj.f_rData[i].author}</span>
						</a>
					</div>
				</li>`
	}
	fittingsListUl1.innerHTML = f_rStr;

	var f_rLi9 = `<li class="brick-item brick-item-m li9">
					<div><a href="##"><i class="iconfont icon-youjiantou"></i></a></div>
					<a href="##">浏览更多<span>热门</span></a>
				</li>`
	fittingsListUl1.innerHTML+=(f_rLi9);


	//配件、保护套
	var fittingsListUl2 = document.querySelector(".fittings>.brick-list-ul2");
	var f_prStr = "";
	for(var i = 0;i<obj.f_prData.length;i++){
		f_prStr += `<li class="brick-item brick-item-m">
					<a href="##"><img class="imgs" src=${obj.f_prData[i].img} /></a>
					<h3>${obj.f_prData[i].title}</h3>
					<p class="price">
						<span>${obj.f_prData[i].price}</span>&nbsp;元&nbsp;
						<del>${obj.f_prData[i].del||""}</del>
					</p>
					<div class="amount">${obj.f_prData[i].amount||""}</div>
					<div class="flog flag-new">${obj.f_prData[i].flog||""}</div>
					<div class="comment">
						<a href="##">
							<span class="review">${obj.f_prData[i].pingji}</span>
							<span class="author">${obj.f_prData[i].author}</span>
						</a>
					</div>
				</li>`
	}
	fittingsListUl2.innerHTML = f_prStr;

	var f_prLi9 = `<li class="brick-item brick-item-m li9">
					<div><a href="##"><i class="iconfont icon-youjiantou"></i></a></div>
					<a href="##">浏览更多<span>保护套</span></a>
				</li>`
	fittingsListUl2.innerHTML+=(f_prLi9);


	//配件、贴膜
	var fittingsListUl3 = document.querySelector(".fittings>.brick-list-ul3");
	var f_paStr = "";
	for(var i = 0;i<obj.f_paData.length;i++){
		f_paStr += `<li class="brick-item brick-item-m">
					<a href="##"><img class="imgs" src=${obj.f_paData[i].img} /></a>
					<h3>${obj.f_paData[i].title}</h3>
					<p class="price">
						<span>${obj.f_paData[i].price}</span>&nbsp;元&nbsp;
						<del>${obj.f_paData[i].del||""}</del>
					</p>
					<div class="amount">${obj.f_paData[i].amount||""}</div>
					<div class="flog flag-new">${obj.f_paData[i].flog||""}</div>
					<div class="comment">
						<a href="##">
							<span class="review">${obj.f_paData[i].pingji}</span>
							<span class="author">${obj.f_paData[i].author}</span>
						</a>
					</div>
				</li>`
	}
	fittingsListUl3.innerHTML = f_paStr;

	var f_paLi9 = `<li class="brick-item brick-item-m li9">
					<div><a href="##"><i class="iconfont icon-youjiantou"></i></a></div>
					<a href="##">浏览更多<span>贴膜</span></a>
				</li>`
	fittingsListUl3.innerHTML+=(f_paLi9);


	//配件、其他配件
	var fittingsListUl4 = document.querySelector(".fittings>.brick-list-ul4");
	var f_bStr = "";
	for(var i = 0;i<obj.f_bData.length;i++){
		f_bStr += `<li class="brick-item brick-item-m">
					<a href="##"><img class="imgs" src=${obj.f_bData[i].img} /></a>
					<h3>${obj.f_bData[i].title}</h3>
					<p class="price">
						<span>${obj.f_bData[i].price}</span>&nbsp;元&nbsp;
						<del>${obj.f_bData[i].del||""}</del>
					</p>
					<div class="amount">${obj.f_bData[i].amount||""}</div>
					<div class="flog flag-new">${obj.f_bData[i].flog||""}</div>
					<div class="comment">
						<a href="##">
							<span class="review">${obj.f_bData[i].pingji}</span>
							<span class="author">${obj.f_bData[i].author}</span>
						</a>
					</div>
				</li>`
	}
	fittingsListUl4.innerHTML = f_bStr;

	var f_bLi9 = `<li class="brick-item brick-item-m li9">
					<div><a href="##"><i class="iconfont icon-youjiantou"></i></a></div>
					<a href="##">浏览更多<span>其他配件</span></a>
				</li>`
	fittingsListUl4.innerHTML+=(f_bLi9);


	/*
		r_rData:r_rData,
		r_tData:r_tData,
		r_lData:r_lData,
		r_aData:r_aData,
		r_bData:r_bData
	 */

	//周边、热门
	var rimListUl1 = document.querySelector(".rim>.brick-list-ul1");
	var r_rStr = "";
	for(var i = 0;i<obj.r_rData.length;i++){
		r_rStr += `<li class="brick-item brick-item-m">
					<a href="##"><img class="imgs" src=${obj.r_rData[i].img} /></a>
					<h3>${obj.r_rData[i].title}</h3>
					<p class="price">
						<span>${obj.r_rData[i].price}</span>&nbsp;元&nbsp;
						<del>${obj.r_rData[i].del||""}</del>
					</p>
					<div class="amount">${obj.r_rData[i].amount||""}</div>
					<div class="flog flag-new">${obj.r_rData[i].flog||""}</div>
					<div class="comment">
						<a href="##">
							<span class="review">${obj.r_rData[i].pingji}</span>
							<span class="author">${obj.r_rData[i].author}</span>
						</a>
					</div>
				</li>`
	}
	rimListUl1.innerHTML = r_rStr;

	var r_rLi9 = `<li class="brick-item brick-item-m li9">
					<div><a href="##"><i class="iconfont icon-youjiantou"></i></a></div>
					<a href="##">浏览更多<span>热门</span></a>
				</li>`
	rimListUl1.innerHTML+=(r_rLi9);

	//周边、出行
	var rimListUl2 = document.querySelector(".rim>.brick-list-ul2");
	var r_tStr = "";
	for(var i = 0;i<obj.r_tData.length;i++){
		r_tStr += `<li class="brick-item brick-item-m">
					<a href="##"><img class="imgs" src=${obj.r_tData[i].img} /></a>
					<h3>${obj.r_tData[i].title}</h3>
					<p class="price">
						<span>${obj.r_tData[i].price}</span>&nbsp;元&nbsp;
						<del>${obj.r_tData[i].del||""}</del>
					</p>
					<div class="amount">${obj.r_tData[i].amount||""}</div>
					<div class="flog flag-new">${obj.r_tData[i].flog||""}</div>
					<div class="comment">
						<a href="##">
							<span class="review">${obj.r_tData[i].pingji}</span>
							<span class="author">${obj.r_tData[i].author}</span>
						</a>
					</div>
				</li>`
	}
	rimListUl2.innerHTML = r_tStr;

	var r_tLi9 = `<li class="brick-item brick-item-m li9">
					<div><a href="##"><i class="iconfont icon-youjiantou"></i></a></div>
					<a href="##">浏览更多<span>出行</span></a>
				</li>`
	rimListUl2.innerHTML+=(r_tLi9);


	//周边、居家
	var rimListUl3 = document.querySelector(".rim>.brick-list-ul3");
	var r_lStr = "";
	for(var i = 0;i<obj.r_lData.length;i++){
		r_lStr += `<li class="brick-item brick-item-m">
					<a href="##"><img class="imgs" src=${obj.r_lData[i].img} /></a>
					<h3>${obj.r_lData[i].title}</h3>
					<p class="price">
						<span>${obj.r_lData[i].price}</span>&nbsp;元&nbsp;
						<del>${obj.r_lData[i].del||""}</del>
					</p>
					<div class="amount">${obj.r_lData[i].amount||""}</div>
					<div class="flog flag-new">${obj.r_lData[i].flog||""}</div>
					<div class="comment">
						<a href="##">
							<span class="review">${obj.r_lData[i].pingji}</span>
							<span class="author">${obj.r_lData[i].author}</span>
						</a>
					</div>
				</li>`
	}
	rimListUl3.innerHTML = r_lStr;

	var r_lLi9 = `<li class="brick-item brick-item-m li9">
					<div><a href="##"><i class="iconfont icon-youjiantou"></i></a></div>
					<a href="##">浏览更多<span>居家</span></a>
				</li>`
	rimListUl3.innerHTML+= r_lLi9;


	//周边、周边生活
	var rimListUl4 = document.querySelector(".rim>.brick-list-ul4");
	var r_aStr = "";
	for(var i = 0;i<obj.r_aData.length;i++){
		r_aStr += `<li class="brick-item brick-item-m">
					<a href="##"><img class="imgs" src=${obj.r_aData[i].img} /></a>
					<h3>${obj.r_aData[i].title}</h3>
					<p class="price">
						<span>${obj.r_aData[i].price}</span>&nbsp;元&nbsp;
						<del>${obj.r_aData[i].del||""}</del>
					</p>
					<div class="amount">${obj.r_aData[i].amount||""}</div>
					<div class="flog flag-new">${obj.r_aData[i].flog||""}</div>
					<div class="comment">
						<a href="##">
							<span class="review">${obj.r_aData[i].pingji}</span>
							<span class="author">${obj.r_aData[i].author}</span>
						</a>
					</div>
				</li>`
	}
	rimListUl4.innerHTML = r_aStr;

	var r_aLi9 = `<li class="brick-item brick-item-m li9">
					<div><a href="##"><i class="iconfont icon-youjiantou"></i></a></div>
					<a href="##">浏览更多<span>周边生活</span></a>
				</li>`
	rimListUl4.innerHTML += r_aLi9;



	//周边、箱包
	var rimListUl5 = document.querySelector(".rim>.brick-list-ul5");
	var r_bStr = "";
	for(var i = 0;i<obj.r_bData.length;i++){
		r_bStr += `<li class="brick-item brick-item-m">
					<a href="##"><img class="imgs" src=${obj.r_bData[i].img} /></a>
					<h3>${obj.r_bData[i].title}</h3>
					<p class="price">
						<span>${obj.r_bData[i].price}</span>&nbsp;元&nbsp;
						<del>${obj.r_bData[i].del||""}</del>
					</p>
					<div class="amount">${obj.r_bData[i].amount||""}</div>
					<div class="flog flag-new">${obj.r_bData[i].flog||""}</div>
					<div class="comment">
						<a href="##">
							<span class="review">${obj.r_bData[i].pingji}</span>
							<span class="author">${obj.r_bData[i].author}</span>
						</a>
					</div>
				</li>`
	}
	rimListUl5.innerHTML = r_bStr;

	var r_bLi9 = `<li class="brick-item brick-item-m li9">
					<div><a href="##"><i class="iconfont icon-youjiantou"></i></a></div>
					<a href="##">浏览更多<span>箱包</span></a>
				</li>`
	rimListUl5.innerHTML+=(r_bLi9);

	//推荐
	




	//遍历时候remove不存在的空标签
	var flog = document.querySelectorAll(".flog");	
	for(var i=0;i<flog.length;i++){
		if(flog[i].innerText == ""){
			flog[i].remove();
		}
	}
	var desc = document.querySelectorAll(".desc");
	for(var i=0;i<desc.length;i++){
		if(desc[i].innerText == ""){
			desc[i].remove();
		}
	}
	var review = document.querySelectorAll(".review");	

	for(var i=0;i<review.length;i++){
		if(review[i].innerText == "undefined"){
			review[i].parentNode.parentNode.style.display = "none";
		}
	}

})







//家电上面的划入效果
var appMoreLists = document.querySelectorAll(".app-more-list>ul>li");
var span16Ul = document.querySelectorAll(".jiadian>ul");
for(var i = 0;i<appMoreLists.length;i++){
	appMoreLists[i].index = i;
	appMoreLists[i].onmouseover = function(){
		for(var j = 0;j<appMoreLists.length;j++){
			appMoreLists[j].className = "";
			span16Ul[j].style.display = "none";
		}
		this.className = "active";
		span16Ul[this.index].style.display = "block";
	}
}

//搭配 -上面的划入效果
var matchMoreLists = document.querySelectorAll(".match-more-list>ul>li");
var matchUl = document.querySelectorAll(".match>ul");
for(var i = 0;i<matchMoreLists.length;i++){
	matchMoreLists[i].index = i;
	matchMoreLists[i].onmouseover = function(){
		for(var j = 0;j<matchMoreLists.length;j++){
			matchMoreLists[j].className = "";
			matchUl[j].style.display = "none";
		}
		this.className = "active";
		matchUl[this.index].style.display = "block";
	}
}

//配件 -上面的划入效果
var fittingsMoreLists = document.querySelectorAll(".fittings-more-list>ul>li");
var fittingsUl = document.querySelectorAll(".fittings>ul");
for(var i = 0;i<fittingsMoreLists.length;i++){
	fittingsMoreLists[i].index = i;
	fittingsMoreLists[i].onmouseover = function(){
		for(var j = 0;j<fittingsMoreLists.length;j++){
			fittingsMoreLists[j].className = "";
			fittingsUl[j].style.display = "none";
		}
		this.className = "active";
		fittingsUl[this.index].style.display = "block";
	}
}

//周边rim -上面的划入效果
var rimMoreLists = document.querySelectorAll(".rim-more-list>ul>li");
var rimUl = document.querySelectorAll(".rim>ul");
for(var i = 0;i<rimMoreLists.length;i++){
	rimMoreLists[i].index = i;
	rimMoreLists[i].onmouseover = function(){
		for(var j = 0;j<rimMoreLists.length;j++){
			rimMoreLists[j].className = "";
			rimUl[j].style.display = "none";
		}
		this.className = "active";
		rimUl[this.index].style.display = "block";
	}
}



//鼠标移入li时让comment显示

var page = document.getElementById("page-wrapper");
page.onmouseover = function(e){
	var e = e||event;
	var target = e.target||e.srcElement;

	if(target.tagName == "LI"&&target.className == "brick-item brick-item-m"){

		target.lastElementChild.style.height = "76px";
		target.lastElementChild.style.opacity = "1";

		// 移出事件有问题
		target.onmouseout = function(){
			this.lastElementChild.style.height = "0";
			this.lastElementChild.style.opacity = "0";
		}

	}
}




