let sidebars = document.getElementsByClassName("sidebar");
for( i = 0 ; i < sidebars.length ; i ++ ){
	sidebars[i].style.left = "-100%";
}

// 打开侧边栏
function openSidebar(id){
	document.getElementById(id).style.left = "0px";
}

function closeSidebar(id){
	document.getElementById(id).style.left = "-100%";
}

//给选择文章里填充东西
function addCardInChoose(){
	
	for( i = 0 ; i < passages.length ; i ++){
		let varcard = document.createElement("div");
		varcard.className = "passageName";
		varcard.id = i;
		varcard.innerHTML = passages[i].title;
		varcard.setAttribute("onclick","makeArrayPassage(id),closeAllSidebar()");
		document.getElementById("CPCMain").append(varcard);
	}
	
}
addCardInChoose();

//上下句算法
arrayPassage = 0;//意外险
function makeArrayPassage(id){
    let text = passages[id].mainText;
    let textResult = text;
    arrayPassage = new Array();
    for(i = 0 ; i < textResult.length ; i ++){
        if(textResult[i].search(/[，。；！：？]+/g) != -1){
            arrayPassage.push( textResult.substr( 0 , i ) );
            console.log(textResult.substr( 0 , i ));
            textResult =  textResult.replace(textResult.substr( 0 , i ),"");
            i = 0;
        }
    }
    console.log(arrayPassage);
}

//意外事故保险函数(
function havePassageOrNot(){
	if( arrayPassage == 0 ){
		openSidebar('settingExerciseSidebar');
	}else{
		halfOfSentence();
	}
}

function halfOfSentence(){
    let tempNumber1 = Math.floor(Math.random()*arrayPassage.length) + 1;
    let tempNumber2 =  Math.round(Math.random());
    let result;
    let firstSymbol = arrayPassage[tempNumber1][0].search(/[。；！？]+/g);
    let SecondSymbol = arrayPassage[tempNumber1 + 1][0].search(/[。；！？]+/g);
    if( tempNumber2 == 0 && firstSymbol == -1){
        result = "_____________" + arrayPassage[tempNumber1];
    }else if(( tempNumber2 == 1 && SecondSymbol == -1)){
        result = arrayPassage[tempNumber1].replace(arrayPassage[tempNumber1][0],"") + "，_____________";
    }else{
        halfOfSentence()
    }
	if(result == undefined){
		halfOfSentence();
	}else{
		document.getElementById("mainText").innerHTML = result;
	}
}

document.getElementById("mainText").addEventListener("click",function(){
	havePassageOrNot();
})

//点完选择文章之后
function closeAllSidebar(){
	let sidebars = document.getElementsByClassName("sidebar");
	for( i = 0 ; i < sidebars.length ; i ++ ){
		sidebars[i].style.left = "-100%";
	}
}

//输入文章
//完全可以用一个if来判断，但是我非常的懒，于是就这样了awa

function makeOwnArrayPassage(texts){
    let text = texts;
    let textResult = text;
    arrayPassage = new Array();
    for(i = 0 ; i < textResult.length ; i ++){
        if(textResult[i].search(/[，。；！：？]+/g) != -1){
            arrayPassage.push( textResult.substr( 0 , i ) );
            console.log(textResult.substr( 0 , i ));
            textResult =  textResult.replace(textResult.substr( 0 , i ),"");
            i = 0;
        }
    }
    console.log(arrayPassage);
}

function inputPassages(){
	let tempPassage = document.getElementById("IPCMain").innerHTML;
	makeOwnArrayPassage(tempPassage);
}
