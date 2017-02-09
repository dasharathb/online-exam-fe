"use strict";

 angular.module("config", [])

.constant("ENV", {
  "name": "local",
  "debug": true,
  "services": {
    "uri": {
      "ht": "/home-tutions",
      "qPresence": "https://presence.q.att.com"
    },
    "endpoints": {
      "ht": {
        "admin": "/admin",
        "regUser": "/regUser"
      },
      "qPresence": {
        "presence": "/presence"
      }
    }
  }
})

;