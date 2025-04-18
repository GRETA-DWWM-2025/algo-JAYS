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