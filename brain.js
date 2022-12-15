let act = false;

function input(x) {
    document.getElementById("line").value += x;
    act = true;
}

function clr() {
    document.getElementById("line").value = '';
    act = false;
}

function clc() {
    let a = eval(document.getElementById("line").value);
    if (act == true){
        document.getElementById("line").value = a;
    } else {
        alert("input something");
    }
}