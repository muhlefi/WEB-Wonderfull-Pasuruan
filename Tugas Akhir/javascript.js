//menu
var tombolMenu = $(".tombol-menu");
var menu = $ ("nav .menu ul")

//galeri
let listData = [
    {
        linkfoto: "articletamansafari.html",
        title : "Taman Safari Indonesia 2",
        image : "asset/tamansafarifoto1.jpeg",
        desc : "Terletak di Kecamatan Prigen,Kabupaten Pasuruan.Adalah tempat di mana pengunjung dapat menikmati keindahan alam sambil berinteraksi dengan beragam satwa yang eksotis dan dilindungi."
    },
    {
        linkfoto: "articlekakekbodo.html",
        title : "Air Terjun Kakek Bodo",
        image : "asset/kakekbodofoto1.jpeg",
        desc : "Terletak di Kecamatan Prigen,Kabupaten Pasuruan.Merupakan destinasi yang menawan dengan gemuruh air terjun yang megah dan panorama alam yang memukau."
    },
    {
        linkfoto: "articlebanyubiru.html",
        title : "Banyu Biru",
        image : "asset/banyubirufoto2.jpeg",
        desc : "Terletak di Kecamatan Winongan,Kabupaten Pasuruan.Merupakan destinasi wisata air yang menawan dengan kolam biru yang jernih, dan suasana yang tenang dan damai."
    },
]

function klikMenu(){
    tombolMenu.click(function(){
        menu.toggle();
    });
    menu.click(function(){
        menu.toggle();
    })
}

$(document).ready(function(){
    var width = $(window).width();
    if (width < 990){
        klikMenu();
    }
})

// check lebar
$(window).resize(function(){
    var width = $ (window).width();
    if(width > 989){
        menu.css("display","block");
        // display:block
    }else{
        menu.css("display","none")
    }
    klikMenu();
});


// efek scroll
$(document).ready(function(){
    var scroll_pos = 0;
    $(document).scroll(function(){
        scroll_pos = $(this).scrollTop();
        if(scroll_pos > 0){
            $("nav.dynamic").addClass("putih")
            $("nav.dynamic img.hitam").show();
            $("nav.dynamic img.putih").hide();
        }else{
            $("nav.dynamic").removeClass("putih")
            $("nav.dynamic img.hitam").hide();
            $("nav.dynamic img.putih").show();
        }
    })

    if ($(".static").hasClass("putih")) {
        
        $(".static img.hitam").show();
        $(".static img.putih").hide();
    }
});

// // efek zoom in galeri
// var element = document.getElementById("myElement");
// element.addEventListener("click", function() {
//   this.classList.toggle("zoom-in");
// });

