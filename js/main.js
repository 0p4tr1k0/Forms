let ctverecA = 0;
let obdelnikA = 0;
let obdelnikB = 0;
let trojuhelnikA = 0;
let trojuhelnikV = 0;
let kruhP = 0;
let Vysledek = document.getElementById('Vysledek')
/*document.getElementById('ctverecOBS').addEventListener('click',function(){
    ctverecA = document.getElementById('ctverecA').value;

    function obsah(a){
        return a*a;
    }
 document.getElementById('Vysledek').innerHTML = "<p>" + obsah(ctverecA).toFixed(2) + " cm^2 </p>"
 ctverecA = 0;
});*/
document.getElementById('ctverecklik').addEventListener('click',function(){
    ctverecA = document.getElementById('ctverecOBS').value;
    Vysledek.value = obsah(ctverecA);
})
function obsah(a){
    return a*a;
}