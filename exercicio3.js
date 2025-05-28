  let textoOriginal=document.getElementById('texto').textContent
        let campotexto=document.getElementById('campoTexto')
        let resultado = document.getElementById('resultado')
        let contador=document.getElementById('contador')
        let reiniciarButton= document.getElementById('reiniciar')

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
            tempo=0
            contador.textContent=tempo;
            campoTexto.value=''
            campoTexto.disabled=false;
            tempoIniciado= false
        }

        campotexto.addEventListener('input', function(){
            if(!tempoIniciado){
             iniciarTempo();
            }
            
            if(campotexto.value=== textoOriginal){
                clearInterval(intervalId)
                resultado.textContent= 'parabens,você é o melhor!'
                campotexto.disabled= true
            }
        })
        reiniciarButton.addEventListener('click',reiniciarJogo())