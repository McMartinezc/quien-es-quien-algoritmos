/**
 * Para nuestro juego de "Quien es Quien" necesitamos escoger un elemento de este array de personas al azar. ¿Cómo podriamos implementar una selección al azar entre todos los elementos del array?
 */

function getRandomItemArray(people) {
  const indexRandom = Math.floor(Math.random() * people.length);
  return people[indexRandom];
}

const people = [
    {
      name: { title: 'Mr', first: 'Karl', last: 'Johnson' },        
      gender: 'male',
      picture: 'https://randomuser.me/api/portraits/med/men/6.jpg', 
      id: '11122222'
    },
    {
      name: { title: 'Mr', first: 'Jezdimir', last: 'Popović' },    
      gender: 'male',
      picture: 'https://randomuser.me/api/portraits/med/men/64.jpg',
      id: '458558716'
    },
    {
      name: { title: 'Mrs', first: 'Elli', last: 'Hatala' },        
      gender: 'female',
      picture: 'https://randomuser.me/api/portraits/med/women/55.jpg',
      id: '458558799'
    },
    {
      name: { title: 'Ms', first: 'Deniz', last: 'Topçuoğlu' },
      gender: 'female',
      picture: 'https://randomuser.me/api/portraits/med/women/64.jpg',
      id: '45677777'
    },
    {
      name: { title: 'Madame', first: 'Margot', last: 'Roche' },
      gender: 'female',
      picture: 'https://randomuser.me/api/portraits/med/women/21.jpg',
      id: '48888999'
    },
    {
      name: { title: 'Mrs', first: 'Potishana', last: 'Buryak' },
      gender: 'female',
      picture: 'https://randomuser.me/api/portraits/med/women/88.jpg',
      id: '1234343243'
    },
    {
      name: { title: 'Mr', first: 'Çetin', last: 'Çağıran' },
      gender: 'male',
      picture: 'https://randomuser.me/api/portraits/med/men/69.jpg',
      id: '00324324324'
    },
    {
      name: { title: 'Mr', first: 'Peter', last: 'Thompson' },
      gender: 'male',
      picture: 'https://randomuser.me/api/portraits/med/men/25.jpg',
      id: '173-60-0652'
    },
    {
      name: { title: 'Ms', first: 'Caitlin', last: 'Garrett' },
      gender: 'female',
      picture: 'https://randomuser.me/api/portraits/med/women/60.jpg',
      id: '0594407T'
    },
    {
      name: { title: 'Ms', first: 'Radomira', last: 'Manuylenko' },
      gender: 'female',
      picture: 'https://randomuser.me/api/portraits/med/women/29.jpg',
      id: '3434234Y'
    }
  ]


console.log(getRandomItemArray(people)); // Cada vez que invoquemos esta función, de
