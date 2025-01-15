// Swiper JavaScript Code
let swiperCards = new Swiper(".cards", {
    loop: true,
    spaceBetween: 32,
    grabCursor: true,
  
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
  
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  
    breakpoints:{
      968: {
        slidesPerView: 3,
      },
    },
});

document.getElementById('startNowBtn').addEventListener('click', () => {
  window.location.href = 'card-slider-main/Boxing/boxing.html'; // Replace 'anotherpage.html' with the actual page URL
});

