alert('Obsah kruhu nefunguje, nemohl jsem najít chybu ani s pomocí ostatních. Omluvte prosím tuto chybu.\nProsil bych dodatečně o radu, jak to upravit, aby to fungovalo, děkuji.')
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
function obsahTROJ(a,b){
    return a*b/2;
}
function obsahKRUH(c){
    let result = c * 2 * Math.PI;
    return result;
}
document.getElementById('ctverecklik').addEventListener('click',function(){
    ctverecA = document.getElementById('ctverecOBS').value;
    Vysledek.value = obsah(ctverecA) + " cm²";
})
document.getElementById('obdelniklik').addEventListener('click',function(){
    obdelnikA = document.getElementById('obdelnikOBS1').value;
    obdelnikB = document.getElementById('obdelnikOBS2').value;
    Vysledek.value = obsahOBD(obdelnikA,obdelnikB) + " cm²";
})
document.getElementById('trojklik').addEventListener('click',function(){
    trojuhelnikA = document.getElementById('trojuhelnikOBS1').value;
    trojuhelnikV = document.getElementById('trojuhelnikOBS2').value;
    Vysledek.value = obsahTROJ(trojuhelnikA,trojuhelnikV) + " cm²";
})
document.getElementById('kruhklik').addEventListener('click',function(){
    kruhP = document.getElementById('kruhOBS').value;
    Vysledek.value = obsah(kruhP) + " cm²";
})
console.log('Obsah kruhu nefunguje, nemohl jsem najít chybu ani s pomocí ostatních. Omluvte prosím tuto chybu.')
