export default {
  data() {
    return {
      sliderPosition: null,
      settings: {
        dots: true,
        lazyLoad: 'ondemand',
        focusOnSelect: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        touchThreshold: 5,
        centerMode: true,
        centerPadding: '0',
        autoplay: false,
        autoplaySpeed: 8000,
        initialSlide: 1,
        responsive: [
          {
            breakpoint: 1280,

            settings: {
              initialSlide: 1,
              slidesToShow: 2,
              slidesToScroll: 2,
            },
          },
          {
            breakpoint: 768,
            settings: {
              initialSlide: 0,

              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 480,
            settings: {
              initialSlide: 0,

              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      },
    }
  },
  mounted() {
    const rect = document.getElementById(this.sectionId).getBoundingClientRect()
    this.sliderPosition = rect.top
    window.addEventListener('scroll', () => {
      if (this.sliderPosition <= 1.35 * window.scrollY) {
        this.settings.autoplay = true
      }
    })
  },
}
