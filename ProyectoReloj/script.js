function calcularTiempo(){
     
    let tiempo = new Date();

    let hora = tiempo.getHours();
    let minuto = tiempo.getMinutes();
    let segundo = tiempo.getSeconds();


    hora = hora < 10 ? "0" + hora: hora;
    minuto = minuto < 10 ? "0" + minuto: minuto;
    segundo = segundo < 10 ? "0" + segundo: segundo;


    let pantallareloj = hora + ":" + minuto + ":" + segundo;
    let relojdigital = document.querySelector(".reloj");

    relojdigital.innerHTML = pantallareloj;
}

setInterval(calcularTiempo, 1000)

git init 
git add . 
git commit -m "mi tarea"  
git remote add origin https://github.com/soyjacortes/Reloj-Digital.git
git push   origin master  