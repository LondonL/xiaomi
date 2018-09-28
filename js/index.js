let carticon=document.querySelector(".cartIcon")
let cart=document.querySelector(".cart")
let carta=document.querySelector(".cartIcon a")
carticon.onmouseover=function(){
	carticon.style.background="#FFFFFF";
	carta.style.color="#FF6700";
	cart.style.height="100px";
}
carticon.onmouseout=function(){
	carticon.style.background="#424242";
	carta.style.color="#B0B0B0";
	cart.style.height="0";
}
//购物车
let menu=document.querySelectorAll(".site-clearfix li");
let bannermenu=document.querySelector(".bannerMenu");
for(i=0;i<menu.length;i++){
	menu[i].onmouseover=function(){
		bannermenu.style.display="block";
	}
	bannermenu.onmouseover=function(){
		bannermenu.style.display="block";
	}
	bannermenu.onmouseout=function(){
		bannermenu.style.display="none"
	}
	menu[i].onmouseout=function(){
		bannermenu.style.display="none";
	}
}
//console.log(bannermenu);
//banner隐藏菜单
let bannerdot=document.querySelectorAll(".bannerdot li");
let bannerimg=document.querySelectorAll(".bannerimg li");
let banner=document.querySelector(".banner");
let lbtn=document.querySelector(".leftbtn");
let rbtn=document.querySelector(".rightbtn");
//console.log(lbtn,rbtn);
	//初始状态，第一张图片显示，第一个轮播点点亮
 let num=0;
bannerimg[0].style.zIndex=2;
bannerdot[0].style.background="#FFFFFF";
//遍历轮播点
for(let i=0;i<bannerdot.length;i++){
	bannerdot[i].onmouseover=function(){
		//清空所有图片的层级，关闭所有轮播点的颜色
		for(let j=0;j<bannerimg.length;j++){
			bannerimg[j].style.zIndex=1;
			bannerdot[j].style.background="#B0B0B0"
		}
		//移入的轮播点对应的图片层级提高，对应轮播点点亮
		bannerimg[i].style.zIndex=2;
		bannerdot[i].style.background="#FFFFFF";
		num=i;
	}
}
//自动轮播
let t=setInterval(move,2000);
function move(){
	num++;
	if(num==bannerimg.length){
		num=0;
	}
	for(let j=0;j<bannerimg.length;j++){
			bannerimg[j].style.zIndex=1;
			bannerdot[j].style.background="#B0B0B0";
		}
	bannerimg[num].style.zIndex=2;
	bannerdot[num].style.background="#FFFFFF";
}
//停止事件间隔函数
banner.onmouseover=function(){
	clearInterval(t);
}
banner.onmouseout=function(){
	t=setInterval(move,2000);
}
//单击右键
rbtn.onclick=function(){
	move();
}
//单击左键
lbtn.onclick=function(){
	moveL();
}
function moveL(){
	num--;
	if(num<0){
		num=4;
	}
	for(let i=0;i<bannerimg.length;i++){
			bannerimg[i].style.zIndex=1;
			bannerdot[i].style.background="#B0B0B0";
		}
	bannerimg[num].style.zIndex=2;
	bannerdot[num].style.background="#FFFFFF";
}
//获取焦点和失去焦点
//window.onblur=function(){
//	clearInterval(t);
//}
//window.onfocus=function(){
//	t=setInterval(move,2000);
//}
//

let liststore=document.querySelectorAll(".list-store a");
let menuposition=document.querySelector(".menuPosition");
for(let i=0;i<liststore.length;i++){
	liststore[i].onmouseover=function(){
		menuposition.style.height="220px";
	}
	menuposition.onmouseover=function(){
		menuposition.style.height="220px";
	}
	liststore[i].onmouseout=function(){
		menuposition.style.height="0";
	}
	menuposition.onmouseout=function(){
		menuposition.style.height="0";
	}
}

