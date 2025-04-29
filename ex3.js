function verifierCarteLuhn(numeroCarte) {
    const digits = numeroCarte.slice(0, -1).split('').reverse();
    const checkDigit = parseInt(numeroCarte.charAt(numeroCarte.length - 1), 10);
    let somme = 0;

    digits.forEach(function(digit, index) {
        let num = parseInt(digit, 10);
        if (index % 2 === 0) {
            num *= 2;
            if (num > 9) num -= 9;
        }
        somme += num;
    });

    const calculCheckDigit = (10 - (somme % 10)) % 10;

    console.log(` Numéro testé : ${numeroCarte}`);
    console.log(` Chiffre de contrôle attendu : ${checkDigit}`);
    console.log(` Chiffre de contrôle calculé : ${calculCheckDigit}`);

    if (calculCheckDigit === checkDigit) {
        console.log("Carte valide selon l'algorithme de Luhn");
    } else {
        console.log(" Carte non valide selon l'algorithme de Luhn");
    }
}

verifierCarteLuhn("4539976741512043");
