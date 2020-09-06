var numeros = [1, 4, 23, -4, 'one', 6, 0, 1.1, 3.1415];

export default function resultOne(){
    var multix = numeros.map(elemento => {
        return elemento * 4;
    })
    console.log(multix);

    var numbFilter = multix.filter(mayor => {
        return mayor >= 8;
    });
    console.log(numbFilter);
    return numbFilter;
}