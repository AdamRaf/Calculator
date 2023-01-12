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
    let eq = document.getElementsByClassName("monitor equation")[0];
    console.log(`eq = ${eq.value}`);
    let last = eq.value.charAt(eq.value.length-1);
    console.log(`last = ${last}`);
    if(last == "/" || last == "*" || last == "-" || last == "+"){
        console.log(`q = ${q}`);
        if(q == "." || q == "(" || q == ")"){
            eq.value += q;
            console.log(eq.value);
        }
        eq.value = eq.value.substring(0, eq.value.length-1);
        console.log(eq.value);
    }
    eq.value += q;
    console.log(eq.value);
}

function del() {
    let eq = document.getElementsByClassName("monitor equation")[0];
    eq.value = eq.value.substring(0, eq.value.length-1);
}