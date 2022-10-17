const abas = document.querySelectorAll(".aba");

abas.forEach(aba => {
    aba.addEventListener("click", function() {

        if(aba.classList.contains("selecionado")){
            return;
        }

        selecionarAba(aba)

        mostarInformacoesDaAba(aba)
    });
})

function selecionarAba(aba) {
    const abaSelecionada = document.querySelector(".aba.selecionado");

    // remover seleção do elemento no menu
    abaSelecionada.classList.remove("selecionado");
    
    // selecionar elemento interagido do menu
    aba.classList.add("selecionado");
}

function mostarInformacoesDaAba(aba) {
    
    // esconder conteudo anterior
    const informacaoSelecionada = document.querySelector(".informacao.selecionado");
    informacaoSelecionada.classList.remove("selecionado");

    // mostrar novo conteudo selecionado
    const idDoElementoDeInformacoesDaAba = `informacao-${aba.id}`
        
    const informacaoASerMostrada = document.getElementById(idDoElementoDeInformacoesDaAba)
    informacaoASerMostrada.classList.add("selecionado")
}