//平移轮播
let listmoveroll=document.querySelector(".listmoveroll");
//console.log(listmoveroll);
let leftbtn=document.querySelector(".timeleftbtn");
let rightbtn=document.querySelector(".timerightbtn");
let widths=parseInt(getComputedStyle(listmoveroll,null).width)/2;
//console.log(widths);
let number=0;
leftbtn.onclick=function(){
	number--;
	if(number<0){
		number=0;
	}
	listmoveroll.style.transform="translateX("+(-widths*number)+"px)";
}

rightbtn.onclick=function(){
	number++;
	if(number>1){
		number=1;
	}
	listmoveroll.style.transform="translateX("+(-widths*number)+"px)";
}

//家电橙色评论
let bricklist=document.querySelectorAll(".bricklist");
let bricklist1=document.querySelectorAll(".bricklist1");
let listposition3=document.querySelectorAll(".bricklist1 .listposition");
let listposition2=document.querySelectorAll(".bricklist .listposition");

for(let i=0;i<bricklist.length;i++){
	bricklist[i].onmouseover=function(){
		listposition2[i].style.display="block";
	}
	bricklist[i].onmouseout=function(){
		listposition2[i].style.display="none";
	}
}
for(let j=0;j<bricklist1.length;j++){
	bricklist1[j].onmouseover=function(){
		listposition3[j].style.display="block";
	}
	bricklist1[j].onmouseout=function(){
		listposition3[j].style.display="none";
	}
}
//家电移入换页
let morebricka=document.querySelectorAll(".morebrick a");
let list=document.querySelectorAll(".list");
//console.log(list);
for(let i=0;i<morebricka.length;i++){
	morebricka[i].onmouseover=function(){
		for(let j=0;j<list.length;j++){
			list[j].style.zIndex=1;
			morebricka[j].style.color="rgba(0,0,0,0.7)";
			morebricka[j].style.textDecoration="none";
		}
		list[i].style.zIndex=2;
		morebricka[i].style.color="#ff6700";
		morebricka[i].style.textDecoration="underline";
	}
}


//内容小轮播
let bookroll=document.querySelector(".bookroll");
//console.log(bookroll);
let btnL=document.querySelector(".btnleft");
let btnR=document.querySelector(".btnright");
//console.log(btnL,btnR);
let dot=document.querySelectorAll(".hary .dot li");
//console.log(dot);
let bookwidths=parseInt(getComputedStyle(bookroll,null).width)/3;
//console.log(bookwidths);
littlemove(btnL,btnR,bookroll,dot,bookwidths);

let bookroll1=document.querySelector(".hary1 .bookroll");
//console.log(bookroll1);
let btnL1=document.querySelector(".hary1 .btnleft");
//console.log(btnL1);
let btnR1=document.querySelector(".hary1 .btnright");
//console.log(btnR1);
let dot1=document.querySelectorAll(".hary1 .dot li");
//console.log(dot1);
let bookwidths1=parseInt(getComputedStyle(bookroll1,null).width)/3;
//console.log(bookwidths1);
littlemove(btnL1,btnR1,bookroll1,dot1,bookwidths1);

let bookroll2=document.querySelector(".hary2 .bookroll");
//console.log(bookroll1);
let btnL2=document.querySelector(".hary2 .btnleft");
//console.log(btnL1);
let btnR2=document.querySelector(".hary2 .btnright");
//console.log(btnR1);
let dot2=document.querySelectorAll(".hary2 .dot li");
//console.log(dot1);
let bookwidths2=parseInt(getComputedStyle(bookroll2,null).width)/3;
//console.log(bookwidths1);
littlemove(btnL2,btnR2,bookroll2,dot2,bookwidths2);

let bookroll3=document.querySelector(".hary3 .bookroll");
//console.log(bookroll1);
let btnL3=document.querySelector(".hary3 .btnleft");
//console.log(btnL1);
let btnR3=document.querySelector(".hary3 .btnright");
//console.log(btnR1);
let dot3=document.querySelectorAll(".hary3 .dot li");
//console.log(dot1);
let bookwidths3=parseInt(getComputedStyle(bookroll3,null).width)/3;
//console.log(bookwidths1);
littlemove(btnL3,btnR3,bookroll3,dot3,bookwidths3);