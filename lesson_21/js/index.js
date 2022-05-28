//find elements
var showPrevBtn = document.getElementById('show-prev-btn');
var showNextBtn = document.getElementById('show-next-btn');
var slideImage = document.getElementById('slide-img');

//subscribe to events
showPrevBtn.addEventListener('click', onShowPrevBtnClick);
showNextBtn.addEventListener('click', onShowNextBtnClick);

//create images array
var imagesUrls = [];
imagesUrls.push('https://klike.net/uploads/posts/2019-05/1559021877_4.jpg');
imagesUrls.push('https://klike.net/uploads/posts/2019-05/1559021799_1.jpg');
imagesUrls.push('https://klike.net/uploads/posts/2019-05/medium/1559021804_2.jpg');
imagesUrls.push('https://klike.net/uploads/posts/2019-05/1559021828_3.jpg');
imagesUrls.push('https://klike.net/uploads/posts/2019-05/1559021877_4.jpg');

var currentImageIndex = 0;

slideImage.src = imagesUrls[currentImageIndex];

//functions definitions
function onShowPrevBtnClick() {
    currentImageIndex--;
    slideImage.src = imagesUrls[currentImageIndex];
}

function onShowNextBtnClick() {
    currentImageIndex++;
    slideImage.src = imagesUrls[currentImageIndex];
}
