console.log("Connected, as instructed. But now more nonesense because no one is going to see it. ^-^")
console.log("__--__--__--_i_i")


// Part 1 To Dos
//$(".title h1").html("Abundant Memory, <em>Relational Intelligences</em>")
//$(".title").append("<p>October 17th 2025 - January 23, 2025</p>")
//$(".titles").removeClass("type");
//$(".title").css("font-family", "Impact")
// Commented out to not affect Part 2
//$(".funding").html("<p>This exhibition draws upon research supported by the Government of Canada’s New Frontiers in Research Fund (NFRF) and the Social Sciences and Humanities Research Council, and the Canada Foundation for Innovation.</p>")
//$(".logos").html("<img src='assets/ulag_logo_black.webp'>")

// Part 2 To Dos
//$(".logos").html("<img src='assets/ulag_logo_black.webp'>")

//$("body").addClass("new-background");
$("#logo").on("click", function () {
    $("#logo").attr("src", "assets/ulag_logo_black.webp").attr("alt", "Ulethbridge Art Gallery")
})


//Title Update
$(".title h1").on("click", updateTitle)
function updateTitle() {
    $(".title h1").html("Abundant Memory, <em>Relational Intelligence</em>")
    $(".title h1").after("<p>October 17th 2025 - January 23, 2025</p>")
    $(".title").css("Font-family", "Impact")
    $(".title h1").unbind("click");
    $(document).unbind("keydown");
}

$(document).on("keydown", function (pheasant) {
    console.log(pheasant)
    if (pheasant.key == "?") { updateTitle(); }
})


$("#-abc-y").on("click", abcy)
function abcy() {
    $(".tiles").addClass("type");
    $(".tile-blank").show()
    $("#-abc-y").addClass("active");
    $("#griddy").removeClass("active");

}
//Button
$("#griddy").on("click", griddy)
function griddy() {
    $(".tiles").removeClass("type");
    //$(".title-blank").fadeOut("slow")
    $(".tile-blank").hide()
    $("#-abc-y").removeClass("active");
    $("#griddy").addClass("active");

}

var light = true;
console.log("Light Mode");
$("#colour-view").on("click", colourView)
function colourView() {
    /*    $(".tiles").removeClass("type")
        $(".tile-blank").show()
        $("#-abc-y").addClass(".button");
        $("#-abc-y").removeClass("active");
        $("#griddy").addClass(".button");
        $("#griddy").removeClass("active");
        $("#colour-view").addClass("active");
        $("#colour-view").removeClass(".button");
        */
    light = !light;

    if (light) {
        console.log("Dark Mode");
        $(":root").css("--bkg", "#1b185f");
        $(":root").css("--frg", "#dbdae2");

    }
    else {
        console.log("Light Mode");
        $(":root").css("--frg", "#1b185f");
        $(":root").css("--bkg", "#dbdae2");
    }
}

//Flippy tiles
$(".tile").wrap("<div class='tile-wrapper'></div>")
$(".type .tile img").on("click", function () {
    $(".tile").css("transform", "rotateY(180deg)");
})

$(".type .tile figcaption").on("click", function () {
    $(".tile").css("transform", "rotateY(0deg)");
})







// Funding
$(".funding").on("click", addPara)
function addPara() {
    $(".funding h3").after("<p>This exhibition draws upon research supported by the Government of Canada’s New Frontiers in Research Fund (NFRF) and the Social Sciences and Humanities Research Council, and the Canada Foundation for Innovation.</p>")
    $(".funding ").unbind("click")
}

