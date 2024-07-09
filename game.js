function invopen() {
    console.log("invopen called");
    $('.inv').toggle(300);
}

function bup() {
    console.log("bup called");
    if ($('#space1').width() <= 62 && $('#space1').width() >= 58 && $('#space2').width() <= 2) {
        $('#space1').animate({
            width: 0
        }, 0);
        $('#space2').animate({
            width: 0
        }, 0);
        $('#space3').animate({
            width: 0
        }, 0);
        h1();
    } else if ($('#space1').width() <= 62 && $('#space1').width() >= 58 && $('#space2').width() <= 22 && $('#space2').width() >= 18) {
        $('#space1').animate({
            width: 20
        }, 0);
        $('#space2').animate({
            width: 0
        }, 0);
        $('#space3').animate({
            width: 0
        }, 0);
        h1();
    } else if ($('#space1').width() <= 62 && $('#space1').width() >= 58 && $('#space2').width() <= 42 && $('#space2').width() >= 38) {
        $('#space1').animate({
            width: 40
        }, 0);
        $('#space2').animate({
            width: 0
        }, 0);
        $('#space3').animate({
            width: 0
        }, 0);
        h1();
    } else if ($('#space1').width() <= 62 && $('#space1').width() >= 58 && $('#space2').width() <= 62 && $('#space2').width() >= 58 && $('#space3').width() <= 2) {
        $('#space1').animate({
            width: 60
        }, 0);
        $('#space2').animate({
            width: 0
        }, 0);
        $('#space3').animate({
            width: 0
        }, 0);
        h2();
    } else if ($('#space1').width() <= 62 && $('#space1').width() >= 58 && $('#space2').width() <= 62 && $('#space2').width() >= 58 && $('#space3').width() <= 22 && $('#space3').width() >= 18) {
        $('#space1').animate({
            width: 60
        }, 0);
        $('#space2').animate({
            width: 20
        }, 0);
        $('#space3').animate({
            width: 0
        }, 0);
        h2();
    } else if ($('#space1').width() <= 62 && $('#space1').width() >= 58 && $('#space2').width() <= 62 && $('#space2').width() >= 58 && $('#space3').width() <= 42 && $('#space3').width() >= 38) {
        $('#space1').animate({
            width: 60
        }, 0);
        $('#space2').animate({
            width: 40
        }, 0);
        $('#space3').animate({
            width: 0
        }, 0);
        h2();
    } else return;
}

function bdown() {
    console.log("bdown called");
    if ($('#space1').width() <= 2 && $('#space2').width() <= 2 && $('#space3').width() <= 2) {
        $('#space1').animate({
            width: 60
        }, 0);
        $('#space2').animate({
            width: 0
        }, 0);
        $('#space3').animate({
            width: 0
        }, 0);
        h2();
    } else if ($('#space1').width() <= 22 && $('#space1').width() >= 18 && $('#space2').width() <= 2 && $('#space3').width() <= 2) {
        $('#space1').animate({
            width: 60
        }, 0);
        $('#space2').animate({
            width: 20
        }, 0);
        $('#space3').animate({
            width: 0
        }, 0);
        h2();
    } else if ($('#space1').width() <= 42 && $('#space1').width() >= 38 && $('#space2').width() <= 2 && $('#space3').width() <= 2) {
        $('#space1').animate({
            width: 60
        }, 0);
        $('#space2').animate({
            width: 40
        }, 0);
        $('#space3').animate({
            width: 0
        }, 0);
        h2();
    } else if ($('#space1').width() >= 58 && $('#space2').width() <= 2 && $('#space3').width() <= 2) {
        $('#space1').animate({
            width: 60
        }, 0);
        $('#space2').animate({
            width: 60
        }, 0);
        $('#space3').animate({
            width: 0
        }, 0);
        h3();
    } else if ($('#space1').width() >= 58 && $('#space2').width() <= 22 && $('#space2').width() >= 18 && $('#space3').width() <= 2) {
        $('#space1').animate({
            width: 60
        }, 0);
        $('#space2').animate({
            width: 60
        }, 0);
        $('#space3').animate({
            width: 20
        }, 0);
        h3();
    } else if ($('#space1').width() >= 58 && $('#space2').width() <= 42 && $('#space2').width() >= 38 && $('#space3').width() <= 2) {
        $('#space1').animate({
            width: 60
        }, 0);
        $('#space2').animate({
            width: 60
        }, 0);
        $('#space3').animate({
            width: 40
        }, 0);
        h3();
    } else return;
}

