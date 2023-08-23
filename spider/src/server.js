const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');

app.use('/', express.static(path.resolve(__dirname, '../dist')));

app.get('/', function (req, res) {
    const pathToHtmlFile = path.resolve(__dirname, '../dist/spider.html');
    const contentFromHtmlFile = fs.readFileSync(pathToHtmlFile, 'utf-8');
    res.send(contentFromHtmlFile);
});

app.listen(9002, function (){
    console.log('Application is running on https://localhost:9002/');
})