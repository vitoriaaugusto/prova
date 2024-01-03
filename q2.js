function CapitalizarTitulos(txt){
    return txt.map(frase => frase.split(',', 200))
};

let t = ["A metarmofose, o grão de areia, capitães de areia"]

console.log(CapitalizarTitulos(t))