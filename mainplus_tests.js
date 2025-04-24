function operations(op, num1, num2) {
    if (op !== '+' && op !== '-' && op !== '*' && op !== '/') 
    {
        return ('Operazione non valida!');
    }

    if (isNaN(num1)) 
    {
        return ('Ciò che hai inserito non è un numero!');
    }
    
    if (isNaN(num2)) 
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
        default:
            return ('Operazione non valida!');
    }
}

module.exports = { operations };
