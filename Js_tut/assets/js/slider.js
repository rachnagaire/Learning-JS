// function imgSlider(imgUrl) {

//     var imgPlaceholder = document.getElementById('image-placeholder');
//     imgPlaceholder.querySelector('img').src = imgUrl;
// }
// document.getElementById('img-0').addEventListener('click', function (e) {
//     var imgUrl = e.target.src;
//     imgSlider(imgUrl);
// });
// document.getElementById('img-1').addEventListener('click', function (e) {
//     var imgUrl = e.target.src;
//     imgSlider(imgUrl);
// });

// document.getElementById('img-2').addEventListener('click', function (e) {
//     var imgUrl = e.target.src;
//     imgSlider(imgUrl);
// });
// document.getElementById('img-3').addEventListener('click', function (e) {
//     var imgUrl = e.target.src;
//     imgSlider(imgUrl);
// });

// function showSlide(n) {
//     var image = img[n];
//     var imagePlaceholder = document.getElementById('image-placeholder');
//     imgPlaceholder.querySelector('img').src = ;
// }

var index = 0;

function showModal(n) {
    var length = document.getElementsByName('image-thumbnail').length;
    if (n >= length) {
        index = 0;
    }
    if (n < 0) {
        index = length - 1;
    }
    var element = document.getElementsByName('image-thumbnail')[index];
    var elementSrc = element.querySelector('img').src;
    document.getElementById('image-placeholder').querySelector('img').src = elementSrc;
    document.getElementById('modal-imageSlider').style.display = "block";
    document.getElementById('img-thumbnail').style.display = "none";
    document.getElementById('modal-overlay').hidden = false

}
function currentSlide(n) {

    showModal(index = n);
}
function plusSlide(n) {
    showModal(index += n);

}

document.getElementsByName('image-thumbnail')[0].addEventListener('click', function (e) {

    currentSlide(0);

})
document.getElementsByName('image-thumbnail')[1].addEventListener('click', function (e) {
    currentSlide(1);

})
document.getElementsByName('image-thumbnail')[2].addEventListener('click', function (e) {
    currentSlide(2);

})
document.getElementsByName('image-thumbnail')[3].addEventListener('click', function (e) {
    currentSlide(3);

})


document.getElementById('next').addEventListener('click', function () {
    plusSlide(1);


})
document.getElementById('prev').addEventListener('click', function () {
    plusSlide(-1);


})

document.getElementsByClassName('slider__image-thumbnail')[0].addEventListener('click', function () {
    currentSlide(0)
});
document.getElementsByClassName('slider__image-thumbnail')[1].addEventListener('click', function () {
    currentSlide(1)
});
document.getElementsByClassName('slider__image-thumbnail')[2].addEventListener('click', function () {
    currentSlide(2)
});
document.getElementsByClassName('slider__image-thumbnail')[3].addEventListener('click', function () {
    currentSlide(3)
});

// function showSlide(n) {

// }