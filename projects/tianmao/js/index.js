{
//先获取对象
let dians=document.querySelectorAll('.lunbodian ul li');
let lunbos=document.querySelectorAll('.banner-banner ul li');
let le=dians.length;
//forEach是遍历
dians.forEach(function(val,index){
	val.onclick=function(){  //onclick表示点击时的效果  function函数
		for(let i=0;i<le;i++){   //遍历一下
			dians[i].classList.remove('dian3');  //清楚获取对象时的值
			lunbos[i].classList.remove('active');//清楚获取对象时的值
		}
		val.classList.add('dian3');  //添加获取对象时的值
		lunbos[index].classList.add('active');//添加获取对象时的值
		num=index;		//用户点住那个轮播点便从那个轮播点无限循环
	}
});
// setInterval() 方法可按照指定的周期（以毫秒计）来调用函数或计算表达式。
let num=0;		//声明一个变量，表示从第0个轮播图开始
let st=setInterval(fn,1500);
function fn(){				//回调一下啊
	num++;			
	if(num===le){
		num=0;			//判断，当num等于轮播点长度的时候，返回第一个，继续从0开始
	}
	for(let i=0;i<le;i++){
			dians[i].classList.remove('dian3');
			lunbos[i].classList.remove('active');
		}
		dians[num].classList.add('dian3');
		lunbos[num].classList.add('active');
}

// clearInterval()清除样式
// clearInterval() 方法的参数必须是由 setInterval() 返回的 ID 值。
// 先获取对象
let bannerobj=document.querySelector('.banner');
bannerobj.onmouseover=function(){				//鼠标移入时清除样式
	clearInterval(st);     //st代表返回的ID值
};
bannerobj.onmouseout=function(){				//鼠标离开时添加轮播图该有的样式
	st=setInterval(fn,1500);
}
}

{
let lantops = document.querySelector(".lantop");
	window.onscroll=function () {
		let lantopss = document.documentElement.scrollTop===0?document.body:document.documentElement;
		let ta = lantopss.scrollTop;
		if(ta > 500){
			lantops.style.top=0
		}else{
			lantops.style.top="-40px"
		}
	};
}

{
let zuobians=document.querySelector(".zuobian");
let zuobian1s=document.querySelectorAll(".zuobian .zuobian2");
console.log(zuobian1s)
let nei = document.querySelectorAll(".top0");
console.log(nei);
	window.addEventListener("scroll",function () {
		let lanto = document.documentElement.scrollTop===0?document.body:document.documentElement;
        let ta1 = lanto.scrollTop;
		for(let j= 0 ; j<nei.length;j++){
			if(ta1 >= nei[j].offsetTop){
				for(let i= 0 ; i<zuobian1s.length;i++){
					zuobian1s[i].classList.remove("active")
				}
				zuobian1s[j].classList.add("active");
			}
		}
        if(ta1>500){
            zuobians.style.cssText="width:36px;height: 300px;"
        }else{
            zuobians.style.cssText="width:0;height: 0;"
        }
	});
	let lanto = document.documentElement.scrollTop===0?document.body:document.documentElement;
	let ta1 = lanto.scrollTop;
	zuobian1s.forEach(function(ele,index){
		ele.onclick=function(){
			let wobu = nei[index].offsetTop;
			animate(lanto,{scrollTop:wobu - 50},1000);
		}
	});

window.addEventListener("scroll",function () {
	let lanto = document.documentElement.scrollTop===0? document.body : document.documentElement;
	let ta1 = lanto.scrollTop;
	let fh=document.querySelector(".fanhui");
	for(let i=0;i<nei.length;i++){
		if(ta1>nei[i].offsetTop-window.innerHeight){
			let imgs=nei[i].querySelectorAll("img");
			for(let i=0;i<imgs.length;i++){
				imgs[i].src=imgs[i].getAttribute("tta-src");
			}
		}
	}
	fh.onclick=function () {
        document.documentElement.scrollTop=document.body.scrollTop=0;
    }
});
}