let ctverecA = 0;
let obdelnikA = 0;
let obdelnikB = 0;
let trojuhelnikA = 0;
let trojuhelnikV = 0;
let kruhP = 0;
let Vysledek = document.getElementById('Vysledek')
function obsah(a){
    return a*a;
}
function obsahOBD(a,b){
    return a*b;
}
function obsahTROJ(a,b,){
    return a*b/2;
}
document.getElementById('ctverecklik').addEventListener('click',function(){
    ctverecA = document.getElementById('ctverecOBS').value;
    Vysledek.value = obsah(ctverecA);
})
document.getElementById('obdelniklik').addEventListener('click',function(){
    obdelnikA = document.getElementById('obdelnikOBS1').value;
    obdelnikB = document.getElementById('obdelnikOBS2').value;
    Vysledek.value = obsahOBD(obdelnikA,obdelnikB);
})
document.getElementById('trojklik').addEventListener('click',function(){
    trojuhelnikA = document.getElementById('trojuhelnikOBS1').value;
    trojuhelnikV = document.getElementById('trojuhelnikOBS2').value;
    Vysledek.value = obsahTROJ(trojuhelnikA,trojuhelnikV);
})
