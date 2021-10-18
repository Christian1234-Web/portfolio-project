let first_p = $('#first_p'),
    second_p = $('#second_p'),
    dashbord = $('.dashbord'),
    banner = $('.banner'),
    // about = $('.about'),
    // hanga = $('.hanga'),
    // homePage= $('#homePage'),
    // aboutPage =$('#aboutPage'),
    // resumePage =$('#resumePage'),
    // porfoilioPage =$('#porfoilioPage'),
    // servivePage =$('#servivePage'),
    // contactPage =$('#contactPage'),
    pad = $('.pad');
 portfolio = $('.portfolio')
    
 $(document).ready(function(){
    $('#pagepiling').pagepiling({
        menu: null,
        direction: 'vertical',
        sectionsColor: ['#f1f2f6','#f1f2f6','#f1f2f6'],
        anchors: ['homePage', 'aboutPage', 'skillPage','resumePage','portfoliopage', 'contactPage',],
        menu: '#mymenu',
        scrollingSpeed: 700,
        easing: 'swing',
        lootBottom: false,
        lootTop: false,
        touchSensitivity: 5

    });
    //filterizr

    // var filterizd = $('.filter-container').filterizr({
    //     animationDuration: .5
    // });
    
    
});
dashbord.hover(function () {
    second_p.slideUp(3000)
        // first_p.slideDown(5000)
});

banner.hover(function() {
    // first_p.slideDown(5000)
    second_p.slideDown(3000)

});


portfolio.hover(function() {
    this.style.paddingTop
});

// aboutPage.click(function () {
    // first_p.slideDown(5000)
   // about.slideUp(1000);
//    main.slideDown(2000);
//  console.log('aboutPage');
// });
