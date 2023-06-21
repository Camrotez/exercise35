function printAsyncName(callback, name) {
    const time = setInterval(callback,1000);
    setTimeout(() => clearInterval(time),3000);
}


const call = () => {console.log("hello!");}

// essendo un comando molto semplice da eseguire, si può scrivere su una riga con l'arrow function


repeatHello(call);