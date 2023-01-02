// start-menu
let mn1 = document.getElementById('mn1');
let mn2 = document.getElementById('mn2');
let mn3 = document.getElementById('mn3');
let mn4 = document.getElementById('mn4');
mn1.onclick = function () {
    window.link1.style.transform = "scale(1)"
    window.link2.style.transform = "scale(0)"
    window.link3.style.transform = "scale(0)"
    window.link4.style.transform = "scale(0)"

}
mn2.onclick = function () {
    window.link1.style.transform = "scale(0)"
    window.link2.style.transform = "scale(1)"
    window.link3.style.transform = "scale(0)"
    window.link4.style.transform = "scale(0)"

}
mn3.onclick = function () {
    window.link1.style.transform = "scale(0)"
    window.link2.style.transform = "scale(0)"
    window.link3.style.transform = "scale(1)"
    window.link4.style.transform = "scale(0)"

}
mn4.onclick = function () {
    window.link1.style.transform = "scale(0)"
    window.link2.style.transform = "scale(0)"
    window.link3.style.transform = "scale(0)"
    window.link4.style.transform = "scale(1)"
}
// end-menu
// strat-sp
let sp1 = document.getElementById('sp1');
let sp2 = document.getElementById('sp2');
let sp3 = document.getElementById('sp3');
let sp4 = document.getElementById('sp4');
let sp5 = document.getElementById('sp5');
sp1.onclick = function () {
    window.linksp1.style.transform = "scale(1)"
    window.linksp2.style.transform = "scale(0)"
    window.linksp3.style.transform = "scale(0)"
    window.linksp4.style.transform = "scale(0)"
    window.linksp5.style.transform = "scale(0)"
}
sp2.onclick = function () {
    window.linksp1.style.transform = "scale(0)"
    window.linksp2.style.transform = "scale(1)"
    window.linksp3.style.transform = "scale(0)"
    window.linksp4.style.transform = "scale(0)"
    window.linksp5.style.transform = "scale(0)"
}
sp3.onclick = function () {
    window.linksp1.style.transform = "scale(0)"
    window.linksp2.style.transform = "scale(0)"
    window.linksp3.style.transform = "scale(1)"
    window.linksp4.style.transform = "scale(0)"
    window.linksp5.style.transform = "scale(0)"
}
sp4.onclick = function () {
    window.linksp1.style.transform = "scale(0)"
    window.linksp2.style.transform = "scale(0)"
    window.linksp3.style.transform = "scale(0)"
    window.linksp4.style.transform = "scale(1)"
    window.linksp5.style.transform = "scale(0)"
}
sp5.onclick = function () {
    window.linksp1.style.transform = "scale(0)"
    window.linksp2.style.transform = "scale(0)"
    window.linksp3.style.transform = "scale(0)"
    window.linksp4.style.transform = "scale(0)"
    window.linksp5.style.transform = "scale(1)"
}
// end-sp
