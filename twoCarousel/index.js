/*
* @Author: Administrator
* @Date:   2017-10-17 20:49:13
* @Last Modified by:   Administrator
* @Last Modified time: 2017-10-18 07:44:43
*/
window.onload=function(){
	var carousel=document.getElementById("carousel");
	var scroll=carousel.children[0];
	var ul=scroll.children[0];
	var ol=scroll.children[1];
	var olis=ol.children;
	var arr=document.getElementById("arr");
	var arrLeft=arr.querySelector(".left");
	var arrRight=arr.querySelector(".right");
	var carouselWidth=scroll.offsetWidth;

	for(var i=0;i<olis.length;i++){
		olis[i].n=i;
		olis[i].onmouseover=function(){
			for(var j=0;j<olis.length;j++){
				olis[j].className="";
			}
			this.className="current";
			animate(ul,-this.n*carouselWidth);
		}
	}

	scroll.onmouseover=function(){
		arr.style.display="block";
		ol.style.display="block";
	}
	scroll.onmouseout=function(){
		arr.style.display="none";
		ol.style.display="none";

	}

	//以下两种都可以 
	arrLeft.onclick=function(){
		animate(ul,ul.offsetLeft+500);阿萨
	}
	arrRight.onclick=function(){
		animate(ul,-ul.offsetLeft+500);
	}

	// var index=0;
	// arrRight.onclick=function(){
	// 	index++;
	// 	if(index>olis.length-1){
	// 		index=olis.length-1;
	// 		alert("最后一张");
	// 	}
	// 	animate(ul,-index*carouselWidth);
	// }
	// arrLeft.onclick=function(){
	// 	index--;
	// 	if(index<0){
	// 		index=0;
	// 		alert("第一张");
	// 	}
	// 	animate(ul,-index*carouselWidth);
	// }
	

	function animate(ele,target){
		clearInterval(ele.timer);
		var speed=target>ele.offsetLeft?15:-15;
		ele.timer=setInterval(function(){
			// 一下两句放错位子会出错
			var distance=target-ele.offsetLeft;
			ele.style.left=ele.offsetLeft+speed+"px";
			if(Math.abs(distance)<10){
				ele.style.left=target+"px";
				clearInterval(ele.timer);
			}
		}, 30);
	}
}