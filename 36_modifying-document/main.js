const box = document.createElement('div');
box.className = 'box';
box.textContent = 'Новый элемент';

document.body.append(box);

const second = document.getElementById('second');
// second.remove();
//
// title.after(ad);

let ad2 = ad.cloneNode(true);
ad2.querySelector('strong').textContent = 'Ваша реклама';
ad.after(ad2)