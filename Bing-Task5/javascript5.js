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
addLoadEvent(changeNumberGroup);

function changeNumberGroup(){

	var leftInput=document.getElementById("leftInput");
	var rightInput=document.getElementById("rightInput");
	var leftOutput=document.getElementById("leftOutput");
	var rightOutput=document.getElementById("rightOutput");
	var sort=document.getElementById("sort");
	
	leftInput.onclick=function(){leftInputClick();}
	rightInput.onclick=function(){rightInputClick();}
	leftOutput.onclick=function(){leftOutputClick();}
	rightOutput.onclick=function(){rightOutputClick();}
	sort.onclick=function(){sortClick();}
}
function checkForm()
{
    var value = document.getElementById("input").value;
    var len = value.length;
	if(len==0)
	{
		alert("表单不能为空");
		return false;
	}
	
    for(var i=0;i<len;i++)
    {
        if(value.charAt(i)>"9"|| value.charAt(i)<"0")
        {
            alert("含有非数字字符");
            return false;
        }
		else if(value>100||value<10)
		{
			alert("数字范围为10-100");
			return false;
		}
    }
    return true;
}

function leftInputClick(){
	var number=document.getElementById("input").value;
	if(checkForm())
	{
		document.getElementById("input").value="";
		var numberGroup=document.getElementById("numberGroup");
		var numberSpan=document.createElement("span");
		numberSpan.setAttribute("class","number");
		numberSpan.style.height=number+"px";
		numberSpan.style.top=100-number+"px";
		numberGroup.insertBefore(numberSpan,numberGroup.firstChild);
	}
}

function rightInputClick(){
	var number=document.getElementById("input").value;
	if(checkForm())
	{
		document.getElementById("input").value="";
		var numberGroup=document.getElementById("numberGroup");
		var numberSpan=document.createElement("span");
		numberSpan.setAttribute("class","number");
		numberSpan.style.height=number+"px";
		numberSpan.style.top=100-number+"px";
		numberGroup.appendChild(numberSpan);
	}
}
	
function leftOutputClick(){
	var numberGroup=document.getElementById("numberGroup");
	var left=numberGroup.firstChild;
	numberGroup.removeChild(left);
}

function rightOutputClick(){
	var numberGroup=document.getElementById("numberGroup");
	var right=numberGroup.lastChild;
	numberGroup.removeChild(right);
	
}

function getData() {
	var numberGroup=document.getElementById("numberGroup");
	var sortGroup=document.getElementById("sortGroup");
	sortGroup.innerHTML = "";
	var childs=numberGroup.childNodes;
	var data=[];
	for(var i=0;i<childs.length;i++)
	{
		data.push(childs[i].offsetHeight);
	}
	return data;

}

function sortAqiData(data) {
	var temp=[];
	for(var i=0;i<data.length-1;i++)
	{
		for(var j=i+1;j<data.length;j++)
		{
			if(data[i]>data[j])
			{
				temp=data[i];
				data[i]=data[j];
				data[j]=temp;
			}
		}
	}
	return data;
}

function render(data) {
	var sortGroup=document.getElementById("sortGroup");
	var heightNumber;
	var sortNumber;
	for(var i=0;i<data.length;i++)
	{
		heightNumber=data[i];
		sortNumber=document.createElement("div");
		sortNumber.setAttribute("class","number");
		sortNumber.style.height=heightNumber+"px";
		sortNumber.style.top=100-heightNumber+"px";
		sortGroup.appendChild(sortNumber);
	}
}

function sortClick() {
	var aqiData = getData();
	aqiData = sortAqiData(aqiData);
	render(aqiData);
}
