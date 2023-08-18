document.getElementById("pBox").innerHTML = "当前已经是最新版本了";


function addUpdateButton(){
	let varButton = document.createElement("button");
	varButton.id = "updataButton";
	varButton.innerHTML = "点我更新";
	varButton.setAttribute("onclick","window.location.href = 'https://'")
	document.getElementById("bottonBox").appendChild(varButton);
}