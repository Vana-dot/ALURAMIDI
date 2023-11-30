// Função para tocar som 
function tocaSom(seletorAudio){ 
    const elemento = document.querySelector(seletorAudio);
    
    if(elemento && elemento.localName === 'audio'){
        elemento.play();
    }else{
        console.log('Elemento nao informado ou seletor invalido');
    }
}

const listaDeTeclas = document.querySelectorAll('.tecla');

for (let contador = 0;contador < listaDeTeclas.length;contador++){  // Vai percorrer todos as teclas do som

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;

    tecla.onclick = function(){// vai reproduzir o som ao clicar em uma tecla especifica
        tocaSom(idAudio);
        
    }
    
    // Ativação do botão ao aperta teclas além do mouse
    tecla.onkeydown = function (evento){
        let code = evento.code;
        if(code === 'NumpadEnter' || code === 'Space'){
            tecla.classList.add('ativa');
        }
    }
    tecla.onkeyup = function(){
        tecla.classList.remove('ativa');
    }

    
}
