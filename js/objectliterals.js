const Eric = {
    firstName: 'James',
    middleName: 'Eric',
    lastName: 'Couch',
    age: 52,
    weight: 215.5,
    isCool: true,
    favoriteMovies: ['The Matrix', 'The Godfather', 'The Dark Knight', 'Interstellar'],
    address: {
        street: '201 Shaffner St.',
        city: 'Ponder',
        state: 'TX',
        zip: '76259'
    }
}

console.log(Eric);
console.log(Eric.firstName, Eric.lastName);
console.log(Eric.favoriteMovies[1]);
console.log(Eric.address.city);

// destructuring
const { firstName, lastName, address: { city } } = Eric;
console.log(firstName, lastName, city);

Eric.email = 'eric.couch@cognizant.com';
console.log(Eric);

