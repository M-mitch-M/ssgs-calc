const readline = require('node:readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function operations() {
rl.question('Ciao, Benvenuto, scegli una operazione tra quelle supportate: +, -, *, / : ', op => {

  if (op !== '+' && op !== '-' && op !== '*' && op !== '/') {
    console.log('Operazione non valida!');
    rl.close(); 
    return;
  }

  rl.question('Inserisci il primo numero: ', num1 => {
    if (isNaN(num1)) {
      console.log('Ciò che hai inserito non è un numero!');
      rl.close();
      return;
    }

    rl.question('Inserisci il secondo numero: ', num2 => {
      if (isNaN(num2)) {
        console.log('Ciò che hai inserito non è un numero!');
        rl.close();
        return;
      }

      switch (op) {
        case '+':
          console.log(`La somma è: ${parseFloat(num1) + parseFloat(num2)}`);
          break;
        case '-':
          console.log(`La differenza è: ${parseFloat(num1) - parseFloat(num2)}`);
          break;
        case '*':
          console.log(`Il prodotto è: ${parseFloat(num1) * parseFloat(num2)}`);
          break;
        case '/':
          if (parseFloat(num2) === 0) {
            console.log('Errore: Divisione per zero!');
          } else {
            console.log(`Il quoziente è: ${parseFloat(num1) / parseFloat(num2)}`);
          }
          break;
        default:
          console.log('Operazione non valida!');
      }

      rl.question('Vuoi continuare con altre operazioni? Scrivi y oppure premi un altro pulsante per terminare: ', ans => {
        if (ans !== 'y') {
          console.log('Ciao, alla prossima!');
          rl.close();
          return;
        }
        else
        {
            operations();
        }

    });
  });
});
});
}

operations();