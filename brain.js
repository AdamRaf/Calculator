let ipt = false;
let val = 0;

function input(x) {
    document.getElementById("line").value += x;
    ipt = true;
}

function clr() {
    document.getElementById("line").value = '';
    ipt = false;
}

function clc() {
    let a = eval(document.getElementsByClassName("monitor equation")[0].value);
    if (ipt == true){
        document.getElementsByClassName("monitor total")[0].value = a;
    } else {
        alert("input something");
    }
}

function act(q) {
    let eq = document.getElementsByClassName("monitor equation")[0].value;
    console.log(`eq = ${eq}`);
    let last = eq.charAt(eq.length-1);
    console.log(`last = ${last}`);
    let eva = eval(document.getElementsByClassName("monitor equation")[0].value);
    if(last == "/" || last == "*" || last == "-" || last == "+"){
        document.getElementsByClassName("monitor equation")[0].value = document.getElementsByClassName("monitor equation")[0].value.substring(0, eq.length-1);
        document.getElementsByClassName("monitor equation")[0].value += q;
    } else {
        document.getElementsByClassName("monitor equation")[0].value += q;
    }
    document.getElementsByClassName("monitor total")[0].value = eva;
}