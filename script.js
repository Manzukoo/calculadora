let primerN = 0
let segundoN = 0
let tipoC = undefined

function agregarNum(num){
    if(!tipoC){
        primerN ? primerN += num.id : primerN = num.id
        escribir(primerN)
    }else{
        segundoN ? segundoN += num.id : segundoN = num.id
        escribir(primerN + tipoC + segundoN)
    }
}

function calcular(tipo){
    escribir(primerN + tipo.id)
    return tipoC = tipo.id
}

function resultado(){
    if(!tipoC || !segundoN) return escribir(primerN)
    result = eval(primerN + tipoC + segundoN)
    reiniciar()
    primerN = result
    return escribir(result)
}

function escribir(valor){
    const pantalla = document.getElementById("pantalla")
    return pantalla.innerText = valor
}

function reiniciar(){
    primerN = 0
    segundoN = 0
    tipoC = undefined
    escribir(null)
}