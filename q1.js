function formatarContato(contato){
    return(console.log(`Nome: ${contato.nome}, E-mail: ${contato.email}, telefone: ${contato.telefone}`))
};

let ctt = {nome: "Juliana Cristina", email: "julicris@gmail.com", telefone: 988956414};

console.log(formatarContato(ctt));