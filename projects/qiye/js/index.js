/**
 * Created by Administrator on 2017/11/9.
 */
let imgs=document.querySelectorAll(".top ul li");
let dians = document.querySelectorAll(".dian li");
let tops =document.querySelector(".top");
console.log(imgs);
tops.onmouseover=window.onblur=function () {
    clearInterval(ta);
};
tops.onmouseout = window.onfocus=function () {
    ta=setInterval(wcc,3000);
};
let now = 0;
let z = 10;
let ta=setInterval(wcc,3000);
function wcc() {
    imgs[now].classList.add("left-chu");//显示的当前图片
    dians[now].classList.remove("active");
    now++;
    if(now ===imgs.length){
        now=0;
    }
    imgs[now].classList.add("right-jin");//当前图片的下一张图片
    dians[now].classList.add("active");
    imgs[now].style.zIndex=z++;
}
imgs.forEach(function(ele,index){  //消除类名
    ele.addEventListener("animationend",function(){
        ele.className="";
    })
});
dians.forEach(function (ele,index) {
    ele.onclick=function () {
        //now代表的是当前轮播点所在的位子下标
        //index代表当前你点击的图片下标
        if(now < index) {
            //左进右出
            imgs[now].classList.add("left-chu");
            imgs[index].classList.add("right-jin");
        }else if(now >index){
            //左出右进
            imgs[now].classList.add("right-chu");
            imgs[index].classList.add("left-jin");
        }
        imgs[index].style.zIndex=z++;
        dians[now].classList.remove("active");
        dians[index].classList.add("active");
        now=index;//当前的下标等于点击时的下标
    }
});