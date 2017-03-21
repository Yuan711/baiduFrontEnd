function addLoadEvent(func){
  var oldOnload=window.onload;
  if(typeof window.onload!='function'){
    window.onload=func;
  }
  else{
    window.onload=function(){
      oldOnload();
      func();
    };
  }
}

addLoadEvent(airQuality);

function airQuality(){
	var airButton=document.getElementById("button");
	airButton.onclick=function(){
    displayQuality();
	}
}

function displayQuality(){
	var aqiInput=document.getElementById("aqi-input").value;
	document.getElementById("aqi-input").value="";
	var aqiDisplay=document.getElementById("aqi-display");
	aqiDisplay.innerHTML=aqiInput;
}
	