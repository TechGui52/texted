function bold() {
    document.getElementById("textarea1").style.fontWeight = "bold";
}
function italic() {
    document.getElementById("textarea1").style.fontStyle = "italic";
}
function left() {
    document.getElementById("textarea1").style.textAlign ="left";
}
function center() {
    document.getElementById("textarea1").style.textAlign ="center";
}
function right() {
    document.getElementById("textarea1").style.textAlign ="right";
}
function lowercase() {
    document.getElementById("textarea1").style.textTransform ="lowercase";
}
function uppercase() {
    document.getElementById("textarea1").style.textTransform ="uppercase";
}
function capitalize() {
    document.getElementById("textarea1").style.textTransform="capitalize"
}
function clean() {
    document.getElementById("textarea1").value="";
    document.getElementById("textarea1").style.fontWeight="normal";
    document.getElementById("textarea1").style.fontStyle="normal";
    document.getElementById("textarea1").style.textAlign="left";
    document.getElementById("textarea1").style.textTransform="none";
}
