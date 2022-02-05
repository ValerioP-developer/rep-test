//EXPRESS
const express = require('express');
//APP INSTANTIATION
const app = express();
//PUBLIC FOLDER SETTING
app.use(express.static('public'))
//FILE READER
fs = require('fs');
//ERRORS
/*
var logger = fs.createWriteStream('log/log.txt', {
  flags: 'a' // 'a' means appending (old data will be preserved)
})*/

const { resolve } = require('path');
//PATH CONFIGURATION
if (app.get('env') == 'development'){ 
  require('dotenv').config({ path: './.env' });
}

app.listen(process.env.PORT || 3000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});