(function($){

    var tl = new TimelineLite(),
        greetingText = document.getElementById("greeting-text"),
        content01 = document.getElementById("content01-01"),
        content02 = document.getElementById("content02-01"),
        contentDivider = document.getElementById("content-divider");

    TweenLite.set(greetingText, {autoAlpha:0, rotationX:-90});
    TweenLite.set(content01, {autoAlpha:0, rotationX:-90});
    TweenLite.set(contentDivider, {autoAlpha:0, rotationX:90});
    TweenLite.set(content02, {autoAlpha:0, rotationX:-90});

    tl.to(greetingText, 0.7, {autoAlpha:1,rotationX:0, transformOrigin:"50% 50% -25px"})
      .to(content01, 0.7, {autoAlpha:1,rotationX:0, transformOrigin:"50% 50% -25px"})
      .to(contentDivider, 0.7,{autoAlpha:.3,rotationX:0, transformOrigin:"0% 0% -25px"})
      .to(content02, 0.7, {autoAlpha:1,rotationX:0, transformOrigin:"50% 50% -25px"});

}(jQuery));