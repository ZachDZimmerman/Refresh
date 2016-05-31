// function fullScreen(element) {
//   var newElement = document.createElement(element);
//   newElement.style.height = '100vh';
//   document.body.appendChild(newElement);
//   return newElement;
// }
//
// function input(inputType, DOMElement, callback) {
//   DOMElement.addEventListener(inputType, function (event) {
//     var x = event.clientX;
//     var y = event.clientY;
//     callback(DOMElement, x, y);
//   });
// }
//
// function output (element, x, y) {
//   element.textContent = x + ', ' + y;
//   element.style.backgroundColor = 'rgb(' + x + ', ' + y + ', 100)';
// }
//
// input('mousemove', fullScreen('BODY'), output);
//
//

// HeXCLock
// document.ready(function() {

  // function time() {
  //   var date = new Date();
  //   var hours = date.getHours();
  //   var minutes = date.getMinutes();
  //   var seconds = date.getSeconds();
  //   var array = [hours, minutes, seconds].map(function(num) {
  //     return num < 10 ? '0' + num: String(num);
  //   });
  //   hours = array[0]
  //   minutes = array[1];
  //   seconds = array [2];
  //
  //   return hours + minutes + seconds;
  // }
  //
  // console.log(time());

  // function output(time) {
  //   var color = '#' + time;
  //   document.body.backgroundColor = color;
  //   document.body.style.height = '100vh';
  //   document.body.textContent = color;
  //   document.body.style.color = 'white';
  // }
  //
  // function startClick(callback) {
  //   document.body.addEventListener('dblclick', function(event) {
  //   callback();  //clearInterval(tick);
  //   });
  // }
  //
  // function stopClick(callback, name) {
  //   document.body.addEventListener('click', function(event) {
  //     callback(name);  //clearInterval(tick);
  //   });
  // }
  //
  // function init() {
  //   var tick = setInterval(function() {
  //     output(time())
  //   },1000);
  //   stopClick(clearInterval, tick);
  //   startClick(init);
  // }
  //
  // init();
// })
