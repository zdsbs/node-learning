EE = require('events').EventEmitter;
ee = new EE();

die = false;

disp = "";

ee.on('die',function() {
  disp = disp + "d";
  console.log(disp);
});

//setInterval(function() {
//  ee.emit('die');
//},400);

setInterval(function() {
  disp = disp + "[";
  console.log(disp);
},200);


setInterval(function() {
  disp = disp + ".";
  console.log(disp);
},200);

setInterval(function() {
  disp = disp + ".";
  console.log(disp);
  while(true) { }
},200);

