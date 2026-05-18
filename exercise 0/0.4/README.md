```mermaid
sequenceDiagram
    participant browser
    participant server

    Note over browser: Usuário escreve a nota e clica em "Save"

    browser->>server: POST [https://studies.cs.helsinki.fi/exampleapp/new_note](https://studies.cs.helsinki.fi/exampleapp/new_note)
    Note right of server: Servidor salva a nota e solicita redirecionamento
    server-->>browser: HTTP 302 Redirect to /notes

    Note over browser: O navegador recarrega a página de notas

    browser->>server: GET [https://studies.cs.helsinki.fi/exampleapp/notes](https://studies.cs.helsinki.fi/exampleapp/notes)
    server-->>browser: HTML document

    browser->>server: GET [https://studies.cs.helsinki.fi/exampleapp/main.css](https://studies.cs.helsinki.fi/exampleapp/main.css)
    server-->>browser: main.css

    browser->>server: GET [https://studies.cs.helsinki.fi/exampleapp/main.js](https://studies.cs.helsinki.fi/exampleapp/main.js)
    server-->>browser: main.js

    Note right of browser: O browser busca o JSON para atualizar a lista

    browser->>server: GET [https://studies.cs.helsinki.fi/exampleapp/data.json](https://studies.cs.helsinki.fi/exampleapp/data.json)
    server-->>browser: [{ "content": "Sua nota", "date": "2026-05-07" }, ... ]

    Note right of browser: O navegador renderiza as notas na tela