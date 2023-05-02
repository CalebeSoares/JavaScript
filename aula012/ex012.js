//var agora = new Date()
//var hora = agora.getHours()
var hora = 00
console.log(`Agora são ${hora} horas.`)

if (hora > 5 && hora < 12){
    console.log('Bom Dia')
}else if(hora > 12 && hora < 18){
    console.log('Boa Tarde')
}else if(hora > 18 && hora < 23){
    console.log('Boa Noite')
}else {
    console.log('Boa Madrugada')
}