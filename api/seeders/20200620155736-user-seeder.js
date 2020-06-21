'use strict';
const axios = require('axios');
const movie = require('../models/movie');
module.exports = {
    up: async(queryInterface, Sequelize) => {
        
        const insertMovies = moviesJSON => {
            // we decide which of the attributes we will take with map
            const movies = moviesJSON.map(m => ({
                title: m.title,
                overview: m.overview,
                poster_path: m.poster_path,
                popularity: m.popularity
            }));
           
            return queryInterface.bulkInsert('Movies', movies, {});
        }
        try {
            // connection to moviedb api with axios
            const res = await axios.get('https://api.themoviedb.org/3/movie/top_rated?api_key=2807dda8da681fc2c11920a0bdf6b569&language=es-Es')
            const moviesJSON = [];
            moviesJSON.push(...res.data.results); 
            // first page
            for (let i = 2; i < 100; i++) {
                // next pages
                const response = await axios.get('https://api.themoviedb.org/3/movie/top_rated?api_key=2807dda8da681fc2c11920a0bdf6b569&language=es-Es&page=' + i)
                moviesJSON.push(...response.data.results) 
            }
            console.log(moviesJSON.length)
            return insertMovies(moviesJSON);
        } catch (error) {
            console.log(error);
        }
    },
    down: (queryInterface, Sequelize) => {
       
    }
};