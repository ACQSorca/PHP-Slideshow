function main() {
    // BEGIN slideshow
    var slideshow = document.getElementById("slideshow"),
        carousel = document.getElementById("carousel"),
        slides = document.getElementsByClassName("slide"),
        leftArrow = document.getElementById("left-arrow"),
        rightArrow = document.getElementById("right-arrow"),
        numberOfSlides = slides.length - 1,
        slideWidth = slideshow.offsetWidth,
        currentSlide = 0,
        slideIcons = document.getElementsByClassName("slide-icon"),
        selectedIconImage = "url(assets/img/slideshow-icons/slide-icon_selected.png)",
        unselectedIconImage = "url(assets/img/slideshow-icons/slide-icon_unselected.png)",
        shift = 0,
        i = 0;
    //slideIcons[currentSlide].style.backgroundImage = selectedIconImage;

    // Puts shift into slideshow style
    // Puts value of shift into the style of the carousel
    function shifter(shiftSize) {
        carousel.style.left = String(shiftSize) + "px";
    }

    // Use to shift to a specific slide
    function shiftToSlide(desiredSlide) {
        currentSlide = desiredSlide;
        shift = -(slideWidth * (desiredSlide));
        slideIcons[desiredSlide].style.backgroundImage = selectedIconImage;
        shifter(shift);
        resetTimer();
    }

    function resetIcon(currentSl) {
        slideIcons[currentSl].style.backgroundImage = unselectedIconImage;
    }

    function leftShift() {
        resetIcon(currentSlide);
        currentSlide += 1;
        if (currentSlide > numberOfSlides) {
            shiftToSlide(0);
        } else {
            shiftToSlide(currentSlide);
        }
    }

    function rightShift() {
        resetIcon(currentSlide);
        currentSlide -= 1;
        if (currentSlide < 0) {
            shiftToSlide(numberOfSlides);
        } else {
            shiftToSlide(currentSlide);
        }
    }

    var timerId = window.setInterval(leftShift, 5000);

    function resetTimer() {
        clearInterval(timerId);
        timerId = window.setInterval(leftShift, 5000);
    }

    function setIcon(wantedSlide) {
        slideIcons[wantedSlide].addEventListener("click", function () {
            resetIcon(currentSlide);
            shiftToSlide(wantedSlide);
            this.style.backgroundImage = selectedIconImage;
        });
    }

    while (i <= numberOfSlides) {
        setIcon(i);
        i += 1;
    }

    slideIcons[0].style.backgroundImage = selectedIconImage;

    rightArrow.addEventListener("click", leftShift);

    leftArrow.addEventListener("click", rightShift);
}

main();
