```mermaid
sequenceDiagram
    participant browser
    participant server

    Note right of browser: The browser executes the event handler to prevent default form submission
    Note right of browser: The JS code adds the new note to the list and rerenders the note list locally

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    activate server
    Note left of server: The server saves the new note and returns a success status code
    server-->>browser: 201 Created (JSON: {"message":"note created"})
    deactivate server
