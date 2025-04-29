for (let A = 1; A <= 9; A++) {
    for (let B = 1; B <= 9; B++) {
        for (let C = 1; C <= 9; C++) {
            let nombre = A * 100 + B * 10 + C;
            let sommeDesCubes = Math.pow(A, 3) + Math.pow(B, 3) + Math.pow(C, 3);
            if (nombre == sommeDesCubes) {
                console.log('Solution trouvée : ${A}${B}${C}');
            }
        }
    }
}
