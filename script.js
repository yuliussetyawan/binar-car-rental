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