function bleft() {
    console.log("bleft called");
    if ($('#space1').width() <= 22 && $('#space1').width() >= 18 && $('#space2').width() <= 2 && $('#space3').width() <= 2) {
        $('#space1').animate({
            width: 0
        }, 0);
        $('#space2').animate({
            width: 0
        }, 0);
        $('#space3').animate({
            width: 0
        }, 0);
        v1();
    } else if ($('#space1').width() <= 62 && $('#space1').width() >= 58 && $('#space2').width() <= 22 && $('#space2').width() >= 18 && $('#space3').width() <= 2) {
        $('#space1').animate({
            width: 60
        }, 0);
        $('#space2').animate({
            width: 0
        }, 0);
        $('#space3').animate({
            width: 0
        }, 0);
        v1();
    } else if ($('#space1').width() <= 62 && $('#space1').width() >= 58 && $('#space2').width() <= 62 && $('#space2').width() >= 58 && $('#space3').width() <= 22 && $('#space3').width() >= 18) {
        $('#space1').animate({
            width: 60
        }, 0);
        $('#space2').animate({
            width: 60
        }, 0);
        $('#space3').animate({
            width: 0
        }, 0);
        v1();
    } else if ($('#space1').width() <= 42 && $('#space1').width() >= 38 && $('#space2').width() <= 2 && $('#space3').width() <= 2) {
        $('#space1').animate({
            width: 20
        }, 0);
        $('#space2').animate({
            width: 0
        }, 0);
        $('#space3').animate({
            width: 0
        }, 0);
        v2();
    } else if ($('#space1').width() <= 62 && $('#space1').width() >= 58 && $('#space2').width() <= 42 && $('#space2').width() >= 38 && $('#space3').width() <= 2) {
        $('#space1').animate({
            width: 60
        }, 0);
        $('#space2').animate({
            width: 20
        }, 0);
        $('#space3').animate({
            width: 0
        }, 0);
        v2();
    } else if ($('#space1').width() <= 62 && $('#space1').width() >= 58 && $('#space2').width() <= 62 && $('#space2').width() >= 58 && $('#space3').width() <= 42 && $('#space3').width() >= 38) {
        $('#space1').animate({
            width: 60
        }, 0);
        $('#space2').animate({
            width: 60
        }, 0);
        $('#space3').animate({
            width: 20
        }, 0);
        v2();
    } else return;
}

function bright() {
    console.log("bright called");
    if ($('#space1').width() <= 2 && $('#space2').width() <= 2 && $('#space3').width() <= 2) {
        $('#space1').animate({
            width: 20
        }, 0);
        $('#space2').animate({
            width: 0
        }, 0);
        $('#space3').animate({
            width: 0
        }, 0);
        v2();
    } else if ($('#space1').width() <= 62 && $('#space1').width() >= 58 && $('#space2').width() <= 2 && $('#space3').width() <= 2) {
        $('#space1').animate({
            width: 60
        }, 0);
        $('#space2').animate({
            width: 20
        }, 0);
        $('#space3').animate({
            width: 0
        }, 0);
        v2();
    } else if ($('#space1').width() <= 62 && $('#space1').width() >= 58 && $('#space2').width() <= 62 && $('#space2').width() >= 58 && $('#space3').width() <= 2) {
        $('#space1').animate({
            width: 60
        }, 0);
        $('#space2').animate({
            width: 60
        }, 0);
        $('#space3').animate({
            width: 20
        }, 0);
        v2();
    } else if ($('#space1').width() <= 22 && $('#space1').width() >= 18 && $('#space2').width() <= 2 && $('#space3').width() <= 2) {
        $('#space1').animate({
            width: 40
        }, 0);
        $('#space2').animate({
            width: 0
        }, 0);
        $('#space3').animate({
            width: 0
        }, 0);
        v3();
    } else if ($('#space1').width() <= 62 && $('#space1').width() >= 58 && $('#space2').width() <= 22 && $('#space2').width() >= 18 && $('#space3').width() <= 2) {
        $('#space1').animate({
            width: 60
        }, 0);
        $('#space2').animate({
            width: 40
        }, 0);
        $('#space3').animate({
            width: 0
        }, 0);
        v3();
    } else if ($('#space1').width() <= 62 && $('#space1').width() >= 58 && $('#space2').width() <= 62 && $('#space2').width() >= 58 && $('#space3').width() <= 22 && $('#space3').width() >= 18) {
        $('#space1').animate({
            width: 60
        }, 0);
        $('#space2').animate({
            width: 60
        }, 0);
        $('#space3').animate({
            width: 40
        }, 0);
        v3();
    } else return;
}

function v1() {
    $('#back').animate({
        marginLeft: 0
    }, 500);
}

function v2() {
    $('#back').animate({
        marginLeft: -535
    }, 500);
}

