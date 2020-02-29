const productionBlock = document.querySelector('.production'),
  sectionSlider = document.querySelector('.section-slider'),
  imageItems = document.querySelectorAll('.hover-layout'),
  sliderItems = document.querySelectorAll('.section-slider-slide'),
  closeBtn = document.querySelector('.close');

productionBlock.addEventListener('click', (e) => {
  e.preventDefault();
  for (let i = 0; i < imageItems.length; i++) {
    console.log(e.target)
    if ((e.target.tagName === "A" || e.target.tagName === "IMG") && e.target == imageItems[i]) {
      sectionSlider.classList.remove('hide');
      sliderItems[i].style.display = "flex";
    }

    closeBtn.addEventListener('click', (e) => {
      sectionSlider.classList.add('hide');
      sliderItems[i].style.display = "none";
    })
  }
});