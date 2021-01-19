var descricao = document.getElementById("descricao").innerText;
if(descricao.length > 157){
    var descricaoPai = document.getElementById("descricaoPai");
    var btnVerMais = document.createElement("button");
    descricaoPai.appendChild(btnVerMais);
    btnVerMais.innerText = "ver mais";
    btnVerMais.classList.add("btn-vermais");
    btnVerMais.addEventListener("click", leiaMais);
}

function leiaMais(){
    var pontos = document.getElementById("pontos");
    var maisTexto = document.getElementById("mais");
    if(pontos.style.display === "none"){
        pontos.style.display = "inline";
        maisTexto.style.display = "none";
        btnVerMais.innerText = "ver mais"
    } else{
        pontos.style.display = "none";
        maisTexto.style.display = "inline";
        btnVerMais.innerText = "ver menos";
    }
}