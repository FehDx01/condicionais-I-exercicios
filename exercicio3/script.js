const receberNacionalidade = () => {

    const nacionalidade = prompt('Escreve aqui sua nacionalidade')

    if (nacionalidade === "brasileira") {
        console.log('Você é Brasileiro');
    } else if (nacionalidade === "argentina") {
        console.log('Você é Argentino');
    } else if (nacionalidade === "uruguaia") {
        console.log('Você é Uruguaio');
    } else if (nacionalidade === "chilena") {
        console.log('Você é Chileno');
    } else if (nacionalidade === "colombiana") {
        console.log("Você é colombiano");
    } else
        console.log('nacionalidade não encontrada');

}
receberNacionalidade()



