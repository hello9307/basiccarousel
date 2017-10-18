/*
* @Author: Administrator
* @Date:   2017-10-17 20:01:31
* @Last Modified by:   Administrator
* @Last Modified time: 2017-10-17 20:38:05
*/
window.onload=function(){
	var tab=document.getElementById("tab");
	var scroll=tab.children[0];
	var ul=scroll.children[0];
	var ol=scroll.children[1];
	var olis=ol.children;
	var tabWidth=scroll.offsetWidth;

	for(var i=0;i<olis.length;i++){
		olis[i].index=i;
		olis[i].onmouseover=function(){
			for(var j=0;j<olis.length;j++){
				olis[j].className="";
			}
			this.className="current";
			animate(ul,-this.index*tabWidth);
		}
	}

	function animate(ele,target){
		clearInterval(ele.timer);
		var speed=target>ele.offsetLeft?15:-15;
		ele.timer=setInterval(function(){
			ele.style.left=ele.offsetLeft+speed+"px";
			var distance=target-ele.offsetLeft;
			if(Math.abs(distance)<10){
				ele.style.left=target+"px";
				clearInterval(ele.timer);
			}
		},30)
	}
}