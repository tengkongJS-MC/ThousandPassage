//返回主页
document.querySelector("header>img").addEventListener("click",function(){
	window.location.href = "./index.html";
})

//挖空算法

document.getElementById("passageCard").innerHTML = "";//初始化输入框避免空挖空

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

function startMemory(){
	text = document.getElementById("passageCard").innerHTML;
	let hollowingTimes = Math.round(text.length * 1.2);
	hollowingOut(hollowingTimes);
}