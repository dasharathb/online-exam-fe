"use strict";

 angular.module("config", [])

.constant("ENV", {
  "name": "local",
  "debug": true,
  "services": {
    "uri": {
      "online": "http://localhost:9030/online-exam-server",
      "qPresence": "https://presence.q.att.com"
    },
    "endpoints": {
      "online": {
        "admin": "/admin",
        "regUser": "/regUser",
        "login": "/login"
      },
      "qPresence": {
        "presence": "/presence"
      }
    }
  }
})

;