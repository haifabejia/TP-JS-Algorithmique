function rendreLaMonnaie(montant) {
    const billets = [200, 100, 50, 20, 10, 5, 2, 1];
    const rendu = {};

    billets.forEach(function(billet) {
        let nbBillets = Math.floor(montant / billet);
        if (nbBillets > 0) {
            rendu[billet] = nbBillets;
            montant -= nbBillets * billet;
        }
    });

    console.log("Monnaie à rendre :");
    for (let billet in rendu) {
        console.log('- ${rendu[billet]} x ${billet}€');
    }
}

rendreLaMonnaie(369);
