function randomIntFromInterval(min, max) { // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
}

let t=["Said","Alexandre","Yusuf","Steve","Alexis","Tristan","Yousra","Mariam","Killian","Jason"]

// boucle de 10
for(i=0; i<9; i=i+1) {
    // Récuềre 2 nombres aléatoires
  let  i1 = randomIntFromInterval(0,9)
  let  i2 = randomIntFromInterval(0,9)
    // Stoque les 2 valeurs
  let  v1 = t[i1]
   let v2 = t[i2]

    // Ré écriture en inversant
   t[i2] = v1
    t[i1] = v2


}
console.log("1 -",t[0],t[1],t[2])
console.log("2 -",t[3],t[4], t[5])
console.log("3 -",t[6],t[7], t[8], t[9])

function fibonacci(n) {
    let sequence = [0, 1]; // Les deux premiers termes de la suite

    for (let i = 2; i < n; i++) {
        sequence.push(sequence[i - 1] + sequence[i - 2]); // Somme des deux précédents
    }

    return sequence;
}

console.log(fibonacci(10)); // Affiche les 10 premiers termes
function afficherTriangle(n) {
    for (let i = 1; i <= n; i++) {
        console.log('*'.repeat(i)); // Répète le caractère '*' i fois
    }
}

afficherTriangle(5); // Affiche un triangle de 5 lignes

