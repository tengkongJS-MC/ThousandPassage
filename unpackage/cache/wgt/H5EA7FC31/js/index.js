//header按钮控制
document.getElementById("read").style.fontSize = "2.7vh";
document.getElementById("clacer").style.fontSize = "2.7vh";
document.getElementById("mainPage").style.fontSize = "4vh";
document.getElementById("mainPage").style.color = "rgb(65, 174, 60)";
document.getElementById("mainPage").style.fontWeight = "bold";

function changeHeaderButtonSize(id){
    let headerIds = ["mainPage","read"];
    document.getElementById(id).style.fontSize = "4vh";
    document.getElementById(id).style.color = "rgb(65, 174, 60)";
    document.getElementById(id).style.fontWeight = "bold";
    for(i = 0 ; i < headerIds.length ; i ++){
        if(id != headerIds[i]){
            document.getElementById(headerIds[i]).style.fontSize = "2.7vh";
            document.getElementById(headerIds[i]).style.color = "rgb(152, 176, 150)";
            document.getElementById(headerIds[i]).style.fontWeight = "normal";
        }
    }
}

// 今日诗词
function reloadPoetry(){
    jinrishici.load(function(result) {
        document.getElementById("shici").innerHTML = result.data.content;
      });
}

reloadPoetry();
setInterval(reloadPoetry,300000);

// 打开和关闭侧边栏
let swi = 1;
document.getElementById("sideBar").style.left = "-50%";
// document.getElementById("sideBar").style.display = "none";

function openSideBar(){
	if(swi == 1){
		document.getElementById("sideBar").style.left = "0px";
		document.getElementById("closeSideBarIcon").style.display = "block";
		document.getElementById("openSideBarIcon").style.display = "none";
		// document.getElementById("sideBar").style.display = "flex";
		swi = 0;
	}else{
		document.getElementById("sideBar").style.left = "-50%";
		document.getElementById("closeSideBarIcon").style.display = "none";
		document.getElementById("openSideBarIcon").style.display = "block";
		// document.getElementById("sideBar").style.display = "none";
		swi = 1;
	}
}

//发现页面

// 传入诗词格式化
function formattingPoetry(inputs){
    let text = inputs;
	console.log(text);
    let textResult = text;
    arrayPassage = new Array();
    for(i = 0 ; i < textResult.length ; i ++){
        if(textResult[i].search(/[，。；！：？]+/g) != -1){
            arrayPassage.push( textResult.substr( 0 , i ) + "<br>");
            console.log(textResult.substr( 0 , i ));
            textResult =  textResult.replace(textResult.substr( 0 , i ),"");
            i = 0;
        }
    }
    var arrayPassageDelResult = "";
    for( n = 0 ; n < arrayPassage.length ; n ++ ){
        var temp = arrayPassage[n];
        var arrayPassageDelResult  = arrayPassageDelResult += temp.replace( /[。；！？]+/g , "" );
    }
    return arrayPassageDelResult;
    // return arrayPassage;
}


function getPoetry(){
	jinrishici.load(function(result) {
		//清空输入
		document.getElementById("readMainPoetry").innerHTML = "";
	    document.getElementById("readTitle").innerHTML = result.data.origin.title;
		document.getElementById("writerName").innerHTML = result.data.origin.dynasty + " " + result.data.origin.author;
		var tempText = result.data.origin.content;
		// document.getElementById("readMainPoetry").innerHTML = formattingPoetry(tempText);
		
		for(i = 0; i < tempText.length ; i ++){
			let docuReadMain = document.getElementById("readMainPoetry");
			if (i == 0){
				docuReadMain.innerHTML = docuReadMain.innerHTML + tempText[i];
			}else{
				docuReadMain.innerHTML = docuReadMain.innerHTML + "<br>" + tempText[i];
			}
			
		}
		
	    console.log(result)
		return result;
	  });
}

//给换一首按钮添加东西

document.querySelector("#readButt").addEventListener("click",function(){
	getPoetry();
	document.querySelector("#readButt").style.pointerEvents = "none";
	document.querySelector("#readButt").style.background = "rgb(172, 173, 171)";
	let timeNum = 10;
	
	//按钮读秒
	timeInButt = setInterval(function(){
		timeNum -= 1;
		document.querySelector("#readButt").innerHTML = timeNum + "s";
	},1000)
	
	//按钮回复可点击状态
	setTimeout(function(){
		document.querySelector("#readButt").style.pointerEvents = "auto";
		document.querySelector("#readButt").style.background = "rgb(65, 174, 60)";
		document.querySelector("#readButt").innerHTML = "换一首";
		clearInterval(timeInButt);
	},10000)
})

//启动的时候关掉发现
document.getElementById("readPage").style.display = "none";

//给发现添加监听器
document.getElementById("read").addEventListener("click",function(){
	getPoetry();
	document.getElementById("readPage").style.display = "flex";
})

//给首页添加监听器
document.getElementById("mainPage").addEventListener("click",function(){
	document.getElementById("readPage").style.display = "none";
})