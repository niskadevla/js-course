function sayHi() {
  console.log('Hi!');
}

btn_2.onclick = sayHi;

btn_1.onclick = function () {
  console.log('Hi!')
}

// btn_3.addEventListener('click', sayHi, {once: true} );
btn_3.addEventListener('click', sayHi);
btn_3.addEventListener('click', () => console.log('Hello'), );

btn_3.removeEventListener('click', sayHi);

btn_3.addEventListener('click',function(event) {
  console.log(event.currentTarget)
});