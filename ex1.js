function trouverNombresArmstrong() {
    let compteur = 0;
    for (let A = 1; A <= 9; A++) {
        for (let B = 1; B <= 9; B++) {
            for (let C = 1; C <= 9; C++) {
                let nombre = A * 100 + B * 10 + C;
                let sommeCubes = (A * A * A) + (B * B * B) + (C * C * C);
                if (nombre === sommeCubes) {
                    console.log(` Trouvé : ${nombre} = ${A}³ + ${B}³ + ${C}³`);
                    compteur++;
                }
            }
        }
    }
    console.log(` Nombre total de solutions trouvées : ${compteur}`);
}
trouverNombresArmstrong();
