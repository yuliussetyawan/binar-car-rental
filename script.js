const testimonialCarousel = document.querySelector("#testimonial-carousel");
const btnLeftTestimonial = document.querySelector(
  "#testimonial-gallery-left-btn"
);
const btnRightTestimonial = document.querySelector(
  "#testimonial-gallery-right-btn"
);

btnLeftTestimonial.addEventListener("click", () => {
  testimonialCarousel.scrollTo({
    left: testimonialCarousel.scrollLeft - 450,
  });
});

btnRightTestimonial.addEventListener("click", () => {
  testimonialCarousel.scrollTo({
    left: testimonialCarousel.scrollLeft + 450,
  });
});

var swiper = new Swiper(".mySwiper", {
  slidesPerView: "auto",
  initialSlide: 1,
  centeredSlides: true,
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
