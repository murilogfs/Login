function salvarDados() {
    var nome = document.getElementById('nome').value;
    var senha = document.getElementById('senha').value;

    var nomeC = 'murilo';
    var senhaC = '123';

    if ((senha === senhaC)&&(nome === nomeC)){
        window.location = "outro.html"

    }else{
        alert('Senha ou usuario Incorreto')
    }

}

