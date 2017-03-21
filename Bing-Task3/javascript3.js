function addLoadEvent(func){
	var oldOnload=window.onload;
	if(typeof window.onload!="function"){
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
addLoadEvent(init);
/**
 * getData方法
 * 读取id为source的列表，获取其中城市名字及城市对应的空气质量
 * 返回一个数组，格式见函数中示例
 */
function getData() {
  /*
  coding here
  */

  /*
  data = [
    ["北京", 90],
    ["北京", 90]
    ……
  ]
  */
	var sourceList=document.getElementByTagName("li");
	var data=[];
	alert(sourceList.length);
	for(var i=0;i<sourceList.length;i++)
	{
		alert(sourceList[i].firstChild.nodeValue);
		(function(){
			var dataElement=[];
			dataElement.append(sourceList[i].firstChild.nodeValue);
			alert(sourceList[i].firstChild.nodeValue);
			dataElement.append(sourceList[i].lastChild.nodeValue);
			alert(sourceList[i].lastChild.nodeValue);
			data.append(dataElement);
		})();
	}
	
	return data;

}

/**
 * sortAqiData
 * 按空气质量对data进行从小到大的排序
 * 返回一个排序后的数组
 */
function sortAqiData(data) {

}

/**
 * render
 * 将排好序的城市及空气质量指数，输出显示到id位resort的列表中
 * 格式见ul中的注释的部分
 */
function render(data) {

}

function btnHandle() {
	var aqiData = getData();
	aqiData = sortAqiData(aqiData);
	render(aqiData);
}

function init() {

	// 在这下面给sort-btn绑定一个点击事件，点击时触发btnHandle函数
	var btn=document.getElementById("sort-btn");
	btn.onclick=function(){
		btnHandle();
	}

}

