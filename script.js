function verHoroscopo() {
    var signo = document.getElementById("signo").value;
    var nome = "";
    var texto = "";
    var cor = "";
    var imagem = "";

    if (signo == "aries") {
        nome = "Áries";
        texto = "Dia de tomar iniciativas e liderar novos projetos com coragem.";
        cor = "#FF4D4D";
        imagem = "imagens/aries.svg";
    } else if (signo == "touro") {
        nome = "Touro";
        texto = "Mantenha o foco nos objetivos e aproveite momentos de conforto.";
        cor = "#4CAF50";
        imagem = "imagens/touro.svg";
    } else if (signo == "gemeos") {
        nome = "Gêmeos";
        texto = "Ótimo dia para comunicação, trocas de ideias e novos aprendizados.";
        cor = "#00BCD4";
        imagem = "imagens/gemeos.svg";
    } else if (signo == "cancer") {
        nome = "Câncer";
        texto = "Valorize os laços familiares e momentos de intuição e sensibilidade.";
        cor = "#9C27B0";
        imagem = "imagens/cancer.svg";
    } else if (signo == "leao") {
        nome = "Leão";
        texto = "Seu brilho pessoal está em alta. Aproveite para demonstrar seus talentos.";
        cor = "#FF9800";
        imagem = "imagens/leao.svg";
    } else if (signo == "virgem") {
        nome = "Virgem";
        texto = "Organização e atenção aos detalhes farão toda a diferença hoje.";
        cor = "#8BC34A";
        imagem = "imagens/virgem.svg";
    } else if (signo == "libra") {
        nome = "Libra";
        texto = "Busque o equilíbrio nas relações e evite decisões impulsivas.";
        cor = "#E91E63";
        imagem = "imagens/libra.svg";
    } else if (signo == "escorpiao") {
        nome = "Escorpião";
        texto = "Transformações positivas estão a caminho. Confie na sua intuição.";
        cor = "#4A148C";
        imagem = "imagens/escorpiao.svg";
    } else if (signo == "sagitario") {
        nome = "Sagitário";
        texto = "Dia favorável para planejar viagens e expandir seus horizontes.";
        cor = "#FF5722";
        imagem = "imagens/sagitario.svg";
    } else if (signo == "capricornio") {
        nome = "Capricórnio";
        texto = "A disciplina e a determinação serão suas maiores aliadas no trabalho.";
        cor = "#607D8B";
        imagem = "imagens/capricornio.svg";
    } else if (signo == "aquario") {
        nome = "Aquário";
        texto = "Pense fora da caixa e busque soluções inovadoras para seus desafios.";
        cor = "#2196F3";
        imagem = "imagens/aquario.svg";
    } else if (signo == "peixes") {
        nome = "Peixes";
        texto = "Use sua criatividade e reserve um tempo para cuidar de você.";
        cor = "#80CBC4";
        imagem = "imagens/peixes.svg";
    } else {
        nome = "Seu horóscopo";
        texto = "Escolha um signo e clique no botão!";
        cor = "lightgray";
        imagem = "imagens/inicio.svg";
    }

    document.getElementById("nome").innerText = nome;
    document.getElementById("previsao").innerText = texto;
    document.getElementById("imagem").src = imagem;
    document.getElementById("imagem").alt = nome;
    document.getElementById("cartao").style.backgroundColor = cor;
}
