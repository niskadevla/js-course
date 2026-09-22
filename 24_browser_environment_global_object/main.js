var a = 5;

function foo() {
  console.log('foo');
}

console.log(window.a);
window.foo();

console.log(globalThis.a);

console.log(document)
console.dir(document);

document.body.style.background = 'red';

setTimeout(() => document.body.style.background = '', 2000);

console.log(window.navigator);

console.log(location.href)
// setTimeout(() => location.href = 'https://www.google.com/', 2000);