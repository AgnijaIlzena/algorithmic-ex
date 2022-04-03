/*
TTC 46.48
TVA 20% 7.75

TTC 10
TVA 1.67
8.33
xx.xx
*/

let ttc = 10;
function tvaCalcul(ttc){
    let tva = (ttc/120*20).toFixed(2);
    ttc = ttc.toFixed(2);
    return `Le montant est de ${ttc} TTC dont ${tva} de TVA`;
}

console.log(tvaCalcul(ttc));