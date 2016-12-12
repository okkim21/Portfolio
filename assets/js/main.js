//TweenMax.set(".content", {perspective:400});
//TweenMax.set(".portfolioitem", {opacity:0, y:-300});

var titleText = new SplitText(".title")
    myContent = new SplitText(".content",{type:"words,chars"}),
    tl = new TimelineLite(),
    numWords = titleText.chars.length,
    chars = myContent.chars,
    pImage1 = document.getElementById("portfolio1"),
    pImage2 = document.getElementById("portfolio2"),
    pImage3 = document.getElementById("portfolio3"),
    pImage4 = document.getElementById("portfolio4"),
    pImage5 = document.getElementById("portfolio5"),
    pText1 = document.getElementById("portfoliotext1"),
    pText2 = document.getElementById("portfoliotext2"),
    pText3 = document.getElementById("portfoliotext3"),
    pText4 = document.getElementById("portfoliotext4");
    pText5 = document.getElementById("portfoliotext5");

/* portfolio border effect */
tl.to(pImage1,1.5, {borderRadius:"25px", borderStyle:"solid", borderWidth:"thin", borderColor:"#c4c4c4"},"-=2");
tl.to(pImage2,1.5, {borderRadius:"0px 20px", borderStyle:"solid", borderWidth:"thin", borderColor:"#c4c4c4"},"-=2");
tl.to(pImage3,1.5, {borderRadius:"50px 50px 50px 0px", borderStyle:"solid", borderWidth:"thin", borderColor:"#c4c4c4"},"-=2");
tl.to(pImage4,1.5, {borderRadius:"0px 20px 50px 50px", borderStyle:"solid", borderWidth:"thin", borderColor:"#c4c4c4"},"-=2");
tl.to(pImage5,1.5, {borderRadius:"50px 50px 50px 0px", borderStyle:"solid", borderWidth:"thin", borderColor:"#c4c4c4"},"-=2");

/* portfolio mouseover and mouseout */
pImage1.addEventListener("mouseover", function(){TweenMax.fromTo(pImage1, 0.7, {
    opacity:.7,boxShadow: "0px 0px 0px 0px rgba(215,99,147,0.3)"
}, {
    boxShadow: "0px 0px 10px 5px rgba(215,99,147,0.7)",
    repeat: -1,
    yoyo: true,
    ease: Linear.easeNone
});}, false);

pImage1.addEventListener("mouseout", function(){TweenMax.fromTo(pImage1, 1, {
    opacity:1},{
    boxShadow: "0px 0px 0px 0px"

});}, false);

pImage2.addEventListener("mouseover", function(){TweenMax.fromTo(pImage2, 0.7, {
    opacity:.7,boxShadow: "0px 0px 0px 0px rgba(178,195,69,0.3)"
}, {
    boxShadow: "0px 0px 10px 5px rgba(178,195,69,0.7)",
    repeat: -1,
    yoyo: true,
    ease: Linear.easeNone
});}, false);

pImage2.addEventListener("mouseout", function(){TweenMax.fromTo(pImage2, 1, {
    opacity:1},{
    boxShadow: "0px 0px 0px 0px"

});}, false);

pImage3.addEventListener("mouseover", function(){TweenMax.fromTo(pImage3, 0.7, {
    opacity:.7,boxShadow: "0px 0px 0px 0px rgba(173,225,249,0.3)"
}, {
    boxShadow: "0px 0px 10px 5px rgba(173,225,249,0.7)",
    repeat: -1,
    yoyo: true,
    ease: Linear.easeNone
});}, false);

pImage3.addEventListener("mouseout", function(){TweenMax.fromTo(pImage3, 1, {
    opacity:1},{
    boxShadow: "0px 0px 0px 0px"

});}, false);

pImage4.addEventListener("mouseover", function(){TweenMax.fromTo(pImage4, 0.7, {
    opacity:.7,boxShadow: "0px 0px 0px 0px rgba(216,118,144,0.3)"
}, {
    boxShadow: "0px 0px 10px 5px rgba(178,195,69,0.7)",
    repeat: -1,
    yoyo: true,
    ease: Linear.easeNone
});}, false);

pImage4.addEventListener("mouseout", function(){TweenMax.fromTo(pImage4, 1, {
    opacity:1},{
    boxShadow: "0px 0px 0px 0px"

});}, false);

pImage5.addEventListener("mouseover", function(){TweenMax.fromTo(pImage5, 0.7, {
    opacity:.7,boxShadow: "0px 0px 0px 0px rgba(215,99,147,0.3)"
}, {
    boxShadow: "0px 0px 10px 5px rgba(215,99,147,0.7)",
    repeat: -1,
    yoyo: true,
    ease: Linear.easeNone
});}, false);

pImage5.addEventListener("mouseout", function(){TweenMax.fromTo(pImage5, 1, {
    opacity:1},{
    boxShadow: "0px 0px 0px 0px"

});}, false);