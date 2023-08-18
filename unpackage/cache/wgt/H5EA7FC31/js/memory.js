// 挖空算法

text = sessionStorage.getItem('text');
textID = sessionStorage.getItem('textID');

function hollowingOut(times){
    let textResult = text;
    for(i = 0 ; i < times ; i ++){
        let tempNumber = Math.floor(Math.random()*textResult.length) + 1;
        if (textResult.charAt(tempNumber).search(/[_ ，。；：“”！？——《》]+/g) == -1 ){
			textResult = textResult.replace(textResult.charAt(tempNumber),"__" + " ");
        }
    }
    document.getElementById("passageCard").innerHTML = textResult;
}


// 文章显示初始化
function startPassageShow(){
	hollowingOut(0);
	scheIds = ["sche1","sche2","sche3","sche4"];
	document.getElementById(scheIds[0]).style.background = "rgb(242, 255, 121)";
	outTimes = 0;
	
	document.querySelector( " header > span " ).innerText = "《" + passages[textID].title + "》" + "正在背诵中"
}

startPassageShow()

//我已完成点击时
function IFinished(){
	let difficuitiesNum = [0,0.25,0.55,1.5];
	hollowingOut(Math.round(difficuitiesNum[outTimes + 1] * text.length));
	for( i = 0 ; i < scheIds.length ; i ++ ){
		if( scheIds[i] != scheIds[outTimes]){
			if(outTimes > 2){
				startModal("done");
			}
			document.getElementById(scheIds[outTimes + 1]).style.background = "rgb(242, 255, 121)";
		}else{
			if(outTimes > 2){
				startModal("done");
			}
			document.getElementById(scheIds[outTimes]).style.background = "rgb(248, 250, 247)";
		}
	}
	outTimes ++;
}

//上一阶段点击时
function noFinished(){
	let difficuitiesNum = [0,0.25,0.55,1.5]
	hollowingOut(Math.round(difficuitiesNum[outTimes - 1] * text.length));
	for( i = scheIds.length ; i > 0 ; i -- ){
		if( scheIds[i] == scheIds[outTimes]){
			if(outTimes == 0){
				startModal("nodone");
				outTimes == 1;
			}
			document.getElementById(scheIds[outTimes - 1]).style.background = "rgb(242, 255, 121)";
		}else{
			if(outTimes == 0){
				startModal("nodone");
				outTimes == 1;
			}
			document.getElementById(scheIds[outTimes]).style.background = "rgb(248, 250, 247)";
		}
	}
	outTimes --;
}

document.getElementById("modal").style.display = "none";
function startModal(why){
	document.getElementById("modal").style.display = "flex";
	if( why == "done" ){
		document.getElementById("modalTop").innerText = "您已背诵完毕";
	}else if( why == "nodone" ){
		document.getElementById("modalTop").innerText = "不能再后退了";
	}
}

function closeModal(){
	document.getElementById("modal").style.display = "none";
}