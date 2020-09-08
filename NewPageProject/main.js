const closeBtn = document.querySelector('.close-btn i');
const videoMain = document.querySelector('.video-div video');
const linkVideoMain = document.querySelector('.video-main a');

window.onload = function () {
    videoMain.pause()
}

const playMainVideo = (e) => {
    e.preventDefault();
    console.log('działa');
    videoMain.style.display = 'block';
    videoMain.load()
    closeBtn.style.display = 'block';


    const closeVideo = () => {
        // videoMain.style.transition = '.9s linear'
        // videoMain.style.opacity = '0%'
        videoMain.style.display = 'none';
        videoMain.style.transition = '.9s linear'
        videoMain.pause()
        closeBtn.style.display = 'none'


    }

    closeBtn.addEventListener('click', closeVideo)
}

linkVideoMain.addEventListener('click', playMainVideo)


function videoUrl(movie) {
    document.getElementById('slider').src = movie;
}

//jQuery smooth scroll

$('.nav-bar a').on('click', function (e) {
    if (this.hash !== '') {
        e.preventDefault();

        const hash = this.hash;

        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 800);
    }
})



$(document).on('scroll', function () {

    const windowHeight = $(window).height()
    const scrollValue = $(this).scrollTop();



    const $boxOne = $('.boxOne');
    const boxOneFromTop = $boxOne.offset().top
    const boxOneHeight = $boxOne.outerHeight()

    const $boxTwo = $('.boxTwo');
    const boxTwoFromTop = $boxTwo.offset().top
    const boxTwoHeight = $boxTwo.outerHeight()

    const $boxThree = $('.boxThree');
    const boxThreeFromTop = $boxThree.offset().top
    const boxThreeHeight = $boxThree.outerHeight()

    const $boxFour = $('.boxFour');
    const boxFourFromTop = $boxFour.offset().top
    const boxFourHeight = $boxFour.outerHeight()

    const $boxFive = $('.boxFive');
    const boxFiveFromTop = $boxFive.offset().top
    const boxFiveHeight = $boxFive.outerHeight()

    const $boxSix = $('.boxSix');
    const boxSixFromTop = $boxSix.offset().top
    const boxSixHeight = $boxSix.outerHeight()

    const $boxSeven = $('.boxSeven');
    const boxSevenFromTop = $boxSeven.offset().top
    const boxSevenHeight = $boxSeven.outerHeight()

    const windowSize = window.innerWidth
    console.log(windowSize)


    if (scrollValue > boxOneFromTop + boxOneHeight - windowHeight) {
        $boxOne.addClass('active')
    }

    if (scrollValue > boxTwoFromTop + boxTwoHeight - windowHeight) {
        $boxTwo.addClass('active')
    }

    if (scrollValue > boxThreeFromTop + boxThreeHeight - windowHeight) {
        $boxThree.addClass('active')
    }

    if (scrollValue > boxFourFromTop + boxFourHeight - windowHeight) {
        $boxFour.addClass('active')
    }

    if (scrollValue > boxFiveFromTop + boxFiveHeight - windowHeight) {
        $boxFive.addClass('active')
    }
    if (scrollValue > boxSixFromTop + boxSixHeight - windowHeight) {
        $boxSix.addClass('active')
    }

    if (scrollValue > boxSevenFromTop + boxSevenHeight - windowHeight) {
        $boxSeven.addClass('active')
    }



    //photo box xlass remover
    if (scrollValue < 100) {
        $boxOne.removeClass('active');
        $boxTwo.removeClass('active')
        $boxThree.removeClass('active')
        $boxFour.removeClass('active')
        $boxFive.removeClass('active')
        $boxSix.removeClass('active')
        $boxSeven.removeClass('active')

    }

    // if (scrollValue < 100) {
    //     $('team').removeClass('active');
    // }
})


//photo slider function
// $('.slide').hiSlide();

// const leftBox = document.querySelectorAll('.photoBoxLeft');
// const rightBox = document.querySelectorAll('.photoBoxRight')

const mySwiper = new Swiper('.swiper-container', {
    autoplay: true,
    // cubeEffect: {
    //     shadowOffset: 200,
    //     shadowScale: 1.1,
    // },
    effect: 'cube',
    loop: true,
    // pagination: {
    //     el: '.swiper-pagination',
    //     type: 'bullets',
    //     clickable: true,
    //     dynamicBullets: true,
    //     dynamicMainBullets: 3,
    //     progressbarOpposite: true,
    // },
    preloadImages: false,
    lazy: true,
    // scrollbar: {
    //     el: '.swiper-scrollbar',
    //     draggable: true,
    // },


});

new Swiper(mySwiper)


const formBtn = document.querySelector('.contact-form button')


const sendForm = (e) => {
    e.preventDefault()
}

formBtn.addEventListener('click', sendForm)