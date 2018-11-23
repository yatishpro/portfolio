var uiUxWorks = $('.ui-ux-works');
    uiUxWorks.owlCarousel({
      items: 3, //10 items above 1000px browser width
      itemsDesktop: [1000, 2], //5 items between 1000px and 901px
      itemsDesktopSmall: [900, 1], // betweem 900px and 601px
      itemsTablet: [600, 1], //2 items between 600 and 0
      itemsMobile: 1, // itemsMobile disabled - inherit from itemsTablet option
      slideSpeed: 1000,
      loop:true,
      autoPlay: true,
      autoHeight: true
  });
