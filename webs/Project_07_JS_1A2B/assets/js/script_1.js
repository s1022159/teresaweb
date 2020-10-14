function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
// console.log(getRandom(1, 100));

// for (let i = 0; i < 100; i++) {
//     process.stdout.write(getRandom(0, 9) + ', ');
// }
console.log(document.querySelector(".btn-start"))
document.querySelector(".btn-start").addEventListener('click', gameStart); //我將requestJSON交給click處理（指派這個function）（委派

// window.onload()

function gameStart() {
    var array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    console.log('hello world');

    var rndIndex;
    var temp;
    for (let i = 0; i < array.length; i++) {
        rndIndex = getRandom(0, 9);
        //array[i]與其他人隨機交換
        temp = array[i]; //temp是暫存的意思
        array[i] = array[rndIndex];
        array[rndIndex] = temp;
    }
    array.length = 4;
    // return array;
    document.querySelector('.guessAns').innerText = array;
}