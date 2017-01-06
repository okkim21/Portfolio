(function (){
    // Valuables
    var controller,
        scene1 = document.getElementById('scene1'), scene2 = document.getElementById('scene2'),scene3 = document.getElementById('scene3'),scene4 = document.getElementById('scene4'),
        scrollDown = document.getElementById('scroll-down'),
        menuImage = document.getElementById('menu-image'),
        menuItem1 = document.getElementById('menu-item1'),
        menuItem2 = document.getElementById('menu-item2'),
        menuItem3 = document.getElementById('menu-item3'),
        menuItem4 = document.getElementById('menu-item4'),
        personRight = document.getElementById('person-icon-right'),
        personLeft = document.getElementById('person-icon-left'),
        personRight1 = document.getElementById('person-icon-right1'),
        personLeft1 = document.getElementById('person-icon-left1'),
        personRight2 = document.getElementById('person-icon-right2'),
        personLeft2 = document.getElementById('person-icon-left2'),
        loader1 = document.getElementById('loader1'),
        aboutText1 = document.getElementById('about-text1'),
        loader2 = document.getElementById('loader2'),
        aboutText2 = document.getElementById('about-text2'),
        loader3 = document.getElementById('loader3'),
        aboutText3 = document.getElementById('about-text3'),
        loader4 = document.getElementById('loader4'),
        aboutText4 = document.getElementById('about-text4'),
        loader5 = document.getElementById('loader5'),
        aboutText5 = document.getElementById('about-text5'),
        loader6 = document.getElementById('loader6'),
        aboutText6 = document.getElementById('about-text6'),
        scheduleTop = document.getElementsByClassName('schedule-top'),
        scheduleFirstItem1 = document.getElementById('schedule-first-item1'),
        scheduleFirstItem2 = document.getElementById('schedule-first-item2'),
        scheduleFirstItem3 = document.getElementById('schedule-first-item3'),
        scheduleFirstItem4 = document.getElementById('schedule-first-item4'),
        scheduleFirstItem5 = document.getElementById('schedule-first-item5'),
        scheduleSecondItem1 = document.getElementById('schedule-second-item1'),
        scheduleSecondItem2 = document.getElementById('schedule-second-item2'),
        scheduleSecondItem3 = document.getElementById('schedule-second-item3'),
        scheduleSecondItem4 = document.getElementById('schedule-second-item4'),
        scheduleSecondItem5 = document.getElementById('schedule-second-item5'),
        scheduleThirdItem1 = document.getElementById('schedule-third-item1'),
        scheduleThirdItem2 = document.getElementById('schedule-third-item2'),
        scheduleThirdItem3 = document.getElementById('schedule-third-item3'),
        scheduleThirdItem4 = document.getElementById('schedule-third-item4'),
        scheduleThirdItem5 = document.getElementById('schedule-third-item5'),
        scheduleForthItem1 = document.getElementById('schedule-forth-item1'),
        scheduleForthItem2 = document.getElementById('schedule-forth-item2'),
        scheduleForthItem3 = document.getElementById('schedule-forth-item3'),
        scheduleForthItem4 = document.getElementById('schedule-forth-item4'),
        scheduleForthItem5 = document.getElementById('schedule-forth-item5'),
        scheduleFifthItem1 = document.getElementById('schedule-fifth-item1'),
        scheduleFifthItem2 = document.getElementById('schedule-fifth-item2'),
        scheduleFifthItem3 = document.getElementById('schedule-fifth-item3'),
        scheduleFifthItem4 = document.getElementById('schedule-fifth-item4'),
        scheduleFifthItem5 = document.getElementById('schedule-fifth-item5'),
        scheduleSixthItem1 = document.getElementById('schedule-sixth-item1'),
        scheduleSixthItem2 = document.getElementById('schedule-sixth-item2'),
        scheduleSixthItem3 = document.getElementById('schedule-sixth-item3'),
        scheduleSixthItem4 = document.getElementById('schedule-sixth-item4'),
        scheduleSixthItem5 = document.getElementById('schedule-sixth-item5'),
        weekendScheduleTitle = document.getElementById('weekend-schedule-title'),
        weekendDate = document.getElementsByClassName('weekend-schedule-item'),
        weekendText = document.getElementsByClassName('weekend-text'),
        scheduleAnnounce = document.getElementById('schedule-announce'),
        galleryTitle= document.getElementById('gallery-title'),
        gallery1= document.getElementById('gallery1'),
        gallery2= document.getElementById('gallery2'),
        gallery3= document.getElementById('gallery3')
        ;

    enquire.register("screen and (min-width: 768px)", {

        match: function(){
            initScrollMagic();
        },
        unmatch: function(){
            controller.destroy(true);
            $('*').removeAttr('style');

        }

    });

    function initScrollMagic () {
        // Init ScrollMagic
        controller = new ScrollMagic.Controller();

        // Scroll Down
        TweenMax.fromTo(scrollDown, 1, {scale: .3}, {
            scale: 1,
            transformOrigin: 'top center',
            ease: Power1.easeOut,
            repeat: -1,
            repeatDelay: 1
        });

        //Menu
        var menuShow = false;

        menuImage.onclick = function () {

            if (menuShow === true) { // if is menuBox displayed, hide it
                var menuOutTl = new TimelineMax();

                menuOutTl
                    .to(menuItem4, 0.3, {y: -40, autoAlpha: 0, ease: Power1.easeInOut})
                    .to(menuItem3, 0.3, {y: -40, autoAlpha: 0, ease: Power1.easeInOut}, '-=.3')
                    .to(menuItem2, 0.4, {y: -40, autoAlpha: 0, ease: Power1.easeInOut}, '-=.2')
                    .to(menuItem1, 0.2, {x: -10, autoAlpha: 0, ease: Power1.easeInOut});

                menuShow = false;
            }
            else { // if is menuBox hidden, display it
                var menuTl = new TimelineMax();

                menuTl
                    .fromTo(menuItem1, 0.2, {x: -10}, {x: 0, autoAlpha: .8, ease: Power1.easeInOut})
                    .fromTo(menuItem2, 0.4, {y: -40}, {y: 0, autoAlpha: .8, ease: Power1.easeInOut})
                    .fromTo(menuItem3, 0.3, {y: -40}, {y: 0, autoAlpha: .8, ease: Power1.easeInOut}, '-=.3')
                    .fromTo(menuItem4, 0.3, {y: -40}, {y: 0, autoAlpha: .8, ease: Power1.easeInOut}, '-=.2');

                menuShow = true;
            }
        };


        // Scene1
        var personTl = new TimelineMax();

        personTl
            .set(personRight, {x: 90, scale: .8, rotationY: -180, autoAlpha: 0})
            .set(personLeft, {x: -90, scale: .8, autoAlpha: 0})
            .to(personRight, .3, {rotationY: 0, autoAlpha: 1, transformOrigin: 'bottom center'})
            .to(personRight, .2, {x: 40})
            .to(personLeft, .3, {autoAlpha: 1, x: -40, transformOrigin: 'bottom center'}, "-=.3")
            .set(personRight1, {x: -160, autoAlpha: 0})
            .set(personLeft1, {x: -300, autoAlpha: 0})
            .to(personRight1, .3, {x: -180, autoAlpha: 1, transformOrigin: 'bottom center'})
            .to(personLeft1, .3, {autoAlpha: 1, x: -270, transformOrigin: 'bottom center'}, "-=.1")
            .set(personRight2, {x: 390, autoAlpha: 0})
            .set(personLeft2, {x: 250, autoAlpha: 0})
            .to(personRight2, .3, {x: 370, autoAlpha: 1, transformOrigin: 'bottom center'})
            .to(personLeft2, .3, {autoAlpha: 1, x: 270, transformOrigin: 'bottom center'}, "-=.1");

        var personRightMovingScene = new ScrollMagic.Scene({
            triggerElement: scene2,
            triggerHook: 0,
            offset: -620
        })
            .setTween(personTl)
            .addTo(controller);

        // Scene2
        // Project Loader
        loaderTl = new TimelineMax();

        loaderTl
            .fromTo(loader1, .3, {strokeDasharray: 547, strokeDashoffset: 547}, {
                strokeDasharray: 547,
                strokeDashoffset: 0,
                ease: Power0.easeNone
            })
            .fromTo(aboutText1, .2, {autoAlpha: 0, y: -50, scale: 0.7}, {autoAlpha: 1, y: 0,}, '-=0.5')
            .to(aboutText1, .2, {scale: 1, ease: Power4.easeInOut})
            .add('loader1')
            .fromTo(loader2, .3, {strokeDasharray: 547, strokeDashoffset: 547}, {
                strokeDasharray: 547,
                strokeDashoffset: 0,
                ease: Power0.easeNone
            }, 'loader1-=.3')
            .fromTo(aboutText2, .2, {autoAlpha: 0, y: -50, scale: 0.7}, {autoAlpha: 1, y: 0,}, '-=0.5')
            .to(aboutText2, .2, {scale: 1, ease: Power4.easeInOut})
            .add('loader2')
            .fromTo(loader3, .3, {strokeDasharray: 547, strokeDashoffset: 547}, {
                strokeDasharray: 547,
                strokeDashoffset: 0,
                ease: Power0.easeNone
            }, 'loader2-=.3')
            .fromTo(aboutText3, .2, {autoAlpha: 0, y: -50, scale: 0.7}, {autoAlpha: 1, y: 0,}, '-=0.5')
            .to(aboutText3, .2, {scale: 1, ease: Power4.easeInOut})
            .add('loader3')
            .fromTo(loader4, .3, {strokeDasharray: 547, strokeDashoffset: 547}, {
                strokeDasharray: 547,
                strokeDashoffset: 0,
                ease: Power0.easeNone
            }, 'loader3-=.3')
            .fromTo(aboutText4, .2, {autoAlpha: 0, y: -50, scale: 0.7}, {autoAlpha: 1, y: 0,}, '-=0.5')
            .to(aboutText4, .2, {scale: 1, ease: Power4.easeInOut})
            .add('loader4')
            .fromTo(loader5, .3, {strokeDasharray: 547, strokeDashoffset: 547}, {
                strokeDasharray: 547,
                strokeDashoffset: 0,
                ease: Power0.easeNone
            }, 'loader4-=.3')
            .fromTo(aboutText5, .2, {autoAlpha: 0, y: -50, scale: 0.7}, {autoAlpha: 1, y: 0,}, '-=0.5')
            .to(aboutText5, .2, {scale: 1, ease: Power4.easeInOut})
            .add('loader5')
            .fromTo(loader6, .3, {strokeDasharray: 547, strokeDashoffset: 547}, {
                strokeDasharray: 547,
                strokeDashoffset: 0,
                ease: Power0.easeNone
            }, 'loader5-=.3')
            .fromTo(aboutText6, .2, {autoAlpha: 0, y: -50, scale: 0.7}, {autoAlpha: 1, y: 0,}, '-=0.5')
            .to(aboutText6, .2, {scale: 1, ease: Power4.easeInOut});

        var loaderScene = new ScrollMagic.Scene({
            triggerElement: scene2,
            triggerHook: 0,
            offset: -200
        })
            .setTween(loaderTl)
            .addTo(controller);

        // Scene3
        var scheduleTl = new TimelineMax();
        //.to(scheduleThirdItem1, 0.1, {autoAlpha:.7, ease:Power1.easeInOut}, 'secondClass-=.7')
        scheduleTl
            .set(scheduleTop, {autoAlpha: 0})
            .set([scheduleFirstItem2, scheduleFirstItem3, scheduleFirstItem4, scheduleFirstItem5], {x: -50})
            .set([scheduleSecondItem2, scheduleSecondItem3, scheduleSecondItem4, scheduleSecondItem5], {x: -50})
            .set([scheduleThirdItem2, scheduleThirdItem3, scheduleThirdItem4, scheduleThirdItem5], {x: -50})
            .set([scheduleForthItem2, scheduleForthItem3, scheduleForthItem4, scheduleForthItem5], {x: -50})
            .set([scheduleFifthItem2.scheduleFifthItem3, scheduleFifthItem4, scheduleFifthItem5], {x: -50})
            .set([scheduleSixthItem2, scheduleSixthItem3, scheduleSixthItem4, scheduleSixthItem5], {x: -50})
            .to(scheduleTop, 0.3, {autoAlpha: .7, ease: Power1.easeInOut})
            .fromTo(scheduleFirstItem1, 0.2, {autoAlpha: 0, scale: 0}, {autoAlpha: .7, scale: 1})
            .fromTo(scheduleSecondItem1, 0.2, {autoAlpha: 0, scale: 0}, {autoAlpha: .7, scale: 1}, '-=.1')
            .fromTo(scheduleThirdItem1, 0.2, {autoAlpha: 0, scale: 0}, {autoAlpha: .7, scale: 1}, '-=.1')
            .fromTo(scheduleForthItem1, 0.2, {autoAlpha: 0, scale: 0}, {autoAlpha: .7, scale: 1}, '-=.1')
            .fromTo(scheduleFifthItem1, 0.2, {autoAlpha: 0, scale: 0}, {autoAlpha: .7, scale: 1}, '-=.1')
            .fromTo(scheduleSixthItem1, 0.2, {autoAlpha: 0, scale: 0}, {autoAlpha: .7, scale: 1}, '-=.1')
            .to(scheduleFirstItem2, 0.1, {autoAlpha: .7, x: 0, ease: Power1.easeInOut})
            .to(scheduleFirstItem3, 0.1, {autoAlpha: .7, x: 0, ease: Power1.easeInOut})
            .to(scheduleFirstItem4, 0.1, {autoAlpha: .7, x: 0, ease: Power1.easeInOut})
            .to(scheduleFirstItem5, 0.1, {autoAlpha: .7, x: 0, ease: Power1.easeInOut})
            .add('firstClass')
            .to(scheduleSecondItem2, 0.1, {autoAlpha: .7, x: 0, ease: Power1.easeInOut})
            .to(scheduleSecondItem3, 0.1, {autoAlpha: .7, x: 0, ease: Power1.easeInOut})
            .to(scheduleSecondItem4, 0.1, {autoAlpha: .7, x: 0, ease: Power1.easeInOut})
            .to(scheduleSecondItem5, 0.1, {autoAlpha: .7, x: 0, ease: Power1.easeInOut})
            .add('secondClass')
            .to(scheduleThirdItem2, 0.1, {autoAlpha: .7, x: 0, ease: Power1.easeInOut})
            .to(scheduleThirdItem3, 0.1, {autoAlpha: .7, x: 0, ease: Power1.easeInOut})
            .to(scheduleThirdItem4, 0.1, {autoAlpha: .7, x: 0, ease: Power1.easeInOut})
            .to(scheduleThirdItem5, 0.1, {autoAlpha: .7, x: 0, ease: Power1.easeInOut})
            .add('thirdClass')
            .to(scheduleForthItem2, 0.1, {autoAlpha: .7, x: 0, ease: Power1.easeInOut})
            .to(scheduleForthItem3, 0.1, {autoAlpha: .7, x: 0, ease: Power1.easeInOut})
            .to(scheduleForthItem4, 0.1, {autoAlpha: .7, x: 0, ease: Power1.easeInOut})
            .to(scheduleForthItem5, 0.1, {autoAlpha: .7, x: 0, ease: Power1.easeInOut})
            .add('forthClass')
            .to(scheduleFifthItem2, 0.1, {autoAlpha: .7, x: 0, ease: Power1.easeInOut})
            .to(scheduleFifthItem3, 0.1, {autoAlpha: .7, x: 0, ease: Power1.easeInOut})
            .to(scheduleFifthItem4, 0.1, {autoAlpha: .7, x: 0, ease: Power1.easeInOut})
            .to(scheduleFifthItem5, 0.1, {autoAlpha: .7, x: 0, ease: Power1.easeInOut})
            .add('fifthClass')
            .to(scheduleSixthItem2, 0.1, {autoAlpha: .7, x: 0, ease: Power1.easeInOut})
            .to(scheduleSixthItem3, 0.1, {autoAlpha: .7, x: 0, ease: Power1.easeInOut})
            .to(scheduleSixthItem4, 0.1, {autoAlpha: .7, x: 0, ease: Power1.easeInOut})
            .to(scheduleSixthItem5, 0.1, {autoAlpha: .7, x: 0, ease: Power1.easeInOut})
            .add('sixthClass')
            .fromTo(weekendScheduleTitle, 0.2, {autoAlpha: 0}, {autoAlpha: 1, ease: Power4.easeInOut})
            .fromTo(weekendDate, 0.1, {autoAlpha: 0, scale: 0}, {autoAlpha: .7, scale: 1})
            .fromTo(weekendText, 0.1, {autoAlpha: 0, scale: 0}, {autoAlpha: .7, scale: 1})
            .set(scheduleAnnounce, {rotationX: -90})
            .to(scheduleAnnounce, 0.2, {autoAlpha: .5, rotationX: 0, transformOrigin: "50% 50% -25px"})
        ;

        var scheduleScene = new ScrollMagic.Scene({
            triggerElement: scene3,
            triggerHook: 0,
            offset: -200
        })
            .setTween(scheduleTl)
            .addTo(controller);

        // Scene4
        var galleryTl = new TimelineMax();

        galleryTl
            .fromTo(galleryTitle, .7, {y: -40, autoAlpha: 0}, {y: 0, autoAlpha: 1, ease: Power1.easeInOut})
            .fromTo(gallery1, .5, {x: -70, autoAlpha: 0}, {x: 0, autoAlpha: 1, ease: Power1.easeInOut}, '-=0.6')
            .fromTo(gallery3, .5, {x: 70, autoAlpha: 0}, {x: 0, autoAlpha: 1, ease: Power1.easeInOut}, '-=0.6')
            .fromTo(gallery2, .5, {y: 60, autoAlpha: 0}, {y: 0, autoAlpha: 1, ease: Power1.easeInOut}, '-=0.3')
        ;

        var galleryScene = new ScrollMagic.Scene({
            triggerElement: scene4,
            triggerHook: 0,
            offset: -200
        })
            .setTween(galleryTl)
            .addTo(controller);

    }

})();
