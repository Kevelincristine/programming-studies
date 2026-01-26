//  Estudando fetch e introdução a API

fetch("https://jsonplaceholder.typicode.com/users")
.then(res => res.json())
.then(users => {
    users.forEach(users => {
        console.log(users.name);
    });
});