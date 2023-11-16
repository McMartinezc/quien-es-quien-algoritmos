/**
 *
 * Implementa una función que, dado un array de personajes del quien es quien, elimine aquella persona cuyo identificador  único coincide con el valor del parámetro idToRemove.
 * Usa adecuadamente el método filter para conseguirlo
 *
 * @param {array} people Array de personas del juego
 * @param {string} idToRemove Indentificador único de la persona a eliminar
 *
 * @return {array} Devuelve un array con todas las personas MENOS aquella que tenía el idToRemove
 */

function removePersonArray(people, idToRemove) {
  return people.filter((p)=> p.id !== idToRemove);
}

const people = [
  {
    name: { title: "Mr", first: "Karl", last: "Johnson" },
    gender: "male",
    picture: "https://randomuser.me/api/portraits/med/men/6.jpg",
    id: "11122222",
  },
  {
    name: { title: "Mr", first: "Jezdimir", last: "Popović" },
    gender: "male",
    picture: "https://randomuser.me/api/portraits/med/men/64.jpg",
    id: "458558716",
  },
  {
    name: { title: "Mrs", first: "Elli", last: "Hatala" },
    gender: "female",
    picture: "https://randomuser.me/api/portraits/med/women/55.jpg",
    id: "458558799",
  },
  {
    name: { title: "Ms", first: "Deniz", last: "Topçuoğlu" },
    gender: "female",
    picture: "https://randomuser.me/api/portraits/med/women/64.jpg",
    id: "45677777",
  },
  {
    name: { title: "Madame", first: "Margot", last: "Roche" },
    gender: "female",
    picture: "https://randomuser.me/api/portraits/med/women/21.jpg",
    id: "48888999",
  },
  {
    name: { title: "Mrs", first: "Potishana", last: "Buryak" },
    gender: "female",
    picture: "https://randomuser.me/api/portraits/med/women/88.jpg",
    id: "1234343243",
  },
  {
    name: { title: "Mr", first: "Çetin", last: "Çağıran" },
    gender: "male",
    picture: "https://randomuser.me/api/portraits/med/men/69.jpg",
    id: "00324324324",
  },
  {
    name: { title: "Mr", first: "Peter", last: "Thompson" },
    gender: "male",
    picture: "https://randomuser.me/api/portraits/med/men/25.jpg",
    id: "173-60-0652",
  },
  {
    name: { title: "Ms", first: "Caitlin", last: "Garrett" },
    gender: "female",
    picture: "https://randomuser.me/api/portraits/med/women/60.jpg",
    id: "0594407T",
  },
  {
    name: { title: "Ms", first: "Radomira", last: "Manuylenko" },
    gender: "female",
    picture: "https://randomuser.me/api/portraits/med/women/29.jpg",
    id: "3434234Y",
  },
];

console.log(removePersonArray(people, "11122222")); // Devuelve el mismo array, menos sin el primer elemento, el señor Karl Jonshon
console.log(removePersonArray(people, "458558716")); // Devuelve el mismo array, menos sin el señor Jedemiz Popovic (segundo elemento)
console.log(removePersonArray(people, "3434234Y")); // Devuelve el mismo array, menos sin la señora "Radomira Manuylenko", último elemento del array
