function verificarNumero(num){
    return new Promise((resolve, reject)=>{
       
        if ((Math.random() * 10) <= 5)
            return (console.log("Numero baixo!"));

        else{
            return(console.log("Numero alto!"))
        }
    })
}

console.log(verificarNumero(Math.random() * 10));