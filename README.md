# ***NotifyKeepServer***
### ***[PL]***
Prosty wieloplatformowy skrypt powiadamiający o miejscu na dysku dla *Node.js*.

- Działa na Windows, Linux oraz macOS
- Odbiera informację od *NotifyKeepClient* poprzez *WebSocket*

---

### ***[ENG]***
Easy multi-platform notificator script about disk space for *Node.js*.

- Works on Windows, Linux and macOS
- Receive informaton from *NotifyKeepClient* via *WebSocket*

## Działanie / Usage

---

### Port dla Servera / Server's port:
```json
"port": "0000"
```

---

### Ustawienia obsługi emaili / Email handling settings:
```json
"sender": "youremail@gmail.com",
"SMTP":
    {
        "host": "smtp.example.com",
        "port": 123,
        "auth":
            {
                "user": "[USERNAME]",
                "pass": "[PASSWORD]" 
            }
    }
```

---

### Czas zapytania o dane / Time of data request:
```json
"ask_time":
    {
        "hour": 23,
        "minute": 50
    }
```

---

### Czas wysyłania emaila / Time of sending the email:
```json
"send_time": 
    {
        "hour": 0,
        "minute": 0
    }
```