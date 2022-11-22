function contar10segundos(){
    let contador = 1;
    let timerId = setInterval(()=>{
        console.log(contador++)} , 1000);
    
    setTimeout(() => clearInterval(timerId), 11000);
}

contar10segundos();


