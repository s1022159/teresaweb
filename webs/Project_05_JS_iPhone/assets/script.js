function setColor(color) {
  var changepic = document.querySelector('#iphone-image');
  if (color == 'white') {
    changepic.src = "image/iphone11-white-select-2019.png";
  }
  if (color == 'black') {
    changepic.src = "image/iphone11-black-select-2019.png";
  }
  if (color == 'green') {
    changepic.src = "image/iphone11-green-select-2019.png";
  }
  if (color == 'purple') {
    changepic.src = "image/iphone11-purple-select-2019.png";
  }
  if (color == 'red') {
    changepic.src = "image/iphone11-red-select-2019.png";
  }
}

function setPrice(price) {
  // 加NT$的第一種寫法
  // price = 'NT$' + price;
  // 第二種寫法
  // price = `NT$${price}`;
  // var changeprice = document.querySelector('.final-price');
  //第三種寫法
  // changeprice.innerText = `NT$${price}`;

  //第四種寫法
  document.querySelector('.final-price').innerText = `NT$${price}`;


}