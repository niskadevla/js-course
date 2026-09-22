function sayHi() {
  console.log('Hi');
}

btn.onclick = sayHi;

btn.onclick = function() {
  console.log(2)
}

btn.onclick = null;