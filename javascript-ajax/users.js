var users = document.querySelector('#user-list');
var userxm = new XMLHttpRequest();
userxm.open('GET', 'https://jsonplaceholder.typicode.com/users');
userxm.addEventListener('load', function () {
  console.log('Status OF XHR:', userxm.status);
  console.log('Response OF XHR:', userxm.response);

  for (var i = 0; i < this.response.length; i++) {
    var list = document.createElement('li');
    list.textContent = this.response[i].name;
    users.appendChild(list);
  }
});

userxm.send();
