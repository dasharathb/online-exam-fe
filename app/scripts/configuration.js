"use strict";

 angular.module("config", [])

.constant("ENV", {
  "name": "development",
  "debug": true,
  "services": {
    "uri": {
      "online": "http://192.168.1.7:9030/online-exam-server",
      "qPresence": "https://presence.q.att.com"
    },
    "endpoints": {
      "online": {
        "admin": "/admin",
        "regUser": "/regUser",
        "login": "/login",
        "qPaper": "/saveQuestions",
        "getPaper": "/getPaper",
        "viewPaper": "/viewPaper",
        "qpId": "/qpId",
        "examStatus": "/examStatus",
        "rrbPaper": "/rrbPaper",
        "sscPaper": "/sscPaper",
        "gatePaper": "/gatePaper",
        "bankPaper": "/bankPaper",
        "rrbId": "/rrbId",
        "rrbview": "/rrbview",
        "sscId": "/sscId",
        "sscview": "/sscview",
        "gateId": "/gateId",
        "gateview": "/gateview",
        "bankId": "/bankId",
        "bankview": "/bankview"
      },
      "qPresence": {
        "presence": "/presence"
      }
    }
  }
})

;