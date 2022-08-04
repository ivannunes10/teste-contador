const express = require("express")

const path = require("path")

const app = express();

const appName = "portal-front"

app.use(express.static(__dirname + '/dist/portal-front'))

app.get('/*', function (req , res){


    res.sendFile(path.join((__dirname + '/dist/portal-front/index.html')))

});

app.listen(process.env.PORT || 8080)