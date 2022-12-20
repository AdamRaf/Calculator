let ipt = false;

function input(x) {
    document.getElementById("line").value += x;
    let eva = eval(document.getElementsByClassName("monitor equation")[0].value);
    document.getElementsByClassName("monitor total")[0].value = eva;
    ipt = true;
}

function clr() {
    document.getElementsByClassName("monitor equation")[0].value = '';
    document.getElementsByClassName("monitor total")[0].value = '';
    ipt = false;
}

function clc() {
    let eva = eval(document.getElementsByClassName("monitor equation")[0].value);
    if (ipt == true){
        document.getElementsByClassName("monitor total")[0].value = eva;
    } else {
        alert("input something");
    }
}

function act(q) {
    let eq = document.getElementsByClassName("monitor equation")[0].value;
    console.log(`eq = ${eq}`);
    let last = eq.charAt(eq.length-1);
    console.log(`last = ${last}`);
    if(last == "/" || last == "*" || last == "-" || last == "+"){
        console.log(`q = ${q}`);
        if(q == "." || q == "(" || q == ")"){
            document.getElementsByClassName("monitor equation")[0].value += q;
            console.log(document.getElementsByClassName("monitor equation")[0].value);
        }
        document.getElementsByClassName("monitor equation")[0].value = document.getElementsByClassName("monitor equation")[0].value.substring(0, document.getElementsByClassName("monitor equation")[0].value.length-1);
        console.log(document.getElementsByClassName("monitor equation")[0].value);
    }
    document.getElementsByClassName("monitor equation")[0].value += q;
    console.log(document.getElementsByClassName("monitor equation")[0].value);
}

function del() {
    let eq = document.getElementsByClassName("monitor equation")[0].value;
    document.getElementsByClassName("monitor equation")[0].value = document.getElementsByClassName("monitor equation")[0].value.substring(0, eq.length-1);
}