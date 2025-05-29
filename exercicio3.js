        const textoOriginal=document.getElementById('texto').textContent
        const campoTexto =document.getElementById('campoTexto')
        const resultado = document.getElementById('resultado')
        const contador=document.getElementById('contador')
        const reiniciarButton= document.getElementById('reiniciar')

        let tempoIniciado=false
        let tempo=0
        let intervalId;


        function iniciarTempo(){
            tempoIniciado=true
            intervalId=setInterval(function(){
                tempo++;
                contador.textContent=tempo;
            },1000)
        }

        function reiniciarJogo(){
            clearInterval(intervalId)
            tempo=0
            contador.textContent=tempo;
            resultado.textContent = '';
            campoTexto.disabled = false;
            tempoIniciado = false;
        }

        campotexto.addEventListener('input', function(){
            if(!tempoIniciado){
             iniciarTempo();
            }
            
            if(campotexto.value=== textoOriginal){
                clearInterval(intervalId)
                resultado.textContent= 'parabens,você é o melhor!';
                campotexto.disabled= true
            }
        })
        reiniciarButton.addEventListener('click',reiniciarJogo())
 