function v3() {
    $('#back').animate({
        marginLeft: -1070
    }, 500);
}

function h1() {
    $('#back').animate({
        marginTop: 0
    }, 500);
}

function h2() {
    $('#back').animate({
        marginTop: -330
    }, 500);
}

function h3() {
    $('#back').animate({
        marginTop: -660
    }, 500);
}

function root1() {
    console.log("root1 called");
    $('#dd1').hide();
    $('.speech').hide(0);
    $('#spc11').show(0);
    $('#zoom').hide(0);
    $('#zoom').fadeIn(500);
    $('#zo1').show(0);
    $('#inv1').animate({
        width: 105
    }, 0);
}

function root2() {
    console.log("root2 called");
    $('#dd2').hide();
    $('#zoom').hide(0);
    $('#zoom').fadeIn(500);
    $('#zo2').show(0);
    $('#inv2').animate({
        width: 105
    }, 0);
}

function root3() {
    console.log("root3 called");
    $('#dd3').hide();
    $('.speech').hide(0);
    $('#spc21').show(0);
    $('#zoom').hide(0);
    $('#zoom').fadeIn(500);
    $('#zo3').show(0);
    $('#inv3').animate({
        width: 105
    }, 0);
}

function root4() {
    console.log("root4 called");
    $('#dd4').hide();
    $('#zoom').hide(0);
    $('#zoom').fadeIn(500);
    $('#zo4').show(0);
    $('#inv4').animate({
        width: 105
    }, 0);
}

function root5() {
    console.log("root5 called");
    $('#dd5').hide();
    $('#zoom').hide(0);
    $('#zoom').fadeIn(500);
    $('#zo5').show(0);
    $('#inv5').animate({
        width: 105
    }, 0);
}

function root6() {
    console.log("root6 called");
    $('#dd6').hide();
    $('.speech').hide(0);
    $('#spc22').show(0);
    $('#zoom').hide(0);
    $('#zoom').fadeIn(500);
    $('#zo6').show(0);
    $('#inv6').animate({
        width: 105
    }, 0);
}

function root7() {
    console.log("root7 called");
    $('#dd7').hide();
    $('#inv7').animate({
        width: 105
    }, 0);
}

function root8() {
    console.log("root8 called");
    $('#dd8').hide();
    $('#zoom').hide(0);
    $('#zoom').fadeIn(500);
    $('#zo8').show(0);
    $('#inv8').animate({
        width: 105
    }, 0);
}

function root9() {
    console.log("root9 called");
    $('#dd9').hide();
    $('#zoom').hide(0);
    $('#zoom').fadeIn(500);
    $('#zo9').show(0);
    $('#inv9').animate({
        width: 105
    }, 0);
}

function ob00() {
    console.log("ob00 called");
    if ($('#inv9').width() <= 99) {
        $('.speech').hide(0);
        $('#spc02').show(0);
    } else if ($('#inv9').width() >= 100) {
        $('.speech').hide(0);
        $('#spc99').show(0);
        $('#ending').animate({
            width: 1080
        }, 3500, ending)
    } else return;
}

function ob01() {
    console.log("ob01 called");
    $('.speech').hide(0);
    $('#spc03').show(0);
}

function ob02() {
    console.log("ob02 called");
    $('.speech').hide(0);
    $('#spc04').show(0);
}

function ob03() {
    console.log("ob03 called");
    if ($('#inv3').width() <= 99) {
        $('.speech').hide(0);
        $('#spc05').show(0);
    } else if ($('#inv3').width() >= 100 && $('#inv8').width() <= 99) {
        $('.speech').hide(0);
        $('#spc23').show(0);
        root8();
    } else if ($('#inv3').width() >= 100 && $('#inv8').width() >= 100) {
        $('.speech').hide(0);
        $('#spc24').show(0);
    } else return;
}

function ob04() {
    console.log("ob04 called");
    if ($('#inv4').width() <= 99) {
        $('.speech').hide(0);
        $('#spc06').show(0);
        root4();
    } else if ($('#inv4').width() >= 100) {
        $('.speech').hide(0);
        $('#spc07').show(0);
    } else return;
}

function ob05() {
    console.log("ob05 called");
    $('.speech').hide(0);
    $('#spc08').show(0);
}

function ob06() {
    console.log("ob06 called");
    if ($('#inv5').width() <= 99) {
        $('.speech').hide(0);
        $('#spc09').show(0);
        root5();
    } else if ($('#inv5').width() >= 100) {
        $('.speech').hide(0);
        $('#spc10').show(0);
    } else return;
}

