$(".Ivern").hide();
$(".Zoe").hide();
$(".jhin").hide();
$(".Neeko").hide();
$(".des1").hide();
$(".des2").hide();
$(".des3").hide();
$(".des4").hide();

$("button").click(function() {
    var age = $(".q").val();
    var sub = $(".p").val();
    if (age >= 20 && sub === "math") {
        $(".Zoe").show();
        $(".des3").show();
        $(".Ivern").hide();
        $(".des4").hide();
        $(".Neeko").hide();
        $(".des2").hide();
        $(".jhin").hide();
        $(".des1").hide();
    }
        else if(age <= 20 && sub === "math") {
        $(".jhin").show();
        $(".des1").show();
        $(".Ivern").hide();
        $(".des4").hide();
        $(".Neeko").hide();
        $(".des2").hide();
        $(".Zoe").hide();
        $(".des3").hide();
    }
});



$("button").click(function() {
    var age = $(".q").val();
    var sub = $(".p").val();
    if (age <= 20 && sub === "biology") {
        $(".Neeko").show();
        $(".des4").show();
        $(".Zoe").hide();
        $(".des3").hide();
        $(".Ivern").hide();
        $(".des2").hide();
        $(".jhin").hide();
        $(".des1").hide();
    }
});

$("button").click(function() {
    var age = $(".q").val();
    var sub = $(".p").val();
    if (age >= 20 && sub === "biology") {
        $(".Ivern").show();
        $(".des2").show();
        $(".Zoe").hide();
        $(".des3").hide();
        $(".jhin").hide();
        $(".des4").hide();
        $(".Neeko").hide();
        $(".des1").hide();
    }
});