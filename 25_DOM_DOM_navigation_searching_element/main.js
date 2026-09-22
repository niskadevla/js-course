// document.body.style.color = 'green';
console.log(document.body)

// const button = document.getElementById('btn');
// console.log(button);

const button = document.querySelector('div button');
console.log(button);

const paragraphs = document.querySelectorAll('p');

console.log(paragraphs);

paragraphs.forEach(paragraph => console.log(paragraph));

const title = document.querySelector('h1');
console.log(title.tagName)
console.log(title.id);

const wrapper = document.querySelector('#container');

console.log(wrapper.innerHTML);

// wrapper.innerHTML = '<p>Новый текст</p>'

console.log(title.textContent);

console.log(document.body)
console.dir(document.body)



/* ДЗ
HTML:

```html
<div id="container">
  <h1>Мой сайт</h1>
  <p>Описание сайта</p>
  <button>Нажми</button>
</div>
```


1. нашли `div`;
2. получили его детей;
3. получили первого и последнего ребёнка;
4. нашли `h1`;
5. получили его текст;
6. изменили текст.

*/

