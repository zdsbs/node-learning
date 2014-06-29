var time = process.hrtime();

var fork = require('child_process').fork;
var child = fork(__dirname + '/fork_child.js',
  [],
  {
    //pass over all the environemnt
    env:process.ENV,
    silent:false
  }
);

child.on('message',function(m) {
  console.log("PARENT GOT - " + m);
});

process.nextTick(function() {
  console.log("PARENT");
  console.log("PARENT - SEND");
  child.send("HI");
  console.log("PARENT - SENT");
});

var delay = 2000;
setTimeout(function(){
  console.log("PARENT - "+delay);
},delay);

process.on('exit', function() {
  console.log("PARENT - exit");
  console.log("PARENT - " + cur_time(time));
});

var killChild = function() {
  console.log("KILL");
};

process.on('SIGINT',function() {
  console.log("PARENT - SIGINT");
  child.kill("SIGINT");
});

process.on('SIGTERM',function() {
  console.log("PARENT - SIGTERM");
  child.kill('SIGTERM');
});
var cur_time = function(time) {
  var diff = process.hrtime(time);
  return miliseconds = Math.floor((diff[0]*1e9 + diff[1])/1000000);
}

