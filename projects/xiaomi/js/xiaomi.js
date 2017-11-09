/*
* @Author: Administrator
* @Date:   2017-10-12 23:18:47
* @Last Modified by:   Administrator
* @Last Modified time: 2017-10-13 00:06:41
*/
{
{
	var b = document.querySelectorAll('.fon .wenzi1');

	var arr1 = document.querySelectorAll('.family .lift');
	b.forEach(function(ele,index){
		ele.onmouseover=function(){
			for(let i= 0; i<b.length;i++){
				b[i].classList.remove("wenzi3");
				arr1[i].style.display="none";
			}
			ele.classList.add("wenzi3");
			arr1[index].style.display="block";
		}
	});
}
	var ar = document.querySelectorAll('.zhineng .wenzi1');
	var ar1 = document.querySelectorAll('.family .zhineng1');
	ar.forEach(function(ele,index){
		ele.onmouseover=function(){
			for(let i= 0; i<ar.length;i++){
				ar[i].classList.remove("wenzi3");
				ar1[i].style.display="none";
			}
			ele.classList.add("wenzi3");
			ar1[index].style.display="block";
		}
	});
	var num = document.querySelectorAll('.dapei .wenzi1');
	var num1 = document.querySelectorAll('.family .dapeiwo');
	num.forEach(function(ele,index){
		ele.onmouseover=function(){
			for(let i= 0; i<num.length;i++){
				num[i].classList.remove("wenzi3");
				num1[i].style.display="none";
			}
			ele.classList.add("wenzi3");
			num1[index].style.display="block";
		}
	});
	var twle = document.querySelectorAll('.peijianni .wenzi1');
	var twle1 = document.querySelectorAll('.family .peijiannin');
	twle.forEach(function(ele,index){
		ele.onmouseover=function(){
			for(let i = 0; i< twle.length;i++){
				twle[i].classList.remove("wenzi3");
				twle1[i].style.display="none";
			}
			ele.classList.add("wenzi3");
			twle1[index].style.display="block";
		}
	})
}
{
// 维你推荐
var leftObj = document.querySelector(".top-ico2");
	var rightObj = document.querySelector(".top-ico3");
	var bottomObj = document.querySelector(".danpin-bottom");
	var topObj = document.querySelector(".danpin-top-right");
	rightObj.onclick=function(){
		leftObj.classList.add("active");
		rightObj.classList.remove("active");
		bottomObj.style.marginLeft="-1245px";
	}
	leftObj.onclick=function(){
		leftObj.classList.remove("active");
		rightObj.classList.add("active");
		bottomObj.style.marginLeft="0";
	}
	var arr = 1;
	let nani =setInterval(bo,4000);
	function bo(){
		arr++;
		if(arr%2===0){
			bottomObj.style.marginLeft="-1245px";
		}else{
			bottomObj.style.marginLeft="0";
		}
	}
	topObj.onmouseover=function () {
		clearInterval(nani);
	};
	topObj.onmouseout=function () {
		nani =setInterval(bo,4000);
	};
}
{
// 单品
	var left=document.querySelector(".top-ico1");
	var right=document.querySelector(".top-ico");
	var bottoms=document.querySelector(".bottoms");
	var danpins = document.querySelector(".danpin");
	right.onclick=function () {
		left.classList.add("active");
		right.classList.remove("active");
		bottoms.style.marginLeft="-1245px";
	}
	left.onclick=function () {
		left.classList.remove("active");
		right.classList.add("active");
		bottoms.style.marginLeft = "0";
	}
	var fa=setInterval(fin,3000);
	let q = 1;
	function fin() {
		q++;
		if(q % 2== 0){
			bottoms.style.marginLeft = "-1245px";
		}else{
			bottoms.style.marginLeft = "0";
		}
	}
	// var danpins = document.querySelector(".danpin-top");
	danpins.onmouseover=function () {
		clearInterval(fa);
	}
	danpins.onmouseout=function () {
		fa=setInterval(fin,3000);
	};
}
{
	//banner
	let dians = document.querySelectorAll(".lunbodian li");
    let imgs = document.querySelectorAll(".banner ul");
        dians.forEach(function(ele,index) {
            ele.onclick=function(){
                for(let i=0;i<dians.length;i++){
                    dians[i].classList.remove("active");
                    imgs[i].classList.remove("active");
                }
                ele.classList.add("active");
                imgs[index].classList.add("active");
                num2=index;
            }
        });
    ta = setInterval(fn,1000);
    var num2 = 0;
    function fn(div="r"){
    	if(div==="r"){
        	num2++;
        	if(num2===dians.length){
            	num2= 0;
        	}
    	}else if(div==="l"){
        	num2--;
        	if(num2 < 0){
        		num2 = dians.length-1;
        	}
        }
        for(let i=0;i<dians.length;i++){
            dians[i].classList.remove("active");
            imgs[i].classList.remove("active");
        }
        dians[num2].classList.add("active");
        imgs[num2].classList.add("active");
    }
    let banners = document.querySelector(".banner");
    banners.onmouseover=function(){
        clearInterval(ta)
    };
    banners.onmouseout=function(){
        ta = setInterval(fn,3000);
    }
    let lefts = document.querySelector(".left");
    let rights = document.querySelector(".right");
    	lefts.onclick=function(){
    		fn(div="l");
    	}
    	rights.onclick=function(){
    		fn();
    	}
}
{
	function bao(niniubi) {
		var contents = niniubi.querySelector(".content-tu");
		let dianObj = niniubi.querySelectorAll(".content-dian li");
		let lefts = niniubi.querySelector(".content-list .leftq");
		let rights = niniubi.querySelector(".content-list .rightq");
		console.log(lefts);
		dianObj.forEach(function (ele, index) {
			ele.onclick = function () {
				for (let i = 0; i < dianObj.length; i++) {
					dianObj[i].classList.remove("active");
				}
				ele.classList.add("active");
				contents.style.marginLeft = -296 * index + "px";
			}
		});
		var t = 0;
		rights.onclick = function () {
			lickFn()
		};
		lefts.onclick = function () {
			lickFn(2)
		};
		function lickFn(wo = 1) {
			if (wo === 1) {
				t++;
				if (t === dianObj.length) {
					t = dianObj.length - 1
				}
			} else if (wo === 2) {
				t--;
				if (t === -1) {
					t = 0;
				}
			}
			console.log(wo);
			for (let i = 0; i < dianObj.length; i++) {
				dianObj[i].classList.remove("active");
			}
			dianObj[t].classList.add("active");
			contents.style.marginLeft = -296 * t + "px";
		}
	}
	var arr= document.querySelectorAll(".content-btom .content-list");
	for(let i = 0;i<arr.length;i++){
		bao(arr[i]);
	}

}
// {
//     var left=document.querySelectorAll(".left-mmp");
// 	var li=document.querySelectorAll(".banner-l ul li");
//
// }