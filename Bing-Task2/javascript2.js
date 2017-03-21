function addLoadEvent(func){
	var oldOnload=window.onload;
	if(typeof window.onload!='function'){
		window.onload=func;
	}
	else
	{
		window.onload=function(){
			oldOnload;
			func;
		}
	}
}


addLoadEvent(addList);
var aqiData = [
  ["北京", 90],
  ["上海", 50],
  ["福州", 10],
  ["广州", 50],
  ["成都", 90],
  ["西安", 100]
];

function addList() {

  /*
  在注释下方编写代码
  遍历读取aqiData中各个城市的数据
  将空气质量指数大于60的城市显示到aqi-list的列表中
  */
	var list=document.getElementById("aqi-list");
	for(var i=0;i<aqiData.length;i++)
	{
		if(aqiData[i][1]>60)
		{
			var city=aqiData[i][0];
			var txt=document.createTextNode(city);
			var listElement=document.createElement("li");
			listElement.appendChild(txt);
			list.appendChild(listElement);
		}
	}
}
