'use strict'

// 1 виконано так щоб можна було взаємодіяти з через HTML сторінку
// _______________________________________________________________
function getRandomInt() {
  return Math.floor(Math.random() * 256);
}

// В HTML клікать по кнопці
let rgbColor = () => {
	let color = `rgb(${getRandomInt()}, ${getRandomInt()}, ${getRandomInt()})`;

	document.getElementById("color").style.backgroundColor = color;
	document.getElementById("txt").innerHTML = color;
}
// ____________________________________________________________

// 1.00002 те як в дз оговорено, так і виконано.
// function getRandomInt() {
// 	  return Math.floor(Math.random() * 256);
// 	}
	
// 	// В HTML клікать по кнопці
// 	let rgbColor = () => {
// 		console.log(`style="background: rgb(${getRandomInt()}, ${getRandomInt()}, ${getRandomInt()})"`);
// 	}

// 2

// function getRandomInt() {
//   return Math.floor(Math.random() * 6;
// }

// function getUTF() {
// 	let getEmoji = getRandomInt();

// switch(getEmoji){
// 	case 0:{
// 		console.log('🤷‍♂️');
// 		break;
// 	}
// 	case 1:{
// 		console.log('😃');
// 		break;
// 	}
// 	case 2:{
// 		console.log('🙌');
// 		break;
// 	}
// 	case 3:{
// 		console.log('😊');
// 		break;
// 	}
// 	case 4:{
// 		console.log('👍');
// 		break;
// 	}
// 	case 5:{
// 		console.log('✌');
// 		break;
// 	}
// 	default:{
// 		console.log('🤦‍♀️');
// 		break;
// 	}
// }
// }

// getUTF();


// 3
// let result = 1;
// function pow(num, mult) {
// 	if (mult === 1){
// 	 return num;
// 	} else{
// 		return num * pow(num, mult - 1);
// 	}

// }

// console.log(pow(2, 4));

