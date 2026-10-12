/*
fetch('https://jsonplaceholder.typicode.com/posts/232321321321')
  .then(response => {
    if (!response.ok) {
      throw new Error('Loading error!!!');
    }
    return response.json();
    // return response.text();
    // return response.blob();
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.log('Errror!!! ' + error.message);

  })
*/

/*
fetch('message.txt')
  .then(response => {
    if (!response.ok) {
      throw new Error('Loading error!!!');
    }
    return response.text();
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.log('Errror!!! ' + error.message);

  })

 */

fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: 'Hello World!',
    body: 'Bar',
    userId: 1
  }),
  headers: {
    'Content-Type': 'application/json; charset=utf-8'
  }
})
  .then(res => res.json())
  .then(data => console.log(data))