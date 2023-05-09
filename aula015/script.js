function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if(fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Veifique os dados e tente novamente!')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)        
        var img = document.createElement('img')
        img.setAttribute('id','foto')

        var genero =  ''
        if (fsex[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade <= 1){
                //bebe
                img.setAttribute('src', 'imagens/bebeM.png')
            } else if (idade >= 2 && idade <=10){
                //crianca
                img.setAttribute('src','imagens/criancaM.png')
            } else if (idade <=16){
                //adolescente
                img.setAttribute('src','imagens/menino.png')
            } else if (idade <=30){
                //jovem 1
                img.setAttribute('src', 'imagens/jovemM.png')
            } else if (idade <= 55){
                //jovem maduro
                img.setAttribute('src','imagens/homem.png')
            } else{
                //pessoa de idade
                img.setAttribute('src','imagens/senhor.png')
            }

        } else if (fsex[1].checked){
            genero = 'Mulher'
            if(idade >= 0 && idade <= 1){
                //bebe
                img.setAttribute('src', 'imagens/bebeF.png')
            } else if (idade >= 2 && idade <=10){
                //crianca
                img.setAttribute('src','imagens/criancaF.png')
            } else if (idade <=15){
                //adolescente
                img.setAttribute('src','imagens/menina.png')
            } else if (idade <=30){
                //jovem 1
                img.setAttribute('src', 'imagens/jovemF.png')
            } else if (idade <= 55){
                //jovem maduro
                img.setAttribute('src','imagens/mulher.png')
            } else{
                //pessoa de idade
                img.setAttribute('src','imagens/senhora.png')
            }          
            
            
            
        }
        
        res.style.textAlign = 'center'
        res.innerHTML = `Você é <strong>${genero}</strong> com <strong>${idade}</strong> anos.`        
        
        res.appendChild(img)        
        
    }
}