function ob07() {
    console.log("ob07 called");
    $('.speech').hide(0);
    $('#spc12').show(0);
}

function ob08() {
    console.log("ob08 called");
    if ($('#inv7').width() <= 99) {
        $('.speech').hide(0);
        $('#spc13').show(0);
    } else if ($('#inv7').width() >= 100 && $('#inv2').width() <= 99 && $('#inv9').width() <= 99) {
        $('.speech').hide(0);
        $('#spc18').show(0);
    } else if ($('#inv7').width() >= 100 && $('#inv2').width() >= 100 && $('#inv9').width() <= 99) {
        $('.speech').hide(0);
        $('#spc19').show(0);
        root9();
    } else if ($('#inv7').width() >= 100 && $('#inv2').width() >= 100 && $('#inv9').width() >= 100) {
        $('.speech').hide(0);
        $('#spc20').show(0);
    } else return;
}

function ob09() {
    console.log("ob09 called");
    if ($('#inv1').width() <= 99) {
        $('.speech').hide(0);
        $('#spc14').show(0);
    } else if ($('#inv1').width() >= 100 && $('#inv4').width() <= 99 || $('#inv5').width() <= 99 || $('#inv6').width() <= 99) {
        $('.speech').hide(0);
        $('#spc15').show(0);
    } else if ($('#inv1').width() >= 100 && $('#inv4').width() >= 100 && $('#inv5').width() >= 100 && $('#inv6').width() >= 100 && $('#inv2').width() <= 99) {
        $('.speech').hide(0);
        $('#spc16').show(0);
        root2();
    } else if ($('#inv1').width() >= 100 && $('#inv4').width() >= 100 && $('#inv5').width() >= 100 && $('#inv6').width() >= 100 && $('#inv2').width() >= 100) {
        $('.speech').hide(0);
        $('#spc17').show(0);
    } else return;
}

function ob10() {
    console.log("ob10 called");
    $('.speech').hide(0);
    $('#spc30').show(0);
    $('#zoom').hide(0);
    $('#zoom').fadeIn(500);
    $('#zo1').show(0);
}

function ob11() {
    console.log("ob11 called");
    $('.speech').hide(0);
    $('#spc31').show(0);
    $('#zoom').hide(0);
    $('#zoom').fadeIn(500);
    $('#zo2').show(0);
}

function ob12() {
    console.log("ob12 called");
    $('.speech').hide(0);
    $('#spc32').show(0);
    $('#zoom').hide(0);
    $('#zoom').fadeIn(500);
    $('#zo3').show(0);
}

function ob13() {
    console.log("ob13 called");
    $('.speech').hide(0);
    $('#spc33').show(0);
    $('#zoom').hide(0);
    $('#zoom').fadeIn(500);
    $('#zo4').show(0);
}

function ob14() {
    console.log("ob14 called");
    $('.speech').hide(0);
    $('#spc34').show(0);
    $('#zoom').hide(0);
    $('#zoom').fadeIn(500);
    $('#zo5').show(0);
}

function ob15() {
    console.log("ob15 called");
    $('.speech').hide(0);
    $('#spc35').show(0);
    $('#zoom').hide(0);
    $('#zoom').fadeIn(500);
    $('#zo6').show(0);
}

function ob16() {
    console.log("ob16 called");
    $('.speech').hide(0);
    $('#spc36').show(0);
    $('#zoom').hide(0);
    $('#zoom').fadeIn(500);
    $('#zo7').show(0);
}

function ob17() {
    console.log("ob17 called");
    if ($('#inv7').width() <= 99) {
        $('.speech').hide(0);
        $('#spc39').show(0);
        $('#zoom').hide(0);
        $('#zoom').fadeIn(500);
        $('#zo7').show(0);
        root7();
    } else if ($('#inv7').width() >= 100) {
        $('.speech').hide(0);
        $('#spc37').show(0);
        $('#zoom').hide(0);
        $('#zoom').fadeIn(500);
        $('#zo8').show(0);
    } else return;
}

function ob18() {
    console.log("ob18 called");
    $('.speech').hide(0);
    $('#spc38').show(0);
    $('#zoom').hide(0);
    $('#zoom').fadeIn(500);
    $('#zo9').show(0);
}

function hint() {
    console.log("hint called");
    $('#hinter').toggle(300);
}

function hindel() {
    console.log("hindel called");
    $('#hinter').hide(300);
}

function clr0() {
    console.log("clr0 called");
    $('#zoom').hide(0);
    $('#zoom > img').hide(0);
}

function clr1() {
    console.log("clr1 called");
    $('.speech').hide(0);
}

function ending() {
    console.log("ending called");
    $('#ending').fadeIn(2000);
}
