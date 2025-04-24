# SSGS Calculator
## Descrizione

Il progetto include due versioni del programma:
- **Interattiva**: richiede input dall'utente durante l'esecuzione.
- **Non interattiva**: progettata per esecuzione automatizzata, ad esempio tramite test automatici o GitHub Actions.

Entrambe le versioni implementano le quattro operazioni matematiche fondamentali:
- Addizione (`+`)
- Sottrazione (`-`)
- Moltiplicazione (`*`)
- Divisione (`/`)

## Installazione

1. Clona il repository:
    ```bash
    git clone https://github.com/your-username/ssgs-calc.git
    ```
2. Accedi alla directory del progetto:
    ```bash
    cd ssgs-calc
    ```
3. Installa le dipendenze:
    ```bash
    npm install
    ```

## Utilizzo

Per eseguire la versione interattiva:
```bash
node mainplus_input.js
```

## Test

Per eseguire i test:
1. Installa Jest come dipendenza di sviluppo:
    ```bash
    npm install --save-dev jest
    ```
2. Assicurati che lo script per i test sia configurato nel file `package.json`:
    ```json
    "scripts": {
        "test": "jest"
    }
    ```
3. Esegui i test:
    ```bash
    npm test
    ```
4. Coverage
    Per generare un report di coverage dei test:

    1. Assicurati che Jest sia configurato per la coverage nel file `package.json`:
        ```json
        "jest": {
            "coverage": "jest --coverage"
        }
        ```
    2. Esegui il comando:
        ```bash
        npm run coverage
        ```
    3. Il report di coverage sarà generato nella directory `coverage/`.