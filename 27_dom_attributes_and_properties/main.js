document.body.sayHi = () => console.log('Hello');

console.log(btn.id);
console.log(btn['test-id']);

console.log(display.type);
console.log(document.body.type);


console.log(btn.getAttribute('Test-id'));
console.log(typeof btn.getAttribute('Test-id'));

console.log(input.checked);

function changeTheme() {
  document.body.dataset.theme = this.dataset.theme; // btnDark.dataset.theme
}

btnDark.onclick = changeTheme; // btnDark.changeTheme();
btnLight.onclick = changeTheme;

/*
ДЗ

27.a Дан HTML
<div class="product" data-id="1" data-category="phone">
  iPhone
</div>

<div class="product" data-id="2" data-category="laptop">
  MacBook
</div>

<div class="product" data-id="3" data-category="phone">
  Samsung
</div>

********
Задание: при клике выводить:

Товар: iPhone
ID: 1
Категория: phone

и.д
 */