window.onload=function(){
	search();
	daoji();
	crousel();
}
var search=function(){
	var banner=document.getElementsByClassName("crousel")[0];
	var height=banner.offsetHeight;
	window.onscroll=function(){
		var header=document.getElementsByTagName("header")[0];
		var top=document.documentElement.scrollTop;
		if(top>height){
			header.style.background="rgba(186,20,34,1)";
		}
		else{
			header.style.background="rgba(186,20,34,"+0.8*(top/height)+")";
 
		}
	}
}
var daoji=function(){
	var time=4*60*60;
	var tm=document.getElementsByClassName("time-num");
	console.log(tm);
	setInterval(function(){
		tm[0].innerHTML=Math.floor((time/3600)%60/10);     
		tm[1].innerHTML=Math.floor((time/3600))%60%10; 
		tm[2].innerHTML=Math.floor((time/60)%60/10);     
		tm[3].innerHTML=Math.floor((time/60))%60%10; 
		tm[4].innerHTML=Math.floor((time%60)/10);
		tm[5].innerHTML=(time%60)%10;
		time--;
	},1000);
}

//轮播图滚动
var crousel=function(){
	var index=1;
	var banner=document.getElementsByClassName("banner")[0];
	var addTransition=function(){
		banner.style.transition="all 0.3s";
	}
	var removeTransition=function(){
		banner.style.transition="none";
	}
	var changePosition=function(t){
		banner.style.transform="translateX(-"+16.6666667*t+"%)";
	}
	setInterval(function(){
		addTransition();
		changePosition(index);
		index++;
	},1000);
	banner.addEventListener("transitionend",function(){
		if(index>=5){
			index=0;
			removeTransition();
		    changePosition(index);
		    index++;

		}
		
		
	},false);
	
}
