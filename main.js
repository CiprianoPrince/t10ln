const swiper = new Swiper('.slide-content', {
  slidesPerView: 5,
  spaceBetween: 25,
  loop: true,
  centerSlide: 'true',
  fade: 'true',
  grabCursor: 'true',
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  scrollbar: {
    el: '.swiper-scrollbar',
    hide: true,
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    576: {
      slidesPerView: 2,
    },
    950: {
      slidesPerView: 3,
    },
  },
})

window.addEventListener('scroll', (e) => {
  const animatedElements = document.querySelectorAll('.fade-In, .fade-InUp')
  const newAnimatedElements = [...animatedElements]

  newAnimatedElements.forEach((element) => {
    const windowHeight = window.innerHeight
    const elementTop = element.getBoundingClientRect().top
    const revealPoint = 5
    if (elementTop < windowHeight - revealPoint) {
      if (element.classList.contains('fade-In')) {
        element.classList.add('fadeIn')
      }
    }
    if (element.classList.contains('fade-InUp')) {
      element.classList.add('fadeInUp')
    }
  })
})
