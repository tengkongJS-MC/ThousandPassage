//得到文章索引值
function getText(id){
	passageNum = Number(id);
	text = passages[passageNum].mainText;
	sessionStorage.setItem('text',text);
	sessionStorage.setItem('textID',passageNum);
	console.log(text);
}

//添加诗词框进去
//num = i ++ from 0
function makeCard(num){
	let varPoetryNumber = document.createElement("div");
	varPoetryNumber.className = "poetryNumber";
	varPoetryNumber.innerHTML = num + 1;
	
	let varPoetryName = document.createElement("div");
	varPoetryName.className = "poetryName";
	varPoetryName.innerHTML = passages[num].title;
	
	let varCardLeft = document.createElement("div");
	varCardLeft.id = "cardLeft";
	varCardLeft.appendChild(varPoetryNumber);
	varCardLeft.appendChild(varPoetryName);
	
	let varStartRead = document.createElement("button");
	varStartRead.className = "startRead";
	varStartRead.innerHTML = "开始";
	varStartRead.id = num;
	varStartRead. setAttribute("onclick","getText(id),window.location.href = 'memory.html'")
	
	let varPoetryCard = document.createElement("div");
	varPoetryCard.className = "poetryCard";
	varPoetryCard.appendChild(varCardLeft);
	varPoetryCard.appendChild(varStartRead);
	
	console.log(varPoetryCard);
	let varMain = document.querySelector("main");
	varMain.appendChild(varPoetryCard);
}

// 循环添加诗词card
function addCards(){
	for( i = 0 ; i < passages.length ; i ++){
		makeCard(i);
	}
}

//返回
document.getElementById("backIcon").addEventListener('click',f => {
	window.location.href = "./index.html";
})


