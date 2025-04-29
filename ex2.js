let montant = 369;
let billets = [200, 100, 50, 20, 10, 5, 2, 1];
let renduMonnaie = {};

billets.forEach(function(item) {
    let nbBillets = Math.floor(montant / item);
    if (nbBillets > 0) {
        renduMonnaie[item] = nbBillets;
        montant -= nbBillets * item;
    }
});

console.log("Monnaie rendue :");
for (let billet in renduMonnaie) {
    console.log('${renduMonnaie[billet]} x ${billet}€');
}
