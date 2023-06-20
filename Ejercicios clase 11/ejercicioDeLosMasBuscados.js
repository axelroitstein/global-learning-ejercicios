listaDeLosMasBuscados = ["Juan", "Santiago","Luis","Carlos","Miguel","Jorge","Fernando","Pedro","Andrés","Daniel"]
for(i=0;i<listaDeLosMasBuscados.length;i++){
    console.log(listaDeLosMasBuscados[i]);
    if(i === 3 && (listaDeLosMasBuscados[i] === "Juan" || listaDeLosMasBuscados[i] === "Pedro") || i === 7 && (listaDeLosMasBuscados[i] === "Juan" || listaDeLosMasBuscados[i] === "Pedro")){
        console.log("El hacker está en la posición " + i + " de la lista y su nombre es" + listaDeLosMasBuscados[i]);
        break;
    }
    }

/*
do{
    console.log(listaDeLosMasBuscados[i]);
}while(i!== 3 && listaDeLosMasBuscados[i] !== "Juan" || listaDeLosMasBuscados[i] !== "Pedro" || i!== 7 && listaDeLosMasBuscados[i] !== "Juan" || listaDeLosMasBuscados[i] !== "Pedro");    
*/

/*
for(i=0;i<listaDeLosMasBuscados.length;i++){
    if(i!== 3 && listaDeLosMasBuscados[i] !== "Juan" || listaDeLosMasBuscados[i] !== "Pedro" || i!== 7 && listaDeLosMasBuscados[i] !== "Juan" || listaDeLosMasBuscados[i] !== "Pedro"){
        console.log(listaDeLosMasBuscados[i]);    
    }else if(i === 3 && listaDeLosMasBuscados[i] !== "Juan" || listaDeLosMasBuscados[i] !== "Pedro"){
        console.log("El hacker es" + listaDeLosMasBuscados[i]);
        break;
    }else if(i === 7 && listaDeLosMasBuscados[i] !== "Juan" || listaDeLosMasBuscados[i] !== "Pedro"){
        console.log("El hacker es" + listaDeLosMasBuscados[i]);
        break;
    }
}*/