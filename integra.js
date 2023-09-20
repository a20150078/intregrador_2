alert("Esta es la Trivia de la primavera. Escribe tu nombre:");
nom=prompt("Ingresa tu nombre");
document.write("El nombre ingresado es:",nom);
prgt1=prompt("¿Cómo se llama al primer día de la Primavera?\nA: Primer Día de la Primavera\nB: Equinoccio de Primavera\nC: Equinoccio de Invierno");
if (prgt1=="B"){
    prgt1=25
}
else{
    prgt1=0
}
preg2=prompt("¿Qué sucede en el Polo Norte cuando llega la Primavera?\nA: 6 meses de luz diurna ininterrumpida\nB: 6 meses de oscuridad inimterrumpida\nC: 6 meses de alternancia de luz y oscuridad")
if (preg2=="B"){
        preg2=25
    }
    else{
        preg2=0
    }
    puntaje=preg1+preg2;
    if (puntaje==50){
        document.write("En buena hora " , nom);
    }
       else{
        document.write("Todavia te falta " , nom);
       }