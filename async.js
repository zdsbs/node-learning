async = require('async');

async.each([1,2,3,4], function(n,callback) {
  console.log(n);
  callback();
//  while(true) {}
});

setTimeout(function(){console.log("start")},0);
setTimeout(function(){console.log("end")},1000);

q = async.queue(function(task,callback){
  console.log(task);
  //while(true){}
  callback();
},1);

q.pause();
console.log("paused");
q.push('a');
q.push('b');
console.log('resumed');
q.resume();

async.parallel([
  function(callback){
    console.log("p1");
    sleep.sleep(5);
    callback();
  },
  function(callback){
    console.log("p2");
    callback();
  },]);



