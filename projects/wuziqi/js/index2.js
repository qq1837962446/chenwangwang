class Game{
    constructor(){
        this.star=document.querySelector("#star");
        this.container=document.querySelector(".container");
        this.chong=document.querySelector(".chong");
        this.canvas=document.querySelector("canvas");
        this.cobj=this.canvas.getContext("2d");
        this.w=40;
        this.flag=true;

    }
    stare(){
            this.container.classList.add("anima");
            this.star.style.display="none";
            this.canvasobj();
            this.point(3,3);
            this.point(3,11);
            this.point(11,11);
            this.point(7,7);
            this.point(11,3);
            // this.addcheer();

    }
    //棋盘
    canvasobj(){
        this.cobj.clearRect(0,0,600,600);
        this.cobj.beginPath();
        for(let i=0;i<15;i++){
            this.cobj.moveTo(i*this.w+20,20);
            this.cobj.lineTo(i*this.w+20,580);
            this.cobj.moveTo(20,i*this.w+20);
            this.cobj.lineTo(580,i*this.w+20);
        }
        this.cobj.stroke();
    }
//    点
    point(x,y){
        this.cobj.save();
        this.cobj.beginPath();
        let xobj=x*this.w+20;
        let yobj=y*this.w+20;
        this.cobj.translate(xobj,yobj);
        this.cobj.arc(0,0,5,0,2*Math.PI);
        this.cobj.restore();
        this.cobj.fill();
    }
//    创建棋子
    dracheer(x,y,color){
        this.cobj.beginPath();
        this.cobj.save();
        this.cobj.fillStyle=color;
        this.cobj.translate(x*this.w+20,y*this.w+20);
        this.cobj.arc(0,0,16,0,2*Math.PI);
        this.cobj.restore();
    }
    addcheer(){
        this.canvas.onclick=function (e) {
            let x=Math.round((e.offsetX-20)/this.w);
            let y=Math.round((e.offsetY-20)/this.w);
            if(this.flag){
                this.dracheer(x,y,"black");
            }else{
                this.dracheer(x,y,"white");
            }
        }.bind(this);

    }

}
let games=new Game();
let star=document.querySelector("#star");
games.addcheer();
star.onclick=function () {
    games.stare();
};
// let canvas=document.querySelector("canvas");
// let flag=true;
// canvas.onclick=function (e) {
//     let x=Math.round((e.offsetX-20)/this.w);
//     let y=Math.round((e.offsetY-20)/this.w);
//     if(flag){
//         games.dracheer(x,y,"black");
//     }else{
//         games.dracheer(x,y,"white");
//     }
// };

