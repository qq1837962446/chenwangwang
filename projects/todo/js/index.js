var swiper = new Swiper('.swiper-container', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
});
var myIscroll =new IScroll(".content",{
    scrollbars:true,
    fadeScrollbars:true
});
var state="wei";
//点击完成
$(".btn div").click(function(){
    $(".btn div")
        .removeClass("active")
        .filter(this)
        .addClass("active");
    if($(".wei").hasClass("active")){
        state="wei";
        $(".trash").show();
        rewrite();
    }else{
        state = 'done';
        $(".trash").show()
        }
        rewrite();
    myIscroll.refresh(0,0,0)
});
//点击添加
$(".add").click(function () {
    $(".main")
        .css("filter","blur(2px)")
        .next()
        .show(333)
        .find(".edit")
        .delay(500)
        .queue(function () {$(this)
            .dequeue();
            $("#text")[0].focus()
        });
});
//点击提交
$("#button").click(function () {
    var text=$("#text").val();
    $("#text").val("");
    if(text===""){
        return;
    }
    var time=new Date().getTime();
    var data=getdata();
    var color = moFn();
    data.push({con:text,time,isStar:0,isDown:0,color});
    savedata(data);
    rewrite();
    $(".edit").removeClass("show").parent().hide().prev().css("filter","");
});
//点击x
$("#xiaoshi").click(function () {
    $(".edit")
        .removeClass("show")
        .parent()
        .hide()
        .prev()
        .css("filter","")
});
//点击完成
$(".content").on("click",".right",function () {
    var data=getdata();
    var index=$(this).parent().attr("id");
    data.reverse();
    data[index].isDown=1;
    data.reverse();
    savedata(data);
    rewrite();
});
//点击删除
$(".content").on("click",".delete",function () {
    var data=getdata();
    var index=$(this).parent().attr("id");
    data.reverse();
    data.splice(index,1);
    data.reverse();
    savedata(data);
    rewrite();
});
//转化为字符串
function savedata(data) {
    localStorage.todo=JSON.stringify(data);
}
//存储的方式
function getdata() {
    return localStorage.todo?JSON.parse(localStorage.todo):[];
}
//添加
function rewrite() {
    var color = moFn();
    var data=getdata();
    $(".content ul").empty();       //清除所有子节点
    data.reverse();
    var str="";
    $.each(data,function (index,val) {
        if(state==='wei'){
            if(val.isDown===0){
        var className =val.isStar?"active":"";
            str+=" <li style='background:"+val.color+"' id="+index+" > <time> <span>"+get(val.time)+"</span> <span>"+dfn(val.time)+"</span> </time><p>"+val.con+"</p><i class='iconfont'>&#xe61b;</i><div class='right'>完成</div></li>"
            }
        }
        else if(state==='done'){
                if(val.isDown===1){
                    str+=" <li style='background:#ccc' id="+index+"> <time> <span>"+get(val.time)+"</span> <span>"+dfn(val.time)+"</span> </time><p>"+val.con+"</p><i class='iconfont'>&#xe61b;</i><div class='delete'>删除</div></li>"
                }
            }
        });
    $(".content ul").html(str);
    myIscroll.refresh();
    addfn();
}
rewrite();
//年月
function get(e) {
    var date=new Date();
    date.setTime(e);
    var tt = date.getFullYear();
    var rr = cfon(date.getMonth()+1);
    var ta =cfon(date.getDate());
    return tt+"-"+rr+"-"+ta;
}
//小时
function dfn(r) {
    var date =new  Date();
    date.setTime(r);
    var tt=date.getHours();
    var rr=cfon(date.getMinutes());
    var ta =cfon(date.getSeconds());
    return tt+":"+rr+":"+ta;
}
//小于是等于0
function cfon(t) {
    return t<10?"0"+t:t;
}
//颜色
function moFn() {
    var mo=[0,3,6,9,"c"];
    var tr = "#";
    for(var i = 0;i < 3;i++){
        var ss = Math.floor(Math.random()*mo.length);
        tr+=mo[ss];
    }
    return tr;
}
//拖动
function addfn() {
    var max = $(window).width()/3;
    $(".content li").each(function (index, ele) {
        var mm = new Hammer(ele);
        var mx;
        var state ="start";
        mm.on("panstart",function (e) {
            $(ele).css("transition","none");
        });
        mm.on("pan",function (e) {
            mx  =e.deltaX;
            if(state==="start"){
                if(mx>0){
                    return;
                }
            }
            if(state==="end"){
                if(mx<0){
                    return;
                }
                mx=mx-max;
            }
            if(Math.abs(mx)>max){
                    return;
            }
            console.log(mx);
            $(ele).css("transform","translate3d("+mx+"px,0,0)")
        });
        mm.on("panend",function () {
            $(ele).css("transition","all 1s");
            if(Math.abs(mx)>max/2){
                state = "end";
                $(ele).css("transform","translate3d("+(-max)+"px,0,0)")
            }else {
                state = "start";
                $(ele).css("transform","translate3d(0,0,0)")
            }
        })
    })
}
addfn();



