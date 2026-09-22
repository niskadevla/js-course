function updateStyle(){
  // title.style.top = `${Math.random() * 100}px`;
  // title.style.backgroundColor = 'red';

  title.style.cssText = `
    top: ${Math.random() * 100}px;
    left: ${Math.random() * 100}px;
    position: fixed;
  `
}

function updateClass() {
  // document.body.className = 'big dark';
  document.body.classList.toggle('dark');
}

console.log('color =', title.style.color);

const computedStyle = getComputedStyle(title);
console.log(computedStyle.color);



/*
ДЗ
28a
Добавить и удалить класс
Дан элемент:

<p id="text" class="text active">Какой-то текст</p>

Сделайте так, чтобы:
Сначала удалить класс active.
Через 2 секунды снова добавить класс active.

Подсказка
Используйте:
classList.add()
classList.remove()
 */