var http = require('http');
var fs = require('fs');
var express = require("express");
var app = express();
app.use(express.static('audio/'));

list_video=[];
var fn= fs.readdir('audio/', function (err, files) {
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    }
        files.forEach(function (file) {
        list_video.push(file)
    });
   });


app.get('/', function(req, res){
  console.log('connected');  
  var rand_num= Math.floor(Math.random()*Math.floor(list_video.length));
  var random_select_file= list_video[rand_num];
  var readerStream = fs.createReadStream("audio/"+random_select_file);
  readerStream.pipe(res);
  console.log("playing: "+random_select_file);
  
  

});

app.listen(3000, (req,res) => {
  console.log("listening on 3000");
});
