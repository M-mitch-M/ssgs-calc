const readline = require('node:readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function operations(op, num1, num2) {

    if (isNaN(num1) || isNaN(num2)) 
    {
        return ('Ciò che hai inserito non è un numero!');
    }

    switch (op) 
    {
        case '+':
            return parseFloat(num1) + parseFloat(num2);
        case '-':
            return parseFloat(num1) - parseFloat(num2);
        case '*':
            return parseFloat(num1) * parseFloat(num2);
        case '/':
            if (parseFloat(num2) === 0) 
            {
                return 'Errore: Divisione per zero!';
            } 
            else 
            {
                return (parseFloat(num1) / parseFloat(num2));
            }
        case '^':
            return Math.pow(parseFloat(num1), parseFloat(num2));
        default:
            return ('Operazione non valida!');
    }
}

module.exports = { operations };

function inputRequest() {
rl.question('Ciao, Benvenuto, scegli una operazione tra quelle supportate: +, -, *, /, ^ : ', op => {

  rl.question('Inserisci il primo numero: ', num1 => {

    rl.question('Inserisci il secondo numero: ', num2 => {

      let result = operations(op, num1, num2);

      console.log(`${result}`);

      rl.question('Vuoi continuare con altre operazioni? Scrivi y oppure premi un altro pulsante per terminare: ', ans => {
        if (ans !== 'y') {
          console.log('Ciao, alla prossima!');
          rl.close();
        }
        else
        {
            inputRequest();
        }

    });
  });
});
});
}

inputRequest();
