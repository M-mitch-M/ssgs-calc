# SSGS Calculator
## Descrizione

Il programma implementa le quattro operazioni matematiche fondamentali:
- Addizione (`+`)
- Sottrazione (`-`)
- Moltiplicazione (`*`)
- Divisione (`/`)
- Potenza (`^`)

## Requisiti

Assicurati di avere installato **Node.js** versione `>=22.14.0`. Puoi verificare la versione di Node.js installata sul tuo sistema con il comando:

```bash
node -v
```

Se la versione non è compatibile, scarica e installa una versione aggiornata da [Node.js Official Website](https://nodejs.org).

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
1. Assicurati che lo script per i test sia configurato nel file `package.json`:
    ```json
    "scripts": {
        "test": "jest"
    }
    ```
2. Esegui i test:
    ```bash
    npm test
    ```
3. Coverage
    Per generare un report di coverage dei test:

    1. Assicurati che Jest sia configurato per la coverage nel file `package.json`:
        ```json
        "scripts": {
            "test": "jest --coverage"
        }
        ```
    2. Esegui il comando:
        ```bash
        npm test
        ```
    3. Il report di coverage sarà generato nella directory `coverage/`.

## Test Automatici con GitHub Actions

Questo progetto utilizza **GitHub Actions** per eseguire i test automaticamente ad ogni push o pull request sul ramo *main*. La configurazione del workflow si trova nel file `.github/workflows/automated-tests.yml` e può anche essere azionato manualmente nella sezione **Actions**
