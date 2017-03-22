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
	
	leftInput.onclick=function(){leftInputClick();}
	rightInput.onclick=function(){rightInputClick();}
	leftOutput.onclick=function(){leftOutputClick();}
	rightOutput.onclick=function(){rightOutputClick();}
}
function checkForm()
{
    var value = document.getElementById("input").value;
    var len = value.length;
	//alert(len);
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
		numberSpan.innerHTML=number;
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
		numberSpan.innerHTML=number;
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

