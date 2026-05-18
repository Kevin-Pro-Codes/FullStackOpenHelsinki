```mermaid

sequenceDiagram

&#x20;   participant browser

&#x20;   participant server



&#x20;   Note over browser: Usuário escreve a nota e clica em "Save"



&#x20;   browser->>server: POST \[https://studies.cs.helsinki.fi/exampleapp/new\_note](https://studies.cs.helsinki.fi/exampleapp/new\_note)

&#x20;   Note right of server: Servidor salva a nota e solicita redirecionamento

&#x20;   server-->>browser: HTTP 302 Redirect to /notes



&#x20;   Note over browser: O navegador recarrega a página de notas



&#x20;   browser->>server: GET \[https://studies.cs.helsinki.fi/exampleapp/notes](https://studies.cs.helsinki.fi/exampleapp/notes)

&#x20;   server-->>browser: HTML document



&#x20;   browser->>server: GET \[https://studies.cs.helsinki.fi/exampleapp/main.css](https://studies.cs.helsinki.fi/exampleapp/main.css)

&#x20;   server-->>browser: main.css



&#x20;   browser->>server: GET \[https://studies.cs.helsinki.fi/exampleapp/main.js](https://studies.cs.helsinki.fi/exampleapp/main.js)

&#x20;   server-->>browser: main.js



&#x20;   Note right of browser: O browser busca o JSON para atualizar a lista



&#x20;   browser->>server: GET \[https://studies.cs.helsinki.fi/exampleapp/data.json](https://studies.cs.helsinki.fi/exampleapp/data.json)

&#x20;   server-->>browser: \[{ "content": "Sua nota", "date": "2026-05-07" }, ... ]



&#x20;   Note right of browser: O navegador renderiza as notas na tela



