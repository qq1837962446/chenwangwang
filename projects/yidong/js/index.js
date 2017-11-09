


















// 优惠促销开始 
{
	let inner=document.querySelector('.chuxiao .chuxiao-list ul');
	let big=document.querySelector('.chuxiao');
	let pres=document.querySelector('.chuxiao .left-page');
	let nexts=document.querySelector('.chuxiao .right-page');
	let num=4;
	let dir="r";
	let t=setInterval(movefn,2000);
	function movefn(){
		if(dir==='r'){
			num++;
		}else if(dir==='l'){
			num--;
		}
		inner.style.transition='all .5s';
		inner.style.marginLeft=-295*num+'px';
	}
	inner.addEventListener("transitionend",function(){
		flag=true;
		if(num===12){
			num=4;
			inner.style.transition='none';
			inner.style.marginLeft='-1180px';
		}
		if(num===0){
			num=8;
			inner.style.marginLeft='-2360px';
			inner.style.transition="none";
		}
	});

	window.onblur=big.onmouseover=function(){
		clearInterval(t);
	};
	window.onfocus=big.onmouseout=function(){
		t=setInterval(movefn,2000);
	};
	flag=true;
	pres.onclick=function(){
		dir='l';
		if(flag){
			flag=false;
			movefn();
		}
	};
	nexts.onclick=function(){
		dir='r';
		if(flag){
			flag=false;
			movefn();
		}
	}

}

{
	// 轮播图
	let lunbodian=document.querySelectorAll('.banner .lunbodian ol li');
	let imgs=document.querySelectorAll('.bannerul>li');
	let banner=document.querySelector('.banner');
	let pre=document.querySelector('.banner .updown .pre');
	let next=document.querySelector('.banner .updown .next');
	let dir='r';
	let now=0;
	let z=10;
	let flag=true;
	let ts=setInterval(bannfn,2000);
	function bannfn(){
		//方向判断
		if(dir==='r'){		
			imgs[now].classList.add('leftout');	//显示的当前图片
			lunbodian[now].classList.remove('active');
			now++;
			if(now===imgs.length){
				now=0;
			}
			imgs[now].classList.add('rightin');//当前图片的下一张图片
			
		}else if(dir==='l'){
			// 左进右出
			imgs[now].classList.add('rightout');	//显示的当前图片
			lunbodian[now].classList.remove('active');
			now--;
			if(now===-1){
				now=imgs.length-1;
			}
			imgs[now].classList.add('leftin');//当前图片的下一张图片
			
		}
			imgs[now].style.zIndex=z++;			//层级提高
			lunbodian[now].classList.add('active');
		
		

	};
	imgs.forEach(function(ele,index){		//消除类名--动画结束
		ele.addEventListener('animationend',function(){
			imgs[index].classList='';
			flag=true;
		})
	})

	banner.onmouseover=function(){
		clearInterval(ts);
	};
	window.addEventListener('onblur',function(){
		clearInterval(ts);
	});
	banner.onmouseout=function(){
		ts=setInterval(bannfn,2000);
	};
	window.addEventListener('onfocus',function(){
		ts=setInterval(bannfn,2000);
	});
	lunbodian.forEach(function(ele,index){
		ele.onclick=function(){
			// now代表当前轮播点所在的位置下标
			// index代表当前你点击的图片下标
			if(flag){
				if(index>now){
					// 左出右进
					imgs[now].classList.add('leftout');
					imgs[index].classList.add('rightin');

				}else if(index<now){
					// 左进右出
					imgs[now].classList.add('rightout');
					imgs[index].classList.add('leftin')
				}
				imgs[index].style.zIndex=z++;
				lunbodian[now].classList.remove('active');	//清除当前轮播点样式
				lunbodian[index].classList.add('active');	//添加点击后轮播点样式
				now=index;//下标等于属性值

			}
			flag=false;
			
		}
	})

	
	pre.onclick=function(){
		dir='l';
		if(flag){
			
			bannfn();
			flag=false;
		}
	};

	next.onclick=function(){
		dir='r';
		if(flag){
			
			bannfn();
			flag=false;
		}
	};

}




// 服务区
{
	let cz=document.querySelectorAll('.main-right .cz .nony');
	console.log(cz);
	cz.forEach(function(val,index){
		val.onclick=function(){
			for(let i=0;i<cz.length;i++){
				cz[i].classList.remove('cz100');
				val.style.background='oranged';
			}
			val.classList.add('cz100');
			val.style.background='oranged';

		}
		
	});

}