const slideContainer = document.querySelector(".slider-container");
const slideLeft = document.querySelector(".left-slider");
const slideRight = document.querySelector(".right-slider");
const upButton = document.querySelector(".up-button");
const downButton = document.querySelector(".down-button");
const sliderLength = slideRight.querySelectorAll("div").length;

let activeSliderIndex = 0;

slideLeft.style.top = `-${(sliderLength - 1) * 100}vh`;

upButton.addEventListener("click", () => changeSlide("up"));
downButton.addEventListener("click", () => changeSlide("down"));

const changeSlide = (direction) => {
  const sliderHeight = slideContainer.clientHeight;
  if (direction === "up") {
    activeSliderIndex++;
    if (activeSliderIndex > sliderLength - 1) {
      activeSliderIndex = 0;
    }
  } else if (direction === "down") {
    activeSliderIndex--;
    if (activeSliderIndex < 0) {
      activeSliderIndex = sliderLength - 1;
    }
  }

  slideRight.style.transform = `translateY(-${
    activeSliderIndex * sliderHeight
  }px)`;
  slideLeft.style.transform = `translateY(${
    activeSliderIndex * sliderHeight
  }px)`;
};
