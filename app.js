
// 1.- BÁSICOS DE PETICIONES
// const request = require('request');
// const url = 'https://jsonplaceholder.typicode.com'

// request (`${url}/users`, (error, response, body) => {
//   console.log('error:', error); // Print the error if one occurred
//   console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//   console.log('body:', body); // Print the HTML for the "n" homepage.
// });

// console.log(alv)

// request (`${url}/posts`, (error, response, body) => {
//     console.log('error:', error); // Print the error if one occurred
//     console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//     console.log('body:', body); // Print the HTML for the "n" homepage.
//   });

// 2.- CHALLENGE-STARWARS

// const request = require('request');
// const url = 'https://swapi.co/api/'

// request (`${url}planets/5/`, (error, response, body) => {
// console.log('error:', error); // Print the error if one occurred
// console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
// const json = JSON.parse(body)
// console.log('This is body:', body); // Print the HTML for the "n" homepage.
// console.log ('This is Json', json)
// console.log (json.rotation_period)
// // console.log(JSON.stringify(json.name)) Convertir un JSON a string (puro texto)----
// });

// const request = require('request');
// const url = 'https://swapi.co/api/'

// request.get(`${url}planets/5/`, (error, response, body) => {
//     console.log('error:', error); // Print the error if one occurred
//     console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//     const json = JSON.parse(body)
//     console.log('This is body:', body); // Print the HTML for the "n" homepage.
//     console.log ('This is Json', json)
//     console.log (json.rotation_period)
//     // console.log(JSON.stringify(json.name)) -------Convertir un JSON a string (puro texto)----
//     });

// 3.- BONITO CHALLENGE STAR-WARS

// const request = require('request');
// const url = 'https://swapi.co/api/'

// const getSomething = (path, id) => {
//     request.get(`${url}${path}/${id}/`, (err, res, body) => {
//         console.log(err);
//         console.log(res.statusCode);
//         const json = JSON.parse(body);
//         console.log (`This is JSON`, json);
//         console.log (json.name);
//     }
// )};

// getSomething ('planets', "3"); 

// -----MANDAR A LLAMAR LA FUNCIÓN CON LOS PARÁMETROS "PATH E ID"-----

// 4.- -----POKEMON API TIPO Y NOMBRE-----

const request = require('request');
const url = 'https://pokeapi.co/api/v2/'

const getPokemon = (path, id) => {
    request.get(`${url}${path}/${id}/`, (err, res, body) => {
        console.log(err);
        console.log(res.statusCode);
        const json = JSON.parse(body);
        console.log (`This is JSON`, json);
        console.log (json.name);
    }
)};

getPokemon ('pokemon/charizard/', 'type/3/')

