// Modal
var galleryImage1 = document.getElementById('gallery-image1'),
    galleryImage2 = document.getElementById('gallery-image2'),
    galleryImage3 = document.getElementById('gallery-image3');

function openModal(id) {
    document.getElementById('myModal').style.display = "block";
    createGallery(id)
}

function createGallery(galleryId) {
    var el = document.getElementById('modal-container'),
        elSmall = document.getElementById('image-small'),
        gallery1 = ['slide1-image1','slide1-image2'],
        gallery1Small = ['slide1-small-image1','slide1-small-image2'],
        gallery1Caption =['caption1', 'caption2'],
        gallery2 = ['slide2-image1','slide2-image2'],
        gallery2Small = ['slide2-small-image1','slide2-small-image2'],
        gallery2Caption =['caption1', 'caption2'],
        gallery3 = ['slide3-image1','slide3-image2','slide3-image3'],
        gallery3Small = ['slide3-small-image1','slide3-small-image2','slide3-small-image3'],
        gallery3Caption =['caption1', 'caption2','caption3'],
        data ='',
        dataSmall='',
        imageFullPath='../../assets/image/taekwondo/';

    if(galleryId=='gallery-image1') {
        var totalCount=gallery1.length;

        for (var i = 0; i < totalCount; i++) {
            var imagePath = gallery1[i];
            var currentPage = i + 1;

            data += '<div class="mySlides">';
            data += '<div class="numbertext">' + currentPage + '/' + totalCount +'</div>';
            data += '<img src=' + imageFullPath + imagePath+'.png' +' >';
            data += '</div>';
        }

        for (var i = 0; i < gallery1Small.length; i++) {
            var imagePath = gallery1Small[i];
            var imageCaption = gallery1Caption[i];
            var currenIndex = i+1;

            dataSmall += '<div class="column">';
            dataSmall += '<img class="demo cursor" src=' + imageFullPath + imagePath+'.png' + ' onclick="currentSlide('+ currenIndex + ')" alt=' + imageCaption +'>';
            dataSmall += '</div>';
        }
    } else  if(galleryId=='gallery-image2') {
        var totalCount=gallery2.length;

        for (var i = 0; i < totalCount; i++) {
            var imagePath = gallery2[i];
            var currentPage = i + 1;

            data += '<div class="mySlides">';
            data += '<div class="numbertext">' + currentPage + '/' + totalCount +'</div>';
            data += '<img src=' + imageFullPath + imagePath+'.png' +' >';
            data += '</div>';
        }

        for (var i = 0; i < gallery2Small.length; i++) {
            var imagePath = gallery2Small[i];
            var imageCaption = gallery2Caption[i];
            var currenIndex = i+1;

            dataSmall += '<div class="column">';
            dataSmall += '<img class="demo cursor" src=' + imageFullPath + imagePath+'.png' + ' onclick="currentSlide('+ currenIndex + ')" alt=' + imageCaption +'>';
            dataSmall += '</div>';
        }
    }else  if(galleryId=='gallery-image3') {
        var totalCount=gallery3.length;

        for (var i = 0; i < totalCount; i++) {
            var imagePath = gallery3[i];
            var currentPage = i + 1;

            data += '<div class="mySlides">';
            data += '<div class="numbertext">' + currentPage + '/' + totalCount +'</div>';
            data += '<img src=' + imageFullPath + imagePath+'.png' +' >';
            data += '</div>';
        }

        for (var i = 0; i < gallery3Small.length; i++) {
            var imagePath = gallery3Small[i];
            var imageCaption = gallery3Caption[i];
            var currenIndex = i+1;

            dataSmall += '<div class="column">';
            dataSmall += '<img class="demo cursor" src=' + imageFullPath + imagePath+'.png' + ' onclick="currentSlide('+ currenIndex + ')" alt=' + imageCaption +'>';
            dataSmall += '</div>';
        }
    }

    el.innerHTML = data;
    elSmall.innerHTML = dataSmall;

    currentSlide(1);
}

var slideIndex = 1;
showSlides(slideIndex);

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    captionText.innerHTML = dots[slideIndex - 1].alt;
}


function closeModal() {
    document.getElementById('myModal').style.display = "none";